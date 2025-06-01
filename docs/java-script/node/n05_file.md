
# Simple File Server with Node.js

This section explores how to create a basic HTTP server in Node.js that provides remote access to files on the server's file system. Such a server can be used for various purposes, like enabling web applications to store and share data or allowing a group of people to access a shared set of files.

We will treat files as resources accessible via the HTTP protocol. Standard HTTP methods will be mapped to file operations:
*   **`GET`**: Read a file or list the contents of a directory.
*   **`PUT`**: Create or overwrite a file.
*   **`DELETE`**: Delete a file or an empty directory.
*   `MKCOL` (Make Collection/Directory - not explicitly implemented in the provided snippet but a common extension): Create a new directory.

The path in the HTTP request (e.g., `/myfiles/document.txt`) will be interpreted as the path to the file or directory on the server's file system.

## Basic Server Structure


```js
var http = require("http"), fs = require("fs");
var methods = Object.create(null);

http.createServer(function(request, response) {
	function respond(code, body, type) {
		if (!type) type = "text/plain";
		
		response.writeHead(code, {"Content-Type": type});
		
		if (body && body.pipe) 
			body.pipe(response);
		else
			response.end(body);
	}

	if (request.method in methods)
		methods[request.method](urlToPath(request.url), 
			respond, request);
	else
		respond(405, "Method " + request.method 
			+ " not allowed.");
}).listen(8000);
```

Using Node.js's built-in `http` module to create the server and the `fs` (filesystem) module to interact with files.

```javascript
// Import necessary built-in modules
const http = require('http');
const fs = require('fs');
const path = require('path'); // Useful for path manipulation
const { URL } = require('url'); // For parsing the request URL

// object to store handler functions for different HTTP methods
const methods = Object.create(null); 
// Creates an empty object without prototype properties

const server = http.createServer(function (request, response) {
    // Helper function to send responses back to the client
    function respond(code, body, type) {
        if (!type) {
            type = 'text/plain'; 
            // Default content type if not specified
        }
        response.writeHead(code, { 'Content-Type': type });

        if (body && typeof body.pipe === 'function') {
            // If 'body' is a Readable Stream (it has a .pipe() method),
            // pipe its contents directly to the 'response' Writable Stream.
            // This is efficient for sending large files.
            body.pipe(response);
        } else {
            // Otherwise, assume 'body' is a string, a Buffer, or null.
            // End the response, sending the body.
            response.end(body);
        }
    }

    // Safely parse the request URL to get the pathname
    let requestPath;
    try {
        // request.url might be like "/some/path?query=true"
        // We only want the "/some/path" part for file system access.
        const parsedUrl = new URL(request.url,
		        `http://${request.headers.host}`);
        requestPath = parsedUrl.pathname;
    } catch (e) {
        respond(400, 'Invalid URL path');
        return;
    }

    // Convert the URL path to an absolute file system path
    // This is a basic example; robust path handling would involve more security checks
    // (e.g., to prevent directory traversal attacks like ../../etc/passwd)
    const filePath = urlToPath(requestPath);

    if (request.method in methods) {
        // If we have a handler for the requested HTTP method, call it
        methods[request.method](filePath, respond, request, response); // Pass response too for more flexibility
    } else {
        // If the method is not supported, send a 405 "Method Not Allowed" error
        respond(405, `Method ${request.method} not allowed.`);
    }
});

const port = 8000;
server.listen(port, () => {
    console.log(`File server listening on http://localhost:${port}`);
    console.log('Try commands like:');
    console.log('  curl http://localhost:8000/my_directory');
    console.log('  curl -X PUT -d "Hello from PUT" http://localhost:8000/newfile.txt');
    console.log('  curl http://localhost:8000/newfile.txt');
    console.log('  curl -X DELETE http://localhost:8000/newfile.txt');
});

// Helper function to convert URL path to a safe file system path
// WARNING: This is a simplified version. Production code needs more robust security.
function urlToPath(urlPath) {
    // Decode URI components (e.g., %20 becomes a space)
    let decodedPath = decodeURIComponent(urlPath);

    // For security, prevent access outside the server's base directory.
    // Here, we assume the server serves files from its current working directory.
    const baseDirectory = process.cwd(); // Current Working Directory
    let resolvedPath = path.resolve(baseDirectory, decodedPath.slice(1)); // .slice(1) to remove leading '/'

    // Basic check to ensure the path doesn't try to go "above" the base directory
    if (!resolvedPath.startsWith(baseDirectory)) {
        // This is a naive check. More sophisticated libraries (like 'path-is-inside') are better.
        // For this example, we'll throw an error that will be caught and result in a 403 or similar.
        // Or, more simply, just return a path that will likely result in a 404 or access denied.
        // For now, we'll let it be, but be aware of the security risk of directory traversal.
        console.warn(`Potential directory traversal attempt: ${decodedPath} resolved to ${resolvedPath}`);
        // To be safer, you might return a path that will deliberately fail fs.stat or throw an error.
        // For simplicity in this example, we proceed, but in production, this is a critical security point.
    }
    return resolvedPath;
}
```

**Explanation of the Core Structure:**

1.  **`methods = Object.create(null);`**: This object will act as a dispatcher. We'll add properties to it where the key is an HTTP method name (e.g., "GET", "PUT") and the value is the function that handles that method. Using `Object.create(null)` creates an object with no inherited properties from `Object.prototype`, which can be slightly safer for use as a map.
2.  **`http.createServer(...)`**: This is the standard way to create an HTTP server. The callback function is executed for every incoming request.
3.  **`respond(code, body, type)` function**:
    *   This is a utility function to standardize how we send responses.
    *   It takes an HTTP `status code`, the `response body`, and an optional `content type`.
    *   **Streaming Support**: If the `body` is a readable stream (identified by having a `pipe` method), it efficiently pipes the stream's content directly to the `response` object (which is a writable stream). This is crucial for sending large files without loading them entirely into memory.
    *   Otherwise, it assumes the `body` is a string or `null` and sends it using `response.end()`.
4.  **URL Parsing and Path Conversion**:
    *   `request.url` contains the raw URL string from the client (e.g., `/files/report.pdf?version=2`).
    *   `new URL(request.url, base)` is used to parse this URL. We are primarily interested in the `pathname` part.
    *   `urlToPath(requestPath)`: This (currently simplified) function is responsible for converting the URL path into an actual file system path. **Security is paramount here** to prevent directory traversal attacks (e.g., a client requesting `../../../../etc/passwd`). A real-world server needs robust path validation and sanitization.
5.  **Method Dispatching**:
    *   `if (request.method in methods)`: Checks if we have a handler defined for the HTTP method used in the request (e.g., "GET", "POST", "DELETE").
    *   If a handler exists, it's called with the `filePath`, the `respond` callback, and the original `request` and `response` objects.
    *   If no handler is defined for the method, a `405 Method Not Allowed` error is sent.

Initially, this server will return `405 Method Not Allowed` for all requests because we haven't defined any handlers in the `methods` object yet.

## Implementing the GET Method

The `GET` method will be used to:
1.  Retrieve the content of a file if the path points to a file.
2.  List the contents of a directory if the path points to a directory.

To determine the correct `Content-Type` header for files, we'll use the `mime` library. MIME types (e.g., `text/html`, `image/jpeg`, `application/pdf`) tell the browser how to interpret the file content.

**Install the `mime` package:**
Open your terminal in the directory where your server script lives and run:
```bash
npm install mime
```
This will download the `mime` package and add it to your `node_modules` directory and `package.json` (if you have one).

```javascript
// (Add this to your existing server code, after the 'methods' object is defined)
const mime = require('mime'); // Require the installed mime package

methods.GET = function (filePath, respond, request, response) {
    fs.stat(filePath, function (error, stats) {
        if (error) {
            if (error.code === 'ENOENT') { // ENOENT: Error NO ENTry (file/directory does not exist)
                respond(404, 'File not found');
            } else {
                // Other errors (e.g., permission denied)
                respond(500, `Server error: ${error.toString()}`);
            }
        } else if (stats.isDirectory()) {
            // If the path is a directory, read its contents
            fs.readdir(filePath, function (error, files) {
                if (error) {
                    respond(500, `Server error: ${error.toString()}`);
                } else {
                    // Send a plain text list of files, one per line
                    respond(200, files.join('\n'));
                    // For a fancier directory listing, you might generate HTML here.
                }
            });
        } else {
            // If the path is a file, stream its contents
            const fileStream = fs.createReadStream(filePath);

            // Handle errors on the file stream (e.g., if the file is deleted after stat but before read)
            fileStream.on('error', (err) => {
                respond(500, `Error reading file: ${err.toString()}`);
            });

            // Determine the MIME type based on the file extension
            const contentType = mime.getType(filePath) || 'application/octet-stream'; // Default if type unknown
            respond(200, fileStream, contentType);
        }
    });
};
```

**Explanation of `methods.GET`:**

1.  **`fs.stat(filePath, callback)`**: This asynchronous function retrieves information (stats) about the file or directory at `filePath`.
    *   `error`: If an error occurs (e.g., file not found, permissions issue).
    *   `stats`: An object containing details like file size (`stats.size`), modification time (`stats.mtime`), and methods to check its type.
2.  **Error Handling (`error.code === 'ENOENT'`)**: If `fs.stat` returns an error and the `error.code` is `ENOENT`, it means the file or directory doesn't exist, so we send a `404 Not Found`. Other errors result in a `500 Internal Server Error`.
3.  **Directory Listing (`stats.isDirectory()`)**:
    *   If `stats.isDirectory()` is true, we use `fs.readdir(filePath, callback)` to asynchronously read the names of files and subdirectories within that directory.
    *   The list of names is then joined by newline characters and sent as the response body with a `200 OK` status.
4.  **File Streaming**:
    *   If the path points to a regular file, we create a readable stream using `fs.createReadStream(filePath)`.
    *   `mime.getType(filePath)`: This function from the `mime` library attempts to determine the correct MIME type based on the file's extension (e.g., `.txt` -> `text/plain`, `.html` -> `text/html`). If the type can't be determined, `application/octet-stream` is a safe default, prompting the browser to usually download the file.
    *   The `fileStream` and its `contentType` are passed to our `respond` function, which will pipe the stream to the HTTP response.
    *   An error handler is added to `fileStream` in case something goes wrong during the streaming process.

## Implementing the DELETE Method

The `DELETE` method will remove a file or an empty directory.

```javascript
// (Add this to your existing server code)
methods.DELETE = function (filePath, respond, request, response) {
    fs.stat(filePath, function (error, stats) {
        if (error) {
            if (error.code === 'ENOENT') {
                // If the file doesn't exist, it's already "deleted".
                // HTTP standard suggests DELETE should be idempotent.
                // Idempotent means making the same request multiple times
                // has the same effect as making it once.
                respond(204); // 204 No Content (success, but no body to return)
            } else {
                respond(500, `Server error: ${error.toString()}`);
            }
        } else if (stats.isDirectory()) {
            // If it's a directory, use fs.rmdir to remove it (only works if empty)
            fs.rmdir(filePath, function(rmdirError) {
                if (rmdirError) {
                    respond(500, `Error deleting directory: ${rmdirError.toString()}. Ensure it's empty.`);
                } else {
                    respond(204); // Success, no content
                }
            });
        } else {
            // If it's a file, use fs.unlink to delete it
            fs.unlink(filePath, function(unlinkError) {
                if (unlinkError) {
                    respond(500, `Error deleting file: ${unlinkError.toString()}`);
                } else {
                    respond(204); // Success, no content
                }
            });
        }
    });
};

// The original note had a 'respondErrorOrNothing' helper.
// While good for DRY, for clarity in these expanded notes,
// the logic is inlined in the fs.rmdir and fs.unlink callbacks.
// You could define it like this if preferred:
/*
function respondErrorOrNothing(respondCallback) {
    return function(error) {
        if (error) {
            respondCallback(500, error.toString());
        } else {
            respondCallback(204); // No Content
        }
    };
}
// And then use it:
// fs.rmdir(filePath, respondErrorOrNothing(respond));
// fs.unlink(filePath, respondErrorOrNothing(respond));
*/
```

**Explanation of `methods.DELETE`:**

1.  **`fs.stat`**: First, we check if the target path exists and what it is.
2.  **Non-Existent File (`error.code === 'ENOENT'`)**: If the file doesn't exist, the `DELETE` operation can be considered successful (idempotency). We respond with `204 No Content`, which indicates success without a response body.
3.  **Deleting a Directory (`stats.isDirectory()`)**:
    *   If the path is a directory, `fs.rmdir(filePath, callback)` is used. This function only successfully removes *empty* directories. If the directory is not empty, it will result in an error.
4.  **Deleting a File**:
    *   If the path is a file, `fs.unlink(filePath, callback)` is used to delete it.
5.  **Callbacks and `204 No Content`**: For successful deletions, we respond with `204 No Content`.

## Implementing the PUT Method

The `PUT` method will be used to create a new file or overwrite an existing file with the content provided in the request body.

```javascript
// (Add this to your existing server code)
methods.PUT = function (filePath, respond, request, response) {
    // Create a Writable Stream to the target file path.
    // This will create the file if it doesn't exist, or truncate it if it does.
    const outputStream = fs.createWriteStream(filePath);

    // Handle errors during file writing (e.g., disk full, permissions)
    outputStream.on('error', function (error) {
        console.error('Error writing to file:', error);
        respond(500, `Server error writing file: ${error.toString()}`);
    });

    // When the 'request' stream (Readable) has been fully piped to 'outputStream' (Writable)
    // and 'outputStream' has finished writing all data to the file system,
    // the 'finish' event is emitted on the 'outputStream'.
    outputStream.on('finish', function () {
        respond(204); // Success, no content to return (file created/updated)
                      // Some might use 201 Created if it's a new resource.
    });

    // The 'request' object is a Readable Stream representing the incoming request body.
    // Pipe the request body directly to the file's Writable Stream.
    // This efficiently streams data from the client to the file without buffering
    // the entire content in memory.
    request.pipe(outputStream);

    // It's also good practice to handle errors on the request stream itself,
    // in case the client disconnects prematurely or sends malformed data.
    request.on('error', (err) => {
        console.error('Error reading request stream for PUT:', err);
        // Try to clean up the partially written file if an error occurs on the request stream
        outputStream.end(() => { // Ensure outputStream is closed
            fs.unlink(filePath, (unlinkErr) => { // Attempt to delete partial file
                if (unlinkErr) console.error('Error deleting partial file on PUT error:', unlinkErr);
            });
        });
        // It's tricky to send a response here as the outputStream might have already sent headers.
        // Best effort is to ensure the connection is closed if not already handled by Node's internals.
    });
};
```

**Explanation of `methods.PUT`:**

1.  **`fs.createWriteStream(filePath)`**: Creates a writable stream to the specified `filePath`.
    *   If the file doesn't exist, it will be created.
    *   If the file exists, its content will be overwritten (truncated).
2.  **Event Handling on `outputStream`**:
    *   `'error'`: Catches errors that occur while writing to the file (e.g., disk full, no permissions).
    *   `'finish'`: This event is emitted when all data has been flushed to the underlying system (i.e., written to the file) and the stream has been closed. We respond with `204 No Content` to indicate success. (Some APIs use `201 Created` if the resource was newly created, and `200 OK` or `204 No Content` if it was modified. `204` is simple and common for `PUT`).
3.  **`request.pipe(outputStream)`**: This is the core of the `PUT` handler.
    *   The `request` object (for incoming HTTP requests with a body like PUT or POST) is a readable stream.
    *   We `pipe` the data from the `request` stream directly into the `outputStream` (the file). This is highly efficient for transferring file content, as it avoids loading the entire request body into memory.
4.  **Error Handling on `request` stream**: It's important to also handle errors on the `request` stream. If the client aborts the upload, this `error` event will fire. Attempting to clean up partially written files is good practice.

## Testing with `curl`

The `curl` command-line utility is excellent for testing HTTP servers.

*   **`curl http://localhost:8000/file.txt`**
    *   Makes a `GET` request. Initially, this should respond with `File not found` (or a 404 error).
*   **`curl -X PUT -d "hello content" http://localhost:8000/file.txt`**
    *   `-X PUT`: Specifies the `PUT` HTTP method.
    *   `-d "hello content"`: Sends "hello content" as the request body.
    *   This should create `file.txt` (or overwrite it) with "hello content". The server should respond with `204 No Content`.
*   **`curl http://localhost:8000/file.txt`**
    *   Another `GET` request. This time, it should respond with "hello content".
*   **`curl -X DELETE http://localhost:8000/file.txt`**
    *   `-X DELETE`: Specifies the `DELETE` HTTP method.
    *   This should delete `file.txt`. The server should respond with `204 No Content`.
*   **`curl http://localhost:8000/file.txt`**
    *   A final `GET` request. This should again respond with `File not found`.

**To test directory listing:**
1.  Manually create a directory in the same folder as your server script, e.g., `mkdir my_test_dir`.
2.  Put a file in it, e.g., `echo "test file" > my_test_dir/test.txt`.
3.  `curl http://localhost:8000/my_test_dir`
    *   This should list `test.txt`.

## Error Handling Considerations (Callback Hell and Promises)

The provided code uses nested callbacks extensively, which is common in traditional Node.js I/O operations. This can lead to what's often called "callback hell" or the "pyramid of doom," making code harder to read, reason about, and maintain.

**Challenges with Callback-Based Error Handling:**

*   **Error Propagation**: Errors are not automatically propagated up the call stack as they are with synchronous exceptions. Each callback needs to explicitly check for an `error` argument and handle or pass it along.
*   **Repetitive Code**: You often end up writing similar error-checking logic in multiple callbacks.
*   **Centralized Error Handling**: It's difficult to have a single, centralized place to catch all errors for a given request-response cycle using only `try/catch` at the top level, because asynchronous operations happen outside the initial `try` block's execution scope.

**Using Promises for Better Asynchronous Code:**

Promises provide a more structured way to manage asynchronous operations and their outcomes (success or failure).

*   **Chaining**: Promises can be chained (`.then().then().catch()`), leading to flatter, more readable code.
*   **Error Handling**: A single `.catch()` at the end of a promise chain can handle errors from any preceding asynchronous operation in the chain.
*   **Composition**: Promises make it easier to compose multiple asynchronous operations.

**Node.js and Promises:**

*   Many modern Node.js libraries and newer versions of built-in modules (like `fs.promises`) directly return Promises.
*   For older callback-based APIs, you can "promisify" them. The `util.promisify` utility in Node.js can convert many standard callback-style functions into promise-returning functions.
*   Third-party promise libraries (though `util.promisify` and native Promises are often sufficient now) like `bluebird` historically offered advanced features, including functions like `denodeify` (mentioned in your notes, similar in purpose to `util.promisify`).

**Example of Promisifying `fs.stat` (Conceptual):**

```javascript
const util = require('util');
const fs = require('fs');

const statAsync = util.promisify(fs.stat);

// ... inside your GET handler ...
// methods.GET = async function (filePath, respond, request, response) { // Note: async function
//     try {
//         const stats = await statAsync(filePath);
//         if (stats.isDirectory()) {
//             const files = await util.promisify(fs.readdir)(filePath);
//             respond(200, files.join('\n'));
//         } else {
//             const fileStream = fs.createReadStream(filePath);
//             // ... (stream handling as before) ...
//             respond(200, fileStream, mime.getType(filePath) || 'application/octet-stream');
//         }
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             respond(404, 'File not found');
//         } else {
//             respond(500, `Server error: ${error.toString()}`);
//         }
//     }
// };
```
Using `async/await` with promises drastically improves the readability and structure of asynchronous code, making error handling more akin to synchronous `try/catch` blocks.

Refactoring the entire file server to use Promises and `async/await` would be a good exercise to see the benefits in action.




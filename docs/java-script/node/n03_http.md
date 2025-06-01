

# Node.js Modules


## Modules in Node.js: The CommonJS System

Node.js itself has a relatively small core set of functionalities available in the global scope. To access most of its built-in features (like file system operations, networking, etc.) and to organize your own code, Node.js utilizes a **module system**.

The primary module system built into Node.js is **CommonJS**. This system defines how modules are structured, how they can export functionality, and how other modules can import that functionality.

### Key Concepts of CommonJS Modules:

1.  **`require()` function:** This is the core function used to load (import) modules. When you call `require('module-name')`, Node.js performs a lookup to find and execute the specified module.

2.  **`module.exports` or `exports`:** Within a module file, you use `module.exports` (or its shorthand `exports`) to specify what parts of that module (functions, objects, variables) should be made available to other modules that `require` it.

3.  **Scope:** Each module has its own scope. Variables and functions defined within a module are private to that module unless they are explicitly exported via `module.exports`.

#### How `require()` Resolves Module Paths:

Node.js has a specific algorithm for resolving the string you pass to `require()` into an actual file:

1.  **Core Modules:** If the string matches the name of a Node.js built-in module (e.g., `require('fs')`, `require('http')`), Node.js loads that core module directly. These are pre-compiled with Node.js.

2.  **File Paths (Relative or Absolute):**
    *   Paths starting with `/` are treated as absolute paths.
    *   Paths starting with `./` (current directory) or `../` (parent directory) are treated as relative paths. Node.js resolves these relative to the directory of the file that contains the `require()` call.
    *   **Example:** If you have a file `/home/user/project/app.js` and it contains `require('./utils/helpers')`, Node.js will look for:
        1.  `/home/user/project/utils/helpers.js`
        2.  `/home/user/project/utils/helpers.json`
        3.  `/home/user/project/utils/helpers.node` (for binary C++ add-ons)
        4.  If `helpers` is a directory: `/home/user/project/utils/helpers/index.js` (or `.json`, `.node`) or the file specified in `helpers/package.json`'s `main` field.
    *   The `.js` file extension can often be omitted. If you `require('./world/world')` from `/home/marijn/elife/run.js`, Node.js will attempt to load `/home/marijn/elife/world/world.js`.

3.  **`node_modules` Directory (Third-Party Libraries):**
    *   If the string passed to `require()` does not start with `/`, `./`, or `../` and is not a core module (e.g., `require('express')`), Node.js assumes it's a module installed in a `node_modules` directory.
    *   Node.js will look for the module in the `node_modules` directory of the current file's directory.
    *   If not found, it will move up to the parent directory's `node_modules` and search there, continuing this process up to the root of the file system.
    *   It also checks global `node_modules` locations, though relying on this is generally discouraged in favor of project-local dependencies.
    *   **Example:** `require('elife')` would first look for `node_modules/elife/` in the current directory, then in `../node_modules/elife/`, and so on. Inside `node_modules/elife/`, it typically looks for an `index.js` file or the file specified in `elife/package.json`'s `main` field.

This module system is fundamental to organizing code in Node.js, promoting reusability, and managing dependencies.

## The HTTP Module: Building Web Servers and Clients

The `http` module is one of Node.js's core modules, providing essential functionality for creating HTTP servers and making HTTP requests (acting as an HTTP client).

### Creating an HTTP Server

You can create a basic web server that listens for incoming HTTP requests and sends back responses.

```javascript
// Import the built-in 'http' module
const http = require('http'); 

// Define the port the server will listen on
const port = 8000;

// Create the HTTP server
// The function passed to createServer is the request handler.
// It's executed for each incoming HTTP request.
const server = http.createServer(function (request, response) {
    // 'request' object: Contains information about the incoming client request
    // (e.g., URL, headers, method).
    // 'response' object: Used to send data back to the client.

    // 1. Set the Response Headers:
    //    - response.writeHead(statusCode, headersObject)
    //    - 200 is the HTTP status code for "OK".
    //    - {'Content-Type': 'text/html'} tells the client browser
    //      to interpret the response body as HTML.
    response.writeHead(200, { 'Content-Type': 'text/html' });

    // 2. Write the Response Body:
    //    - response.write(data) can be called multiple times if you
    //      want to send the response in chunks (streaming).
    response.write('<h1>Hi!</h1>');
    response.write('<p>You requested the path: <code>' + request.url + '</code></p>');

    // 3. End the Response:
    //    - response.end() signals that the response is complete.
    //    - No more data can be written after this.
    response.end();
});

// 4. Start the Server:
//    - server.listen(port, [hostname], [callback])
//    - This tells the server to start listening for connections on the specified port.
//    - The callback function is executed once the server has successfully started.
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    console.log('Open your browser and navigate to this address.');
    console.log('Press Ctrl+C to stop the server.');
});
```

**Explanation:**

**`request` object:** Contains details about the incoming client request, such as:
*   `request.url`: The path requested by the client (e.g., `/about`, `/products?id=123`).
*   `request.method`: The HTTP method used (e.g., `GET`, `POST`, `PUT`).
*   `request.headers`: An object containing the request headers.

**`response` object:** Used to construct and send the response back to the client.
*   `response.writeHead(statusCode, headers)`: Sends the HTTP status code (e.g., `200` for OK, `404` for Not Found) and response headers (e.g., `Content-Type`, `Cache-Control`).
*   `response.write(chunk)`: Sends a chunk of the response body. Can be called multiple times.
*   `response.end([data])`: Signals the end of the response. Optionally, a final chunk of data can be passed.

**`server.listen(port)`:** Makes the server start listening for incoming connections on the specified `port`. If you access `http://localhost` in your browser, it defaults to port 80. Since our server is on port 8000, you must use `http://localhost:8000`.

A **real-world web server** would typically do much more:
*   **Routing:** Examine `request.url` to determine what resource the client is asking for and what action to take.
*   **Method Handling:** Check `request.method` (e.g., `GET`, `POST`, `PUT`, `DELETE`) to perform different operations (read, create, update, delete data).
*   **Request Body Parsing:** For `POST` or `PUT` requests, it would need to parse the data sent in the request body.
*   **Error Handling:** Gracefully handle errors and send appropriate error responses.
*   **Serving Static Files:** Serve HTML, CSS, JavaScript, and image files.
*   **Interacting with Databases:** Fetch or store data.

### Creating an HTTP Client (Making Requests)

The `http` module also allows your Node.js application to act as an HTTP client, making requests to other servers.

```javascript
const http = require('http');

// Configuration object for the request
const options = {
    hostname: 'eloquentjavascript.net', // The server to connect to
    path: '/20_node.html',  // The path of resource on the server
    method: 'GET',          // The HTTP method
    headers: {
        'Accept': 'text/html'          
        // Request header indicating we accept HTML
    }
};

// Create the request
// http.request(options, callback)
const request = http.request(options, function (response) {
    // This callback is executed when the server sends back a response.
    // 'response' object: A Readable Stream containing response data from the server.

    console.log('Server responded with status code:', response.statusCode);
    console.log('Response headers:', response.headers);

    let responseBody = '';

    // The 'response' object is a Readable Stream.
    // Listen for 'data' events to receive chunks of the response body.
    response.on('data', function (chunk) {
        responseBody += chunk; 
        // Append each chunk to our body string
    });

    // Listen for the 'end' event, which signifies the entire response has been received.
    response.on('end', function () {
        console.log('--- Response Body Start ---');
        // console.log(responseBody.toString()); // If responseBody is a Buffer
        console.log(responseBody); // If chunks were already strings (e.g., UTF-8 encoded)
        console.log('--- Response Body End ---');
    });

    // Listen for 'error' events on the response stream
    response.on('error', function (err) {
        console.error('Error during response:', err.message);
    });
});

// Handle errors that occur during the request itself 
// (e.g., DNS lookup failure, connection refused)
request.on('error', function (err) {
    console.error('Error making the request:', err.message);
});

// End the request. For GET requests, no body is typically sent.
// For POST or PUT requests, you would use 
// request.write(data) before request.end().
request.end();

console.log('Request sent. Waiting for response...');
```

**Explanation:**

*   **`http.request(options, callback)`:**
    *   The first argument, `options`, is an object that configures the request (hostname, path, method, headers, etc.).
    *   The second argument, `callback`, is a function that will be called once the server responds. This callback receives a `response` object.

*   **`response` object (Client-side):** This object is a **Readable Stream**. It allows you to read the data sent back by the server. You typically listen for `data` events to get chunks of the response body and an `end` event when the response is complete.

*   **`request.end([data])`:** Finalizes the request. For `GET` requests, you usually call `request.end()` without arguments as they don't have a request body. For `POST` or `PUT` requests, you might use `request.write(payload)` to send data in the request body before calling `request.end()`.

*   **`https` module:** For making requests to secure URLs (`https://...`), Node.js provides a separate `https` module. It has its own `request` function, which works very similarly to `http.request` but handles the SSL/TLS encryption.


---
title: "Packages - 03 Working with 3rd Party Libraries"
description: ""
summary: ""
date: 2025-02-12T00:04:42+05:30
lastmod: 2025-02-12T00:04:42+05:30
draft: false
weight: 88
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



In Python, you can extend your program’s functionality by utilizing **third-party libraries** (also called **packages**). These are pre-written code libraries that provide useful functions for common tasks. By using these packages, you can save time and avoid reinventing the wheel.

#### 1. Installing Packages with `pip`

- **PyPI (Python Package Index)** is the central repository for Python packages. You can search for packages and install them using **`pip`**.

- To install a package, use the `pip install` command. For example, to install the **`cowsay`** package (which generates ASCII art), you would run:

```bash
pip install cowsay
```


Once installed, you can import and use these libraries in your program.

---

### Example 1: Using `cowsay` to Create Fun ASCII Art

The **`cowsay`** package allows you to generate funny ASCII art (like a cow or T-Rex) with custom messages. Here’s how to use it:

```python
import cowsay
import sys  # For command-line argument handling

# Check if exactly one argument is passed (the name after the script)
if len(sys.argv) == 2:
    # Display a cow saying "Hello, [argument]"
    cowsay.cow("Hello, " + sys.argv[1])

if len(sys.argv) == 2:
    # Display a T-Rex saying "Hello, [argument]"
    cowsay.trex("Hello, " + sys.argv[1])
```

- **`sys.argv`**: This is a list that stores command-line arguments. `sys.argv[0]` is always the name of the script, and `sys.argv[1]` contains the first argument provided by the user.
- **`cowsay.cow()`** and **`cowsay.trex()`**: These functions display ASCII art with a cow or a T-Rex, and the string passed as an argument will be displayed inside the speech bubble.

---

### 2. Working with APIs (Application Programming Interfaces)

An **API** is a set of protocols that allow different software applications to communicate with each other. In Python, you can use APIs to fetch data from external services, like retrieving song data from iTunes.

One popular library for interacting with APIs is **`requests`**.

- To install the **`requests`** package, you can run:

```bash
pip install requests
```


---

### Example 2: Fetching Data from an API

Here’s how you can use the **`requests`** library to fetch song data from the iTunes API based on a search term provided by the user:

```python
import json
import requests
import sys

# Check if the correct number of arguments is provided
if len(sys.argv) != 2:
    sys.exit("Usage: python script.py <search_term>")  # Exit if no search term

# Make a request to the iTunes API with the search term
response = requests.get("https://itunes.apple.com/search?entity=song&limit=1&term=" + sys.argv[1])

# Print the raw JSON response
print(response.json())
```

JSON - Java script object notation (getting the file data from itune in text file) language agnostics means any language can be used to read and edit it.

- **`requests.get()`**: This function sends an HTTP GET request to the provided URL. In this case, it sends a request to the iTunes API, using the search term provided by the user.
- **`response.json()`**: The response from the API is in JSON format. This method converts the JSON response into a Python dictionary.
- **`sys.exit()`**: If the correct number of arguments is not provided, the program will exit with a helpful message.

---

### 3. Formatting JSON Data for Readability

JSON data from APIs is often not formatted for easy reading. You can use **`json.dumps()`** to format the output in a more human-readable way by adding indentation.

#### Example 3: Formatting JSON Output

```python
import json
import requests
import sys

if len(sys.argv) != 2:
    sys.exit("Usage: python script.py <search_term>")

response = requests.get("https://itunes.apple.com/search?entity=song&limit=1&term=" + sys.argv[1])

# Format the JSON data with an indentation of 2 spaces for better readability
print(json.dumps(response.json(), indent=2))
```

- **`json.dumps()`**: This method converts a Python object (like a dictionary) into a JSON string. By specifying `indent=2`, the resulting JSON string is formatted with 2 spaces of indentation, making it easier to read.

---

### 4. Extracting Specific Data from JSON Responses

When you receive data from an API in JSON format, you often only need a portion of it. You can access specific fields by referencing their keys.

#### Example 4: Extracting Track Names from iTunes Search

```python
import json
import requests
import sys

if len(sys.argv) != 2:
    sys.exit("Usage: python script.py <search_term>")

response = requests.get("https://itunes.apple.com/search?entity=song&limit=1&term=" + sys.argv[1])
data = response.json()

# Loop through the 'results' key and print the 'trackName' of each result
for song in data["results"]:
    print(song["trackName"])
```

- **`data["results"]`**: The API returns a JSON object with a key called `"results"`. This contains a list of songs that match the search term.
- **`song["trackName"]`**: Each song in the list has a `"trackName"` field that contains the name of the song.

---

### 5. Fetching Multiple Results

To fetch more results from the API (e.g., 50 songs instead of just 1), you can increase the `limit` parameter in the URL.

#### Example 5: Fetching Multiple Track Names

```python
import json
import requests
import sys

if len(sys.argv) != 2:
    sys.exit("Usage: python script.py <search_term>")

response = requests.get("https://itunes.apple.com/search?entity=song&limit=50&term=" + sys.argv[1])
data = response.json()

# Loop through the 'results' and print the 'trackName' for each song
for song in data["results"]:
    print(song["trackName"])
```

- **`limit=50`**: This increases the number of search results returned by the API to 50 instead of just 1.
- **`data["results"]`**: We loop through the results and print the `trackName` for each song.

---

### Conclusion

- **Third-party libraries** in Python, like **`cowsay`** and **`requests`**, allow you to add functionality to your programs quickly and efficiently.
- **APIs** enable your program to interact with external services, such as retrieving data from iTunes. The **`requests`** library is an easy-to-use tool for making HTTP requests to APIs.
- **JSON** is the format in which most APIs return data. You can use Python’s built-in **`json`** library to parse and manipulate JSON data.
- Whether you’re working with fun tools like ASCII art or building more complex programs that interact with web services, these techniques will help you expand your Python programming skills.

By learning how to use third-party libraries, interact with APIs, and work with JSON data, you’ll be able to create more dynamic and powerful Python applications.

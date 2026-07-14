# Day 1 — HTTP Basics with curl

## Main Idea

My computer is the client.
The website/API server is the server.
The client sends an HTTP request.
The server sends an HTTP response.

Simple flow:

```text
Client → Request → Server → Response → Client
```

---

## Challenge 1 — Inspect a Raw HTTP Response

### Command

```powershell
curl.exe -i https://httpbin.org/get
```

### Status Code

```text
HTTP/1.1 200 OK
```

### Content-Type

```text
Content-Type: application/json
```

### What Happened

I sent a GET request to `https://httpbin.org/get`.

The server replied successfully with `200 OK`.

The server returned JSON data because the response `Content-Type` was `application/json`.

### Important Flags

```text
-i = show response headers and body
-I = show only response headers
-v = show detailed technical request/response information
```

---

## Challenge 2 — Fetch JSON and Save It to a File

### Command

```powershell
curl.exe https://jsonplaceholder.typicode.com/todos/1 -o todo.json
```

### Output File

```text
todo.json
```

### JSON Received

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

### Data Types Present

```text
Object  = whole JSON structure
Number  = userId, id
String  = title
Boolean = completed
```

### What Happened

I requested one todo item from the server.

The server returned JSON data.

The `-o todo.json` option saved the response into a file named `todo.json`.

---

## Challenge 3 — Send JSON Data with POST

### body.json File

```json
{
  "name": "Nadeem",
  "course": "HTTP",
  "day": 1
}
```

### Command

```powershell
curl.exe -X POST https://httpbin.org/post -H "Content-Type: application/json" -H "X-Arman: hello" --data-binary "@body.json"
```

### Status Code

```text
200 OK
```

### Proof That Header Was Received

```json
"X-Arman": "hello"
```

### Proof That JSON Body Was Received

```json
"json": {
  "course": "HTTP",
  "day": 1,
  "name": "Nadeem"
}
```

### What Happened

I sent data from `body.json` to the server using a POST request.

The header `Content-Type: application/json` told the server that I was sending JSON.

The custom header `X-Arman: hello` was also received by the server.

The server returned my JSON data back, proving that it received the body correctly.

---

## Challenge 4 — Produce 200, 404, and 500

### 200 Command

```powershell
curl.exe -i https://httpbin.org/status/200
```

### Result

```text
HTTP/1.1 200 OK
```

### Meaning

```text
200 = Success. The request was completed successfully.
```

---

### 404 Command

```powershell
curl.exe -i https://httpbin.org/status/404
```

### Result

```text
HTTP/1.1 404 NOT FOUND
```

### Meaning

```text
404 = Not Found. The requested resource does not exist.
```

### Fault

```text
Usually client/request-side problem.
```

---

### 500 Command

```powershell
curl.exe -i https://httpbin.org/status/500
```

### Result

```text
HTTP/1.1 500 INTERNAL SERVER ERROR
```

### Meaning

```text
500 = Server Error. Something failed inside the server.
```

### Fault

```text
Server-side problem.
```

---

## Boundary Question

### When would I NOT use GET to send data, and why?

I would not use GET when sending sensitive data, large data, or data that creates or changes something on the server.

GET is mainly used for reading or retrieving information.

GET data can appear in the URL, browser history, server logs, and monitoring systems.

For sending, creating, or changing data, POST is better.

---

## Final Summary

```text
Client = my computer
Server = another computer receiving the request
HTTP = communication rule between client and server
curl = tool used to send HTTP requests
GET = retrieve/read data
POST = send data
Headers = extra request information
Body = actual data being sent
JSON = structured data format
200 = success
404 = not found
500 = server error
Git = saves my work history
GitHub = stores my work online
```
## Stuck On

- Understanding folder location in PowerShell.
- Understanding why `body.json` must be in the same current folder.
- Understanding why `@body.json` failed when the file was missing.
- Understanding Git repository setup and the hidden `.git` folder.
- Understanding the difference between local Git commit and GitHub upload.
- Understanding GitHub remote URL and why a URL alone is not a PowerShell command.
- Understanding the difference between Git, GitHub, commit, push, and upload.

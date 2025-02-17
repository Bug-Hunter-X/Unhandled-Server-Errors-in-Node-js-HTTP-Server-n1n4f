# Unhandled Server Errors in Node.js HTTP Server
This repository demonstrates a common error in Node.js where HTTP server errors are not properly handled, leading to silent crashes or unexpected behavior.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a robust solution.

## Problem
The original code lacks proper error handling for the HTTP server.  If an error occurs (e.g., port already in use), the server crashes without providing informative error messages or attempting any recovery.

## Solution
The improved code includes comprehensive error handling using the server's `error` event listener.  It logs detailed error information to the console and implements a retry mechanism with exponential backoff to increase the chance of successful server startup.

## How to reproduce
1. Clone this repository.
2. Run `node bug.js` (Observe the silent crash if port 3000 is occupied).
3. Run `node bugSolution.js` (Observe robust error handling and retry attempts).
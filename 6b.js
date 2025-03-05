/*const express = require('express');
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Define a route for a custom path
app.get('/custom', (req, res) => {
    res.send('This is a custom route.');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});*/
const http = require("http");
var server=http.createServer((req,res)=>{
 res.write("Hello World! I have created my first server!");
 res.end();
});
server.listen(3000);
console.log("Server started... Running on localhost:3000"); 

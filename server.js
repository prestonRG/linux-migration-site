// fileName : server.js
// Express.js
const express = require('express');
const app = express();

// Defining a route in Express
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

// Specifying the port and starting the server
const port = process.env.PORT || 1337;
/*server*/app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
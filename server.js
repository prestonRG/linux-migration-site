// Code on this page sourced from https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0

// Express.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Add a GET route for /api/items
app.get('/api/items', (req, res) => {
    res.json({ message: 'GET sample item' });
});

// Add a POST route for /api/itmes
app.post('/api/items', (req, res) => {
    res.send('POST sample item');
});

// Specifying the port and starting the server
const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// server.js from project help page
const GREETING = process.env.GREETING || 'Hello, Linux!';

app.get('/api/greet', (req, res) => {
  res.json({ message: GREETING });
});

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
    res.json({ message: 'GET api/items' });
});

// Add a POST route for /api/itmes
app.post('/api/items', (req, res) => {
    res.send('POST api/items');
});

// Specifying the port and starting the server
const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

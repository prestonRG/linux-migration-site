// fileName : server.js
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

// Specifying the port and starting the server
const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

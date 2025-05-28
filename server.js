const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Export the app for testing purposes
module.exports = app;
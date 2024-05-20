// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const sleepRoutes = require('./routes/sleep');

// Create an instance of Express
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the sleep routes for any requests to /sleep
app.use('/sleep', sleepRoutes);

// Define the port number and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the app for testing
module.exports = app;

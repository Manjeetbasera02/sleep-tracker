const express = require('express');
const bodyParser = require('body-parser');
const sleepRoutes = require('./routes/sleep');

const app = express();
app.use(bodyParser.json());

app.use('/sleep', sleepRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

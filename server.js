// Load Node modules
const express = require('express');
// Initialise Express
const app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
app.listen(8080);
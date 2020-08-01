'use strict';

const express = require('express');
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.static('public'));

app.get('/api/eligibility', (req, res) => {
    res.send('1');
});
app.get('/api/offer_data', (req, res) => {
    res.send(JSON.stringify({default:'default'}));
});

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/send_data', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify(req.body));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
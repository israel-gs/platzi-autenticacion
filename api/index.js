const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { config } = require('./config');

const app = express();

//body parser
app.use(cors());
app.use(bodyParser.json());

app.post('/api/auth/token', function(req, res) {
    console.log(req.body);
    const { email, username, name } = req.body;
    const token = jwt.sign({ sub: username, email, name }, config.authJwtSecret);
    res.json({ access_token: token })
});

const server = app.listen('5000' , function() {
    console.log('Listening at port 5000');
});
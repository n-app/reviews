const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const db = require('../database/index');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static('public'));

app.get('/favicon.ico', (req, res) => res.status(204));

const server = http.createServer(app);
server.listen(3003);

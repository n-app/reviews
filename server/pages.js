const express = require('express');
const tempStorage = require('./tempStorage');
const db = require('../database/index');

const router = express.Router();

router.get('/:pageId', (req, res) => {
  let { pageId } = req.params;
  roomId -= 1000 - 1;
  res.status(200).json({ roomId });
});

router.post('/', (req, res) => {

});

module.exports = router;
var express = require('express');
const { client } = require('../db');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const livres = [];
  const books = client.db('librairie').collection('livres').find();

  for  await (const book of books) {
    livres.push(book);
  }
  res.render('index', { title: 'Express', livres: livres });
});

module.exports = router;

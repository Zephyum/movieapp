var express = require('express');
const knex = require('../knex')

var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  knex('movie')
    .select('id', 'title', 'year', 'id')
    .orderBy('id')
    .then((items) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(items))
    })
    .catch(err => next(err))
})

module.exports = router;

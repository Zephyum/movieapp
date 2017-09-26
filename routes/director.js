var express = require('express');
const knex = require('../knex')

var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  knex('director')
    .select('id', 'name', 'nationality')
    .orderBy('id')
    .then((items) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(items))
    })
    .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  knex('director')
    .select('id', 'name', 'nationality')
    .orderBy('id')
    .where('id', id)
    .then((items) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(items))
    })
    .catch(err => next(err))
})

module.exports = router;

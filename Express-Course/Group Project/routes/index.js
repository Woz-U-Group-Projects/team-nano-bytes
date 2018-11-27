var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const staticModels = require('../staticModels/staticPlanets');
const otherModels = require('../otherModels/data');

router.get('/users', function(req, res, next) {
  models.users.findAll({}).then(usersFound => {
    res.render('users', {
      users: usersFound
    });
  });
});

router.post('/users', (req, res) => {
  models.users
    .findOrCreate({
      where: {
        Name: req.body.name,
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.redirect('/users');
      } else {
        res.send('This user already exists!');
      }
    });
});




module.exports = router;

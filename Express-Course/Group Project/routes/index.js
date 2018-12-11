var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


router.get('/', function (req, res, next){ 
  res.send('Team Nano');
});


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



router.get('/pictures', function(req, res, next) {
  models.pictures.findAll({}).then(picturesFound => {
    res.send(picturesFound)
  });
});



module.exports = router;

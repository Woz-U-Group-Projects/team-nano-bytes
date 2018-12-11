var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// const staticModels = require('../staticModels/pictures');
const staticModels = require('../staticModels/planets');


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

router.get('/staticPictures', function (req, res, next) {

  res.send(JSON.stringify(
    staticModels.picture
  ));
});

router.get('/staticPlanets', function (req, res, next) {

  res.send(JSON.stringify(
    staticModels.planet
  ));
});

router.post('/pictures', (req, res) => {
  models.pictures
    .findOrCreate({
      where: {
        Author: req.body.author,
        Url: req.body.url
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.redirect('/pictures');
      } else {
        res.send('This picture already exists!');
      }
    });
});

router.get('/pictures', function(req, res, next) {
  models.pictures.findAll({}).then(picturesFound => {
    // res.render('pictures', {
    //   pictures: picturesFound
    // });
    res.send(picturesFound)
  });
});

// router.get('/pictures', function(req, res, next) {
//   models.pictures.findAll({}).then(authorAsPlainObject => {
//     const mappedPictures = pictureAsPlainObject.map(picture => ({
//       PictureId: picture.PictureId,
//       Author: picture.Author
//     }));
//     res.send(JSON.stringify(mappedPictures));
//   });
// });



module.exports = router;

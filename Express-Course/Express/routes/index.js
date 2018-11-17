var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const staticModels = require('../staticModels/staticPlanets');


// const db = new sqlite.Database('./chinook.sqlite', err => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Yay! You are connected to the database');
// });

// /* GET home page. */
// router.get('/artist/:id', function(req, res, next) {
//   let artist = parseInt(req.params.id);
//   console.log(artist);

//   let idQuery = `SELECT * FROM artists WHERE ArtistID=${artist}`;
//   console.log(idQuery);

//   db.all(idQuery, (err, row) => {
//     console.log(row);
//     if (row.length > 0) {
//       res.render('index', {
//         artist: row[0]
//       });
//     } else {
//       res.send('not a valid id');
//     }
//   });
// });

// const artistList = `SELECT * from artists LIMIT 10`;

// router.get('/artist', function(req, res, next) {
//   db.all(artistList, function(err, row) {
//     res.render('artist', {
//       artists: row
//     });
//   });
// });

// const newArtist = db.prepare(`INSERT INTO artists(Name) VALUES(?)`);

// router.post('/artist', function(req, res, next) {
//   console.log(req.body.name);
//   const addArtist = req.body.name;

//   const selectArtist = `SELECT * FROM artists WHERE artists.name = '${addArtist}'`;

//   db.all(selectArtist, function(err, row) {
//     if (row.length > 0) {
//       res.send('Sorry, that artist already exists');
//     } else {
//       newArtist.all(addArtist, function(err, row) {
//         if (err) {
//           res.send('Oops, something went wrong');
//         } else {
//           res.redirect('/artist');
//         }
//       });
//     }
//   });
// });


// const albumList = `SELECT * from albums order by AlbumId desc LIMIT 10`;

// router.get('/albums', function(req, res, next) {
//   models.albums
//     .findAll({
//       where: {
//         Deleted: null
//       }
//     })
//     .then(albumsFound => {
//       res.render('albums', {
//         albums: albumsFound
//       });
//     });
// });

// router.post('/albums', (req, res) => {
//   models.artists
//     .findOrCreate({
//       where: {
//         Name: req.body.artist
//       }
//     })
//     .spread(function(result, created) {
//       models.albums
//         .findOrCreate({
//           where: {
//             Title: req.body.title,
//             ArtistId: result.ArtistId,
//             YearReleased: req.body.yearReleased
//           }
//         })
//         .spread(function(result, created) {
//           if (created) {
//             res.redirect('/albums');
//           } else {
//             res.send('This album already exists!');
//           }
//         });
//     });
// });

// router.get('/albums/:id', (req, res) => {
//   let albumId = parseInt(req.params.id);
//   models.albums
//     .find({
//       where: {
//         AlbumId: albumId
//       },
//       include: [models.artists]
//     })
//     .then(album => {
//       res.render('specificAlbum', {
//         Title: album.Title,
//         YearReleased: album.YearReleased,
//         Name: album.artist.Name,
//         AlbumId: album.AlbumId
//       });
//     });
// });

// router.put('/albums/:id', (req, res) => {
//   let albumId = parseInt(req.params.id);
//   models.albums
//     .update(
//       {
//         Title: req.body.title,
//         YearReleased: req.body.yearReleased
//       },
//       {
//         where: {
//           AlbumId: albumId
//         }
//       }
//     )
//     .then(result => {
//       res.send();
//     });
// });


// router.delete('/albums/:id/delete', (req, res) => {
//   let albumId = parseInt(req.params.id);
//   models.tracks
//     .update(
//       {
//         Deleted: 'true'
//       },
//       {
//         where: {
//           AlbumId: albumId
//         }
//       }
//     )
//     .then(track => {
//       models.albums
//         .update(
//           {
//             Deleted: 'true'
//           },
//           {
//             where: {
//               AlbumId: albumId
//             }
//           }
//         )
//         .then(album => {
//           res.redirect('/albums');
//         });
//     });
// });

// router.get('/specificArtist', function(req, res, next) {
//   models.artists
//     .find({
//       where: {
//         ArtistId: 2
//       }
//     })
//     .then(artist => {
//       res.render('specificArtist', {
//         artist: artist
//       });
//     });
// });

// router.get('/artists', function(req, res) {
//   models.artists
//     .findAll({
//       where: {
//         ArtistId: {
//           [Op.gt]: 55
//         }
//       }
//     })
//     .then(data => {
//       res.render('artists', {
//         artists: data
//       });
//     });
// });

// const artistsList = `SELECT * from artists order by ArtistId desc`;

// router.get('/artists', function(req, res, next) {
//   db.all(artistsList, function(err, row) {
//     res.render('artists', {
//       artists: row
//     });
//   });
// });

// router.get('/artists', function(req, res, next) {
//   models.artists.findAll({}).then(artistsFound => {
//     res.render('artists', {
//       artists: artistsFound
//     });
//   });
// });

// router.get('/artists/:id', function(req, res, next) {
//   let artistId = parseInt(req.params.id);
//   models.artists
//     .find({
//       where: {
//         ArtistId: artistId
//       }
//     })
//     .then(artist => {
//       res.render('specificArtist', {
//         artist: artist
//       });
//     });
// });

// router.post('/artists', (req, res) => {
//   models.artists
//     .findOrCreate({
//       where: {
//         Name: req.body.name,
//         DateFormed: req.body.dateFormed
//       }
//     })
//     .spread(function(result, created) {
//       if (created) {
//         res.redirect('/artists');
//       } else {
//         res.send('This artist already exists!');
//       }
//     });
// });



router.get('/planets', function(req, res, next) {
  models.planets.findAll().then(planetsAsPlainObjects => {
    const mappedPlanets = planetsAsPlainObjects.map(
      sequelizeModelForPlanet => ({
        id: sequelizeModelForPlanet.id,
        name: sequelizeModelForPlanet.name,
        numberOfMoons: sequelizeModelForPlanet.numberOfMoons
      })
    );
    res.send(JSON.stringify(planetsAsPlainObjects));
  });
});

router.get('/staticPlanets', function(req, res, next) {
  res.send(JSON.stringify(staticModels.planet));
});

module.exports = router;

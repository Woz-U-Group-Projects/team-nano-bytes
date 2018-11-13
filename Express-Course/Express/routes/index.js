var express = require('express');
var router = express.Router();
var users = require('../models/users');
const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./chinook.sqlite', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Yay! You are connected to the database');
});

/* GET home page. */
router.get('/artist/:id', function(req, res, next) {
  let artist = parseInt(req.params.id);
  console.log(artist);

  let idQuery = `SELECT * FROM artists WHERE ArtistID=${artist}`;
  console.log(idQuery);

  db.all(idQuery, (err, row) => {
    console.log(row);
    if (row.length > 0) {
      res.render('index', {
        artist: row[0]
      });
    } else {
      res.send('not a valid id');
    }
  });
});

const artistList = `SELECT * from artists LIMIT 10`;

router.get('/artist', function(req, res, next) {
  db.all(artistList, function(err, row) {
    res.render('artist', {
      artists: row
    });
  });
});


const newArtist = db.prepare(`INSERT INTO artists(Name) VALUES(?)`);

router.post('/artist', function(req, res, next) {
  console.log(req.body.name);
  const addArtist = req.body.name;

  const selectArtist = `SELECT * FROM artists WHERE artists.name = '${addArtist}'`;

  db.all(selectArtist, function(err, row) {
    if (row.length > 0) {
      res.send('Sorry, that artist already exists');
    } else {
      newArtist.all(addArtist, function(err, row) {
        if (err) {
          res.send('Oops, something went wrong');
        } else {
          res.redirect('/artist');
        }
      });
    }
  });
});

const albumList = `SELECT * from albums LIMIT 10`;

router.get('/albums', function(req, res, next) {
  db.all(albumList, function(err, row) {
    res.render('albums', {
      albums: row
    });
  });
});

router.get('/albums/:id', function(req, res, next) {
  let album = parseInt(req.params.id);
  console.log(album);
  let idQuery = `SELECT * FROM albums WHERE AlbumId=${album}`;
  console.log(idQuery);
  db.all(idQuery, (err, row) => {
    console.log(row);
    if (row.length > 0) {
      res.render('specificAlbum', {
        album: row[0]
      });
    } else {
      res.send('not a valid id');
    }
  });
});

// router.get('/person/:id', function(req, res, next) {
//   //get object that matches the id
//   let person = users.people.find(peep => {
//     return peep.id === parseInt(req.params.id);
//   });
//   res.render('index', { person });
//   console.log(req.url);
// });

module.exports = router;

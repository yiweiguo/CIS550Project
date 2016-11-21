var express = require('express');
var router = express.Router();

router.get('/speakers', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.athletes);
  });

  res.render('speakers', {
    pageTitle: 'Speakers',
    athletes: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'speakers'
  });

});

router.get('/speakers/:speakerid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = [];

  data.speakers.forEach(function(item) {
    if (item.shortname == req.params.speakerid) {
      pageSpeakers.push(item);
      pagePhotos = pagePhotos.concat(item.athletes);
    }
  });

  res.render('speakers', {
    pageTitle: 'Speaker Info',
    athletes: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'speakerDetail'
  });
});

module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;
  data.speakers.forEach(function(item){
    pagePhotos = pagePhotos.concat(item.athletes);
  });

  res.render('index', {
  	pageTitle: 'Home',
    athletes: pagePhotos,
    speakers: pageSpeakers,
  	pageID: 'home'
  });
});

module.exports = router;
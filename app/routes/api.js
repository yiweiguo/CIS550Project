var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var feedbackData = require('../data/feedback.json');
var fs = require('fs');
router.get('/api', function(req, res) {
	res.json(feedbackData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.post('/api', function(req,res) {
	feedbackData.unshift(req.body);
	fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    console.log(err);
  });
	req.json(feedbackData);
});
module.exports = router;

var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//directly accessible in public folder
app.use(express.static(__dirname + '/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/search'));


app.locals.siteTitle = 'Olympics Dataset';
app.locals.allSpeakers = dataFile.speakers;

var server = app.listen(app.get('port'), function(){
	console.log('Listening on port', app.get('port'));
});

reload(server, app);
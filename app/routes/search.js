var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
	host		: 'cis550group25.c4piije6mfdf.us-east-1.rds.amazonaws.com',
	user		: 'user',
	password	: 'user',
	database	: 'Abc'	
});
var dict = {};
dict['United States'] = 'USA';
dict['Canada'] = 'CAN';
dict['Croatia'] = 'HRV';
dict['Mexico'] = 'MEX';
dict['Cuba'] = 'CUB';
dict['Russia'] = 'RUS';
dict['Bulgaria'] = 'BGR';
dict['Argentina'] = 'ARG';
dict['Uruguay'] = 'URY';
dict['China'] = 'CHN';
dict['Italy'] = 'ITA';
dict['Spain'] = 'ESP';
dict['France'] = 'FRA';
dict['Lithuania'] = 'LTU';
dict['Australia'] = 'AUS';
dict['Brazil'] = 'BRA';
result1 = [];
result2 = [];
result3 = [];
function query1(){
	connection.query('select CName from Country where Num_Gold = (select max(Num_Gold) from Country)', function(err, rows, fields){
		if(err) throw err;
		else{
			var i;
			for(i = 0; i < rows.length; i++){
				result1.push(dict[rows[i].CName]);
			}
		}
	});
}

// function query2(){
// 	var query2 = 'select distinct c.CName from Country c inner join Organizer o' + 
// 	'on c.CName = o.CName where c.Num_Gold = (select max(c.Num_Gold)' + 
// 	'from Country c inner join Organizer o on c.CName = o.CName);'
// 	connection.query(query2, function(err, rows, fields){
// 		if(err) throw err;
// 		else{
// 			var i;
// 			for(i = 0; i < rows.length; i++){
// 				result2.push(dict[rows[i].CName]);
// 			}
// 		}
// 	});
// }

// function query2(res){
// 	connection.query('select distinct c.CName from Country c inner join Organizer o on c.CName = o.CName where c.Num_Gold = (select max(c.Num_Gold) from Country c inner join Organizer o on c.CName = o.CName)'
// 		, function(err, rows, fields){
// 		if(err) throw err;
// 		else{
	
//   		output_countryTwo(res, rows, dict);
		
// 		}
// 	});
// }

function query3(){
	connection.query('select c.CName, count(distinct p.AName) as num from Country c inner join Bornin b on\
	 b.NOC_code = c.NOC_code inner join Athlete a on a.AName = b.AName inner join\
	  Participate p on a.AName = p.AName\
	where p.EName = "basketball"\
	group by b.NOC_code\
	order by num'
	, function(err, rows, fields){
		if(err) throw err;
		else{
			var i;
			for(i = 0; i < rows.length; i++){
				result3.push(dict[rows[i].CName]);
			}
		}
	});
}



router.get('/search', function(req, res) {
	query1();
	query3();
	res.render('search', {
  			pageTitle: 'Search',
  			pageID: 'Search',
  			Country: result1,
  			CountryThree: result3
  		});
});

module.exports = router;
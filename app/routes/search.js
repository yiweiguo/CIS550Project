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
dict['Jamaica'] = 'JAM';
dict['United Kingdom'] = 'GBR';
dict['Netherlands'] = 'NLD';

result1 = [];
result2 = [];
result3 = [];
result4_country = [];
result4_person = [];
result5_country = [];
result5_person = [];
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
function query2(){
	// var query2 = 'select distinct c.CName from Country c inner join Organizer o\ 
	// on c.CName = o.CName where c.Num_Gold = (select max(c.Num_Gold)\
	// from Country c inner join Organizer o on c.CName = o.CName)';
	connection.query('select distinct c.CName from Country c inner join Organizer o on c.CName = o.CName \
		where c.Num_Gold = (select max(c.Num_Gold) from Country c inner join Organizer o on c.CName = o.CName)', function(err, rows, fields){
		if(err) throw err;
		else{
			var i;
			for(i = 0; i < rows.length; i++){
				result2.push(dict[rows[i].CName]);
			}
		}
	});
}

function query3(){
	connection.query('select c.CName, count(distinct p.AName) as num from Country c inner join Bornin b on\
	 b.NOC_code = c.NOC_code inner join Athlete a on a.AName = b.AName inner join\
	  Participate p on a.AName = p.AName\
	where p.EName = "basketball"\
	group by b.NOC_code\
	order by num DESC'
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

function query4(){
	connection.query('select p.AName, c.CName\
		from Participate p inner join Bornin b on p.AName = b.AName inner join Country c on\
		b.NOC_code = c.NOC_code\
		where p.Edition = "2008" and p.Medal = "Gold"\
		group by p.AName\
		having count(*)>=3', function(err, rows, fields){
		if(err) throw err;
			else{
				for(var i = 0; i < rows.length; i++){
					result4_country.push(dict[rows[i].CName]);
					result4_person.push(rows[i].AName);
				}
			}	
		}
		);
}

function query5(){
	connection.query('select p1.AName, c.CName\
		from Participate p1 inner join Participate p2 on p1.AName = p2.AName inner join\
		Bornin b on p2.AName = b.AName inner join Country c on b.NOC_code = \
		c.NOC_code\
		where p1.Edition = p2.Edition and p1.EName = "100m" and p2.EName = "200m" and\
		p1.Medal = "Gold" and p2.Medal = "Gold";', function(err, rows, fields){
			if(err) throw err;
				else{
					for(var i = 0; i < rows.length; i++){
					result5_country.push(dict[rows[i].CName]);
					result5_person.push(rows[i].AName);
					}	
				}
		}
	);
}

router.get('/search', function(req, res) {
	query1();
	query2();
	query3();
	query4();
	query5();
	res.render('search', {
  			pageTitle: 'Search',
  			pageID: 'Search',
  			Country: result1,
  			CountryTwo: result2,
  			CountryThree: result3,
  			CountryFour_Country: result4_country,
  			CountryFour_Person: result4_person,
  			CountryFive_Country: result5_country,
  			CountryFive_Person : result5_person
  		});
});

module.exports = router;
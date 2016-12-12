var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/yelp';

// var dict1_a = {};

// var dict1_b = {};
// var dict1_c1 = {};
// var dict1_c2 = {};

// var dict2_b = {};
// var dict2_c1 = {};
// var dict2_c2 = {};

// var dict3_b = {};
// var dict3_c1 = {};
// var dict3_c2 = {};

// var dict4_b = {};
// var dict4_c1 = {};
// var dict4_c2 = {};

// var dict5_b = {};
// var dict5_c1 = {};
// var dict5_c2 = {};
res = [];

function query1(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Restaurants"]},"city":"Las Vegas","attributes.Accepts Credit Cards":true},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[0] = "empty";
					}else{
						res[0] = result[0];
					}
					console.log(res[0], "1");
				}
			});
		});
}

function query2(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Restaurants"]},"city":"Las Vegas","attributes.Accepts Credit Cards":false},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[0] = "empty";
					}else{
						res[1] = result[0];
					}
					console.log(res[1], "2");
				}
			});
		});
}

function query3(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Sports Bars"]},"city":"Las Vegas","attributes.Accepts Credit Cards":true},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[2] = "empty";
					}else{
						res[2] = result[0];
					}
						console.log(res[2], "3");
				}
			});
		});
}

function query4(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Sports Bars"]},"city":"Las Vegas","attributes.Accepts Credit Cards":false},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[3] = "empty";
					}else{
						res[3] = result[0];
					}
					console.log(res[3], "4");
				}
			});
		});
}

function query5(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Restaurants"]},"city":"Phoenix","attributes.Accepts Credit Cards":true},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[4] = "empty";
					}else{
						res[4] = result[0];
					}
					console.log(res[4], "5");
				}
			});
		});
}

function query6(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Restaurants"]},"city":"Phoenix","attributes.Accepts Credit Cards":false},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[5] = "empty";
					}else{
						res[5] = result[0];
					}
					console.log(res[5], "6");
				}
			});
		});
}

function query7(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Sports Bars"]},"city":"Phoenix","attributes.Accepts Credit Cards":true},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[6] = "empty";
					}else{
						res[6] = result[0];
					}
					console.log(res[6], "7");
				}
			});
		});
}

function query8(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Sports Bars"]},"city":"Phoenix","attributes.Accepts Credit Cards":false},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[7] = query19();
					}else{
						res[7] = result[0];
					}
					console.log(res[7], "8");
				}
			});
		});
}

function query9(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Restaurants"]},"city":"Charlotte","attributes.Accepts Credit Cards":true},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[8] = "empty";
					}else{
						res[8] = result[0];
					}
					console.log(res[8], "9");
				}
			});
		});
}

function query10(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Restaurants"]},"city":"Charlotte","attributes.Accepts Credit Cards":false},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[9] = "empty";
					}else{
						res[9] = result[0];
					}
					console.log(res[9], "10");
				}
			});
		});
}

function query11(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Sports Bars"]},"city":"Charlotte","attributes.Accepts Credit Cards":true},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[10] = "empty";
					}else{
						res[10] = result[0];
					}
					console.log(res[10], "11");
				}
			});
		});
}

function query12(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Sports Bars"]},"city":"Charlotte","attributes.Accepts Credit Cards":false},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[11] = "empty";
					}else{
						res[11] = result[0];
					}
					console.log(res[11], "12");
				}
			});
		});
}

function query13(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Restaurants"]},"city":"Pittsburgh","attributes.Accepts Credit Cards":true},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[12] = "empty";
					}else{
						res[12] = result[0];
					}
					console.log(res[12], "13");
				}
			});
		});
}

function query14(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Restaurants"]},"city":"Pittsburgh","attributes.Accepts Credit Cards":false},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[13] = "empty";
					}else{
						res[13] = result[0];
					}
					console.log(res[13], "14");
				}
			});
		});
}

function query15(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Sports Bars"]},"city":"Pittsburgh","attributes.Accepts Credit Cards":true},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[14] = "empty";
					}else{
						res[14] = result[0];
					}
				}
			});
		});
}

function query16(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Sports Bars"]},"city":"Pittsburgh","attributes.Accepts Credit Cards":false},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[15] = "empty";
					}else{
						res[15] = result[0];
					}
				}
			});
		});
}

function query17(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Restaurants"]},"city":"Scottsdale","attributes.Accepts Credit Cards":true},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
						res[16] = "empty";
					}else{
						res[16] = result[0];
					}
				}
			});
		});
}

function query18(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Restaurants"]},"city":"Scottsdale","attributes.Accepts Credit Cards":false},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
					// console.log(result.length);
						res[17] = "empty";
					}else{
						res[17] = result[0];
					}
				}
			});
		});
}

function query19(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"categories":{$all:["Sports Bars"]},"city":"Scottsdale","attributes.Accepts Credit Cards":true},{"_id":0,"name":1,"full_address":1}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					if(!result){
					// console.log(result.length);
						res[18] = "empty";
					}else{
						res[18] = result[0];
						return result[0];
					}
				}
			});
		});
}

function query20(){
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			} else {
				console.log('Connection established to', url);
			}	

			var collection = db.collection('business');
			collection.find({"city" : "Phoenix"}).toArray(function (err, result){
				if(err){
					console.log(err);
				}else{
					// dict5_c2['Yes'] = result[0];
					// dict5_b['Restaurants'] = result[0];
					// dict5_b['Sports Bars'] = result[0];
					// dict1_a['Scottsdale'] = result[0];
					if(!result){
					// console.log(result.length);
					res[19] = "empty";
					}else{
						res[19] = result[0];
					}
				}
			});
		});
}
router.get('/recommend', function(req, res) {
	query1();
	query2();
	query3();
	query4();
	query5();
	query6();
	query7();
	query8();
	query9();
	query10();
	query11();
	query12();
	query13();
	query14();
	query15();
	query16();
	query17();
	query18();
	query19();
	query20();
	// for(var i = 0; i < res.length; i++){
		console.log(res.length);
	// }
  res.render('recommend', {
    pageTitle: 'recommend',
    pageID: 'RestaurantRecommend',
    Country: res
  });
});

module.exports = router;
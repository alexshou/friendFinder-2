var path = require("path");
var friends = require ("../data/friends.js");

module.exports = function(app){
	// display friends json list
	app.get("/api/friends", function(req, res) {
	  return res.json(friends);
	});

	app.post("/api/friends", function(req, res) {
	friends.push(req.body);
	return res.json(friendFinder(friends));
	});
}

var friendFinder = function (friends){
	var friend = 0;
	var min = 1000;
	var me = friends[friends.length - 1];
	for (var i = 0; i < friends.length - 1; i++){
		var diff = 0;
		for(var j = 0; j < friends[i].length; j++)
		{
			diff += Math.abs(parseInt(friends[i][j]) - parseInt(me[j]));
		}
		if (diff < min){
			min = diff;
			friend = i;
		}
	}
	return friends[friend];
}


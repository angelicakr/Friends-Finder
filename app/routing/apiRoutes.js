
//Loading data
//Linking routes to "data" sources
//Contains the array that compares asnwers

var friends = require("../data/friends");
var survey = require("../data/survey");
var path = require('path');


module.exports = function(app){

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});




app.post("/api/friends", function(req, res) {
      
      
    // create object to store best match
    var bestMatch = {
      name: "no match",
      photo: "",
      description: "",
      friendDifference: 1000
    }

    // holds the user posted data
    var userData = req.body;
    var userScores = userData.scores;

    // this variable will measure the score difference between the 2 objects... 
    // ...being compared, lower score is better.
    var totalDifference = 0;
    var surveyDifference = 0;

    // will loop through each friend in the array
    for (i=0; i < friends.length; i++) {

      totalDifference = 0;

      // next loop through each score in friends[i], and com pare them...
      // to userData scores and calc the absolute difference.
      for (x=0; x < friends[i].scores.length; x++) {

        // calculate total score
        totalDifference += Math.abs(parseInt(userScores[x]) - parseInt(friends[i].scores[x]));
        
      }

      // checks if friend[i]'s totalDifference is less than the bestFriend,... 
      // ...friend difference, if so, it becomes the new best match
      console.log("Person's Name: ", friends[i].name);

      if (totalDifference <= bestFriend.friendDifference) {
        // sets bestFriend variables to best match
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].image;
        bestMatch.description = friends[i].description;
        bestMatch.friendDifference = totalDifference;

        console.log("Your new best match is " + bestFriend.name + "\n");

      } else {
        // character is not the best match.
        console.log(friends[i].name + " is not your best friend\n")
      }
    }

    friends.push(userData);
    res.json(bestMatch);
    console.log(bestMatch);
    console.log("-----------------------------------------------");
});


}


// creating the $ function that fetches the html elements using their ids
var $ = function (id) { return document.getElementById(id); };

var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];


// when window loads the below functions will be executed when click events are triggered
window.onload = function () {
	// addScore function used to add the scores will be executed when click event triggered on add to array button
	$("add").onclick = addScore;
	// displayResults function will display the average and high score of the scores in array.
	$("display_results").onclick = displayResults;
	// displayScores function will display the results that are added to the array
	$("display_scores").onclick = displayScores;
};




// addScore function used to add the scores will be executed when click event triggered on add to array button

function addScore() {

var name = $("name").value;

var score = $("score").value;

names.push(name);

scores.push(score);

}


// displayResults function will display the average and high score of the scores in array.

function displayResults() {

var avg = 0.0,

highest = 0;

for (var i = 0; i < scores.length; i++) {

avg += parseFloat(scores[i]);

if (scores[highest] < scores[i])

highest = i;

}

avg = avg / scores.length;

$("results").innerHTML = "Average score = " + avg + "<br />";

$("results").innerHTML += "High Score = " + names[highest] + " with a score of " + scores[highest];

}


// displayScores function will display the results that are added to the array

function displayScores() {

var str = "<table>";

str += "<tr align='left'><th>Name</th><th>Score</th></tr>";

for (var i = 0; i < scores.length; i++) {

str += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";

}

str += "</table>";

$("scores_table").innerHTML = str;

}

window.onload = function() {

$("add").onclick = addScore;

$("display_results").onclick = displayResults;

$("display_scores").onclick = displayScores;

};

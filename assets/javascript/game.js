
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesRemainingText = document.getElementById("remaining-text")
var guessesText = document.getElementById("guesses-text");
var userChoice = [];


document.onkeyup = function(event) {

    var userGuess = event.key;

    userChoice.push(userGuess);
    
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ((userGuess === computerGuess)) {
        wins++;
        guessesRemaining = 9;
    
    } else if (guessesRemaining > 0) {
        losses++;
        guessesRemaining--;

    } else {
        wins = 0;
        losses = 0;
        guessesRemaining = 9;
    }

    directionsText.textContent = "";

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesRemainingText.textContent = "Guesses remaining: " + guessesRemaining;
    guessesText.textContent = "Your guesses: " + userChoice;

};

// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
//
// Prompts the user for each guess and keeps track of the user's remaining guesses

var Letter = require('./letter.js');
var Word = require('./word.js')
var inquirer = require('inquirer');
var prompt = require('prompt.js');


 	var wordBank = ['han solo', 'kylo ren', 'chewbacca', 'luke skywalker', 'jabba the hut', 'boba fett', 'captain phasma', 'poe dameron'],
    //for loop to access//guesses
    // guesses remaning


    //function to start game /reset game at the end
    // Randomly selects a word and uses the Word constructor to store it
    new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)])

    // Prompts the user for each guess and keeps track of the user's remaining guesses - use prompt/inquirer to write this.

    inquirer.prompt([
        // Here we create a basic text prompt.
        {
          type: "input",
          name: "name",
          message: "Guess a letter: "
      }
      .then(function(inquirerResponse) {

        if (inquirerResponse.===//all the correctly guessed letters {
          console.log("CORRECT! ");
          console.log("You got it right! ");
          console.log("\n Now guess the next word.");
      // //   }
      // //   else {
      // //     console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
      // //
      // //
      // //   }
      // // });
      // //
      // //
      // //
      // //
      //

// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
//
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var Letter = require('./letter.js');
var Word = require('./word.js')
var inquirer = require('inquirer');
var prompt = require('prompt');


 	var wordBank = ['han solo', 'kylo ren', 'chewbacca', 'luke skywalker', 'jabba the hut', 'boba fett', 'captain phasma', 'poe dameron']

    var randomWord = new Word(wordBank[Math.floor(Math.random()* wordBank.length)]);
    //for loop to access//guesses
    // guesses remaning
    //function to start game /reset game at the end
    // Prompts the user for each guess and keeps track of the user's remaining guesses - use prompt/inquirer to write this.

    //take inquirerResponse, which is the users input and compare that against all the letters in randomWord that was chosen

    //after we make comparison between inquirerResponse and the letters in randomWord


    inquirer.prompt([
        {
          type: "input",
          name: "letterGuessed",
          message: "Guess a letter: "
      }])
      .then(function(inquirerResponse) {
          // var Ozzy = new Word("OZZY");
          // console.log(Ozzy.check("z"));
          // console.log(randomWord.check(inquirerResponse));
          // console.log(randomWord.string());

      //
          for (var i = 0; i < randomWord.word.length; i++){
              console.log(randomWord.word[i].char)
        if (inquirerResponse.letterguessed==randomWord.word[i].char){
          console.log("CORRECT! ");
          console.log("You got it right! ");
          console.log("\n Now guess the next word.");
      } else {
          console.log("Try again")
          console.log(inquirerResponse)
      }
        }

     })

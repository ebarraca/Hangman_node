
var Letter = require('./letter.js');
var Word = require('./word.js')
var inquirer = require('inquirer');
var prompt = require('prompt');

var guessesLeft = 10;

var wordBank = ['coriander', 'cardamom', 'cinnamon', 'fennel', 'sage', 'oregano', 'paprika', 'saffron']

var randomWord = new Word(wordBank[Math.floor(Math.random()* wordBank.length)]);
console.log("Welcome to Hangman!");
console.log("Guess a letter of a spice from your spice cabinet!");
console.log("-----------------------------");

    startGame = function(){

        // console.log(randomWord.string());

        inquirer.prompt([
            {
              type: "input",
              name: "letterGuessed",
              message: "Guess a letter: "
          }])
          .then(function(inquirerResponse) {
              guessesLeft--;
              console.log(randomWord.check(inquirerResponse.letterGuessed));

              if (guessesLeft==0){
                  console.log("out of guesses!");

                  //this is where i would add code to restart the game but it didnt work properly, so i will psuedocode.

                  // inquirer.prompt([
                  //      {
                  //          name: "yesOrNo",
                  //          type: "rawlist",
                  //          message: "Would you like to play again?",
                  //          choices: ["Y", "N"]
                  //      }])
                  //      if (inquirer.prompt.choices=="1"){
                  //      }
                  //      startGame();

                  //i would run inquirer.prompt again, asking the user if they want to play again. if they do, run the function to start the game again. If not, then code continues as written below.

                  //stop game
              } else if (!randomWord.notFinished()){
                  console.log("you won!");
              } else {
                  console.log("you have " + guessesLeft + " guesses Left ");
                  //continue guessing
                  startGame();
              }
            })

    };
    startGame();

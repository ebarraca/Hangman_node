
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

            //     inquirer.prompt([{
            //         type: "rawlist",
            //         name:"yesNo",
            //         choices:["Y", "N"]
            //     }]);
            //
            //     if (inquirer.prompt.choices==="1"){
            //     }
            // };
            //     startGame();

                //stop game
            } else if (!randomWord.notFinished()){
                 console.log("you won!");
              } else {
                  console.log("you have " + guessesLeft + " guesses Left ");
                  //continue guessing
                  startGame();
              }
          });

    };

    startGame();

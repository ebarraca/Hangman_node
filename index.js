
var Letter = require('./letter.js');
var Word = require('./word.js')
var inquirer = require('inquirer');
var prompt = require('prompt');

var guessesLeft = 10;

var wordBank = ['han solo', 'kylo ren', 'chewbacca', 'luke skywalker', 'jabba the hut', 'boba fett', 'captain phasma', 'poe dameron']

var wordBank = ['han solo']

var randomWord = new Word(wordBank[Math.floor(Math.random()* wordBank.length)]);
console.log("Welcome to Star Wars Hangman!");
console.log("Guess a letter of the name of a Star Wars Character");
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
                  //stop game
              } else if (!randomWord.notFinished()){
                  console.log("you won!");
              } else {
                  console.log("you have " + guessesLeft + " guesses Left ");
                  //continue guessing
                  startGame();
              }








              // var Ozzy = new Word("OZZY");
              // console.log(Ozzy.check("z"));
              // console.log(randomWord.check(inquirerResponse));
              // console.log(randomWord.string());
              // var letter = inquirerResponse;
              // var myLetter = new Word(letter)
              //
              // myLetter.string(letter);
              //
              //   for (var i = 0; i < randomWord.word.length; i++){
              //       console.log(randomWord.word[i].char)
              //       if (inquirerResponse.letterGuessed===randomWord.word[i].char){
              //           myLetter.check(inquirerResponse);
              //         console.log("CORRECT! ");
              //
              //       } else {
              //
              //         // console.log(Letter.compare(inquirerResponse));
              //         // console.log("INCORRECT! ");
              //         // console.log("\n Guesses Left: " + guessesLeft);
              //
              //       }
              //   }
            })

    };
    startGame();

var Letter = require('./letter.js');
var Word = require('./word.js');
var inquirer = require('inquirer');
var prompt = require('prompt');

var wordBank = ['han solo', 'kylo ren', 'chewbacca', 'luke skywalker', 'jabba the hut', 'boba fett', 'captain phasma', 'poe dameron']

var game = {

  wordBank : wordBank, // import a list of words
  guessesRemaining : 10, // per word
  currentWrd : null, // the word object


  startGame = function(){
    // make sure the user has 10 guesses
    this.guessesRemaining = 10;

    // get a random word from the array
    var randomWord = new Word(wordBank[Math.floor(Math.random()* wordBank.length)]);
    this.currentWrd = this.wordBank[j];


    // Inform User game has begun
    console.log("Welcome to Star Wars Hangman!");
    console.log("Guess a letter of the name of a Star Wars Character");
    console.log("-----------------------------");

    console.log('Guesses Left: ' + game.guessesRemaining);

    // prompt for a letter
    // not sure waht function would be here();
  }
  startGame();

};

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


// get a random word from the array

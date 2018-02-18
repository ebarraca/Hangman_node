
var Letter = require('./letter.js');
var inquirer = require('inquirer');
var prompt = require('prompt.js');

// inquirer.prompt(["Guess a Letter"]).then(answers => {
//     // Use user feedback for... whatever!!
// });
var Word = function(array, wordString){
    this.array = new Letter;
    this.wordString = function(){
        new Letter.answer;
    }
}
//concatinate it all into one word

// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
//
// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

// var prompt = require('prompt.js');

// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
//
// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly



var Letter = function(char){
    this.char = char; //underlying character
    this.beenGuessed = false;
    this.display = function(){
        if (this.beenGuessed===true){
            return char;
        } else {
            console.log("_")
        }
    }
    this.compare = function(guessed){
        if(guessed===this.char){
            this.beenGuessed=true;
        }
    }

    // this.answer = function(){
    //     if(this.guess === true){
    //         return this.value
    //     } else {
    //         var valueReplace = this.value.replace("_");
    //         return valueReplace;
    //     }
    //     }
}
var a = new Letter("a", "a");
console.log(a.char);
console.log(a.beenGuessed);
a.display();
a.compare("A");
console.log(a.beenGuessed);


    module.exports = Letter;


//now that we have our constructor we can use it to create mulitple words for the user to guess

// var UserSearch = function(name, location) {
//   this.name = name;
//   this.location = location;
//   this.date = Date.now();
//
//   this.getWeather = function(){
//
//       weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
//          if(err) console.log(err);
//
//          console.log(JSON.stringify(result, null, 2));
//       });
//   }
// }

//display letter that character guesses OR dipslya

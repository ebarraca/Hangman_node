var Letter = require("./letter.js");

var Word = function(input) {
    var letterArr = [];
    for (var letter in input){
      letterArr.push(new Letter(input[letter].toLowerCase()));
    };
    this.word = letterArr;
    this.string = function(){
        var word = "";
        for (var i = 0; i < this.word.length; i++){
          word += this.word[i].display() + " ";
        };
        return word;
    }
    this.check = function(char){
        for (var i = 0; i < this.word.length; i++){
            this.word[i].compare(char);
        }
        return this.string();
    }
}

var Ozzy = new Word("OZZY");
console.log(Ozzy.check("z"));

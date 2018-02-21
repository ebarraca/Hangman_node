
var Letter = function(char){
    this.char = char; //underlying character
    this.beenGuessed = false;
    this.display = function(){
        if (this.beenGuessed===true){
            return this.char;
        } else {
            return "_";
        }
    }
    this.compare = function(guessed){
        if(guessed===this.char){
            this.beenGuessed=true;
            // console.log("right-o!");
            return;
        }
        // console.log("wrong!")
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

    module.exports = Letter;

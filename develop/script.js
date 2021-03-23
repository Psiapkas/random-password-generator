// Assignment Code
var generateBtn = document.querySelector("#generate");
// turns random selection into function
function getRandomLower(){
 return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97)
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65)
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48)
}

function getRandomSymbols(){
  var symbols = "<>?[}{]/=+-)(*&^%$@!"
  return symbols[Math.floor(Math.random() * symbols.length) ]
}
//  turns all randomizer functions into a single variable 
var randomSelect = {
  lower: getRandomLower,
  upper: getRandomUpper,
  symbol: getRandomSymbols,
  number: getRandomNumber

};

// generates password string
function generatePassword() {
   var number = prompt ("how long you want the password?")
  //  if (!Number.isInteger(number)){
  //    alert("Number required!");
  //    return;
  //  }
  if (number <8){ 
    alert ("You need a minimum of 8 characters!");
    return;
  } 
  if (number >120){
    alert("Length too long!")
    return;
  }


   var functions = [ ];
   if (confirm ("Do you want numbers ?")){
     functions.push (randomSelect.number);
   }
   
   if (confirm ("Do you want lower case letters ?")){
     functions.push (randomSelect.lower);
      }
   if (confirm ("Do you want upper case letters ?")){
    functions.push (randomSelect.upper);
    }

  if (confirm ("Do you want Symbols ?")){
   functions.push (randomSelect.symbol);
    }
  if (functions.length == 0){
    alert ("No option selected"); 
    return;
  }
 
  var text = "";
  var i;
  for (i = 0; i < number; i++)  { 
    var r = (Math.floor(Math.random() * functions.length));
    text += functions[r]();
   }
  return text;
}



// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value =  generatePassword();
  
 
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

 

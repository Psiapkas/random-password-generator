// Assignment Code
var generateBtn = document.querySelector("#generate");
//defines characters in array
var specialCharacters = ["!","@","#","$","%","^","&","*"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w","x","y","z" ]
//randomises each array
var upperIndex = Math.floor(Math.random() * upperLetters.length);
var lowerIndex = Math.floor(Math.random() * lowerLetters.length);
var numberIndex = Math.floor(Math.random() * numbers.length);
var specialChar = Math.floor(Math.random() * specialCharacters.length);
// window alerts 

var specialQuestion = window.confirm ("Do you want special characters ?")
var numQuestion = window.confirm("Do you want numbers ? ")
var lowerQuestion = window.confirm("Do you want lower case letters ?")
var upperQueston = window.confirm ("Do you want upper case letters ?")
function generatePassword() {
 
  if (specialQuestion ) {
    specialChar 
  }
  console.log (specialQuestion)
  if (numQuestion) {
    numberIndex
  }
  if (lowerQuestion) {
    lowerIndex
  }
  if (upperQueston){
    upperIndex
  }



}


// Write password to the #password input
function writePassword() {
  console.log ("here")
  var password = generatePassword(specialChar, numberIndex, lowerIndex, upperIndex);
  var passwordText = document.querySelector("#password");
  console.log(numberIndex)
  passwordText.value = password;
  
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

 

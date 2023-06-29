var generateBtn = document.querySelector("#generate");


var userInput = generateBtn.addEventListener("click", function() {
  window.prompt("Please select a number between 8 and 128:");
  writePassword();
})

function writePassword() {  
if (userInput < 8 || userInput > 128) {
        alert("PLEASE ENTER A NUMBER WITHIN THE GIVEN RANGE");
        prompt("Please select a number between 8 and 128:");
      } else {
        alert("Good job!");
      };
    }





































// var userObject = userInput;
// var 
// var button = document.querySelector("#btn");

// Write password to the #password input

// writePassword();

// function writePassword() {
//   var charLength = alert("Please enter number of characters (8-128) below:");
//   // return prompt("Hello, World!");
// };

// function promptTime(
//   generateBtn.addEventListener: "click", writePassword();
//   prompt = (";sldgahw;ogh");
// )

// function promptTime ();

// function writePassword(
//   if (charLength < 8 || charLength > 128) {
//     alert("PLEASE ENTER A NUMBER WITHIN THE GIVEN RANGE");
//     prompt("Please enter number of characters (8-128) below:");
//   } else {
//     alert("Good job!");
//   }
// );
// function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

// }

// Add event listener to generate button

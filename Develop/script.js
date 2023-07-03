var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]<>?:{}!@#$%^&*()_+" .split("");
    // var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r"];
let passArray = [];

generateBtn.addEventListener("click", function() {
  stepOne ();
})

function stepOne () {
  var userInput = window.prompt("Please select a number between 8 and 128:");
  
  if (userInput === null) {
    return;
  } else if (userInput < 8 || userInput > 128) {
    window.alert("PLEASE ENTER A NUMBER WITHIN THE GIVEN RANGE");
    stepOne ();
  } else {
    window.alert("Good job!");

    for (var i = 0; i < userInput; i++) {
      let randChar = randNum(letters.length-1);
      passArray.push(letters[randChar]);
    }
    console.log(passArray);

  }
}

function randNum (input) {
  return Math.floor(Math.random() * input);
};











































// var userObject = {};
// var userInput = generatePass.data;


// writePassword ();
// function writePassword () {
  
//         }};

// console.log(generatePass);




// var userInput = window.prompt("Please select a number between 8 and 128:");


// var userChoice = generateBtn.addEventListener("click", function() {
//   window.prompt("Please enter a number between 8 and 128:");
//   writePassword();
// })



// writePassword();

// var userInput = userChoice; 
// console.log(userInput);

  

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

let generateBtn = document.querySelector("#generate");
let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]<>?:{}!@#$%^&*()_+" .split("");
let passArray = [];

// The following calls the function stepOne when the "Generate Password" button is clicked.

generateBtn.addEventListener("click", function() {
  stepOne ();
})

// The stepOne function accomplishes the following:
  // Prompts the user to select a number between 8 and 128. If the number is outside of that range it makes them select again. 
  // If the user selects "Cancel" it ends the function.
  // The input is then used to select that many random variables.
  // Those variables are then pushed into the same empty array "passArray".

function stepOne () {
  let userInput = window.prompt("Please select a number between 8 and 128:");
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

// The following function returns random as many random items as the parameter calls for.

function randNum (input) {
  return Math.floor(Math.random() * input);
};

// Next I need to:
//   Add more window.prompts for the following:
//     lowercase, uppercase, or both
//     numeric: yes or no 
//     special characters: yes or no 
//   A window.confirm needs to be added to confirm the choices
//   Password is generated
//   Password is displayed in "#password" text area




































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

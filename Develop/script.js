let generateBtn = document.querySelector("#generate");
let lowLetters = "abcdefghijklmnopqrstuvwxyz" .split("");
let upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
let numbers = "1234567890" .split("");
let special = " !#$%&'()*+,-./:;<=>?@[\^]_`{}|~" .split("");
let availSelection = [];
let passArray = [];
let passLength = "";


// The following calls the function numberChar when the "Generate Password" button is clicked.
generateBtn.addEventListener("click", function() {
  numberChar ();
})

// The numberChar function accomplishes the following:
  // Prompts the user to select a number between 8 and 128. If the number is outside of that range it makes them select again. 
  // If the user selects "Cancel" it ends the function.
  // The input is then used to select that many random variables.
  // Those variables are then pushed into the same empty array "passArray".
function numberChar () {
  availSelection = [];
  passArray = [];
  passLength = window.prompt("Please select a number between 8 and 128:");
  if (passLength === null) {
    return;
  } else if (passLength < 8 || passLength > 128) {
    window.alert("PLEASE ENTER A NUMBER BETWEEN 8 AND 128");
    numberChar ();
  } else {
    confirmPass ();
  }
}

// The following function returns random as many random items as the parameter calls for.
function randNum (input) {
  return Math.floor(Math.random() * input);
};

// The confirmPass function takes us through the rest of the process with a series of confirm windows
  // If the user selects none of the options, the function ends and they are made to start from the beginning
  // A for loop is included at the end to select the required number of characters
  // The generated password is then displayed in the text area
function confirmPass () {
  let passUpper = window.confirm("Would you like your password to contain uppercase characters?");
    if (passUpper === true) {
      availSelection = availSelection.concat(upLetters);
    }
  let passLower = window.confirm("Would you like your password to contain lowercase characters?");
    if (passLower === true) {
      availSelection = availSelection.concat(lowLetters);
    }
  let passNumber = window.confirm("Would you like your password to contain numbers?");
    if (passNumber === true) {
      availSelection = availSelection.concat(numbers);
    }
  let passSpecChar = window.confirm("Would you like your password to contain special characters?");
    if (passSpecChar === true) {
      availSelection = availSelection.concat(special);
    }
  console.log(availSelection);
    if (passUpper === false &&
        passLower === false &&
        passNumber === false &&
        passSpecChar === false) {
          window.alert("At least one selection must be made. Please try again.");
          return;
        }

  for (var i = 0; i < passLength; i++) {
    let randChar = randNum(availSelection.length-1);
    passArray.push(availSelection[randChar]);
  }
  console.log(passArray);
  var textarea = document.getElementById("password");
  textarea.value = passArray.join("");
} 
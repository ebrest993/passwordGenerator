let generateBtn = document.querySelector("#generate");
let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 !#$%&'()*+,-./:;<=>?@[\^]_`{}|~" .split("");
let passArray = [];
let lowLetters = "abcdefghijklmnopqrstuvwxyz" .split("");
let upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
let numbers = "1234567890" .split("");
let special = " !#$%&'()*+,-./:;<=>?@[\^]_`{}|~" .split("");


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
  let passLength = window.prompt("Please select a number between 8 and 128:");
  if (passLength === null) {
    return;
  } else if (passLength < 8 || passLength > 128) {
    window.alert("PLEASE ENTER A NUMBER BETWEEN 8 AND 128");
    numberChar ();
  } else {
    window.alert("Good job!");
    for (var i = 0; i < passLength; i++) {
      let randChar = randNum(letters.length-1);
      passArray.push(letters[randChar]);
    }
    selectCase();
    console.log(passArray);
  }
}

// The following function returns random as many random items as the parameter calls for.

function randNum (input) {
  return Math.floor(Math.random() * input);
};

// THIS FUNCTION ASKS ABOUT UPPER/LOWERCASE CHARACTERS (DOES NOT RECORD THE ANSWER)
function selectCase () {
  let passCase = window.prompt("Would you like your password to contain uppercase characters, lowercase characters, or both?", "Enter U, L, or B");
  if (passCase === "u" || 
      passCase === "l" || 
      passCase === "b" || 
      passCase === "U" || 
      passCase === "L" || 
      passCase === "B") {
    window.alert("Lookit you go!");
  } else {
    window.alert("Please enter U for Uppercase, L for lowercase, or B for both"); 
    selectCase ();
  }  
  confirmNumber();
}

// THIS FUNCTION ASKS ABOUT NUMBERS (DOES NOT RECORD THE ANSWER)
function confirmNumber () {
  let passNumber = window.confirm("Would you like your password to contain numbers?");
  if (passNumber === true) {
    window.alert("Adding numbers to the mix...");
    confirmSpecial();
  } else {
    window.alert("86 numbers. Copy that."); 
    confirmSpecial();
  }
 
}

// Next I need to:
//   Separate arrays are created for each of the user selections
//   A window.prompt is added:
//      lowercase, uppercase, or both
//   A window.confirm is added:
//      numeric: yes or no 
//      special characters: yes or no 
//      choices correct: yes or no
//   Functions are made to incorporate any/all possible combinations of the selections
//   A password is generated
//   A password is displayed in "#password" text area

// THIS FUNCTION ASKS ABOUT SPECIAL CHARACTERS (DOES NOT RECORD THE ANSWER)
function confirmSpecial () {
  let passSpecChar = window.confirm("Would you like your password to contain special characters?");
  if (passSpecChar === true) {
    window.alert("WHOAAAAAA");
  } else {
    window.alert("Whoa whoa whoa... are you coding right now? I THINK SO");
  }
}
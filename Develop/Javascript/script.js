// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

function generatePassword() {
  // To put all characters in true
  var config = {
    lowerCase: true,
    upperCase: true,
    special: true,
    numbers: true,
  };

  var plength = window.prompt("Choose the length of the password: ");
  if (plength >= 8 && plength <= 128) { // Length min and max 
    config.lowerCase = window.confirm(
      "Do you want to include lowercase letters?"  // Lowercase input
    );
    config.upperCase = window.confirm(
      "Do you want to include capital letters?" // Capital letters input
    );
    config.special = window.confirm(
      "Do you want to include special characters?" // Special characters input
    );
    config.numbers = window.confirm("Do you want to include numbers?"); // Numbers input
  } else {
    window.alert("Select a valid length");
  }
    //  Values of each input
  var characters = {
    lowerCase: "a b c d e f g h i j k l m n o p q r s t u v w y x z",
    upperCase: "A B C D E F G H I J K L M N O P Q R S T U V W Y X Z",
    special: "- _ . , @ # % ( = ) / & $ · ! ¿ ¡ ? ^ + ç < >",
    numbers: "1 2 3 4 5 6 7 8 9",
  };
  finalPassword();

  function finalPassword() {
    var finalCharacters = " "; // Includes all the options for the password
    var password = " "; // final password

    // add the selected values to finalCharacters array
    if (config.lowerCase == true) {
      finalCharacters += characters.lowerCase + " ";
    }
    if (config.upperCase == true) {
      finalCharacters += characters.upperCase + " ";
    }
    if (config.special == true) {
      finalCharacters += characters.special + " ";
    }
    if (config.numbers == true) {
      finalCharacters += characters.numbers + " ";
    }
    if (
      config.lowerCase == false &&
      config.upperCase == false &&
      config.special == false &&
      config.numbers == false
    ) {
      window.alert("Please select a valid criteria"); // Make sure at least one character is selected
    }
    
    // Settings to make the string an array
    finalCharacters = finalCharacters.trim(); // To remove the spaces
    finalCharacters = finalCharacters.split(" "); // To make it an array

    for (var i = 0; i < plength; i++) {
      password +=
        finalCharacters[Math.floor(Math.random() * finalCharacters.length + 1)]; // add random digits until the max length
    }

    window.alert("Your secure password is: " + password);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

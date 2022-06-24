// Assignment code here
function generatePassword () {
  var getPasswordLength = function (){
    var passwordLength = window.prompt("Enter password length (integer between 8 and 128)");
    if (128 > passwordLength && passwordLength > 8) {
      window.alert("Your password will be " + passwordLength + " characters long.")
    } else {
      window.alert("Please enter a valid selection");
      getPasswordLength();
    }
    console.log(`password length = ${passwordLength}`);
  }
  getPasswordLength();
  
  var getPasswordCase = function(){
    var passwordCase = window.prompt("Choose password case: enter 1 for lowercase only, enter 2 for UPPERCASE ONLY, enter 3 for a mix of lowercase and UPPERCASE.");
    if(passwordCase >= 1 && passwordCase <=3) {
      window.alert("You have made a valid selection.")
    } else {
      window.alert("Please enter a valid selection");
      getPasswordCase();
    }
    console.log(`password case selection = ${passwordCase}`);
    console.log(`1 = lowercase only, 2 = UPPER CASE ONLY, 3 = mix of upper and lower case.`)
  }
  getPasswordCase();
  var getPasswordNumbers = function(){
    var passwordNumbers = window.prompt("Include numbers? YES or NO");
    passwordNumbers = passwordNumbers.toLowerCase();
    
    if(passwordNumbers === "yes" || passwordNumbers === "no"){
      window.alert("You have made a valid selection.");
      console.log(`Will password contain numbers? ${passwordNumbers}`);
    } else {
      window.alert("Please enter a valid selection.");
      getPasswordNumbers();
    }
  }

  getPasswordNumbers();

  var getPasswordSpecial = function(){
    var passwordSpecialCharacters = window.prompt("Include special characters? YES or NO");
    passwordSpecialCharacters = passwordSpecialCharacters.toLowerCase();
    
    if(passwordSpecialCharacters === "yes" || passwordSpecialCharacters === "no") {
      window.alert("You have made a valid selection.");
      console.log(`Will password contain special characters? ${passwordSpecialCharacters}`);
    } else{
      window.alert(`Please make a valid selection.`);
      getPasswordSpecial;
    }
  }

  getPasswordSpecial();

  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

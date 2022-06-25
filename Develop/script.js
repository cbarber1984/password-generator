// Assignment code here
function generatePassword () {
  // function to shuffle array using the Fisher Yates algorithm
  const shuffleArray = array => {
    for (let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array [j];
      array[j] = temp;
    }
  }
  
  // function to pull random item from array
  const random_items = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  const capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
  let generatedPassword = [];
  let passwordLength = "";
  let isLowerCase = "";
  let loopResult = [];
  let isUppercase = "";
  let passwordNumbers = "";
  let passwordSpecialCharacters = "";
  
  // define functions
  var getLowerCase = function(){
    isLowerCase = window.prompt("Would you like to include lowercase letters? YES or NO").toLowerCase();
    
    if(isLowerCase === "yes" || isLowerCase === "no") {
      window.alert("You have made a valid selection.")
    } else {
      window.alert("Please make a valid selection.")
      
      getLowerCase(); // recursive call to force valid selection
    }
  }

  var getUppercase = function(){
    isUppercase = window.prompt("Would you like to include UPPERCASE letters? YES or NO").toLowerCase();
    if (isUppercase === "yes" || isUppercase === "no") {
      window.alert("You have made a valid selection.")
    } else {
      window.alert("Please make a valid selection.");
      getUppercase(); // recursive call to force valid selection
    }
  }

  var getPasswordNumbers = function(){
    passwordNumbers = window.prompt("Include numbers? YES or NO").toLowerCase();
    
    if(passwordNumbers === "yes" || passwordNumbers === "no"){
      window.alert("You have made a valid selection.");
    } else {
      window.alert("Please enter a valid selection.");
      getPasswordNumbers(); // recursive call to force valid selection
    }
  }

  var getPasswordSpecial = function(){
    passwordSpecialCharacters = window.prompt("Include special characters? YES or NO").toLowerCase();
    
    if(passwordSpecialCharacters === "yes" || passwordSpecialCharacters === "no") {
      window.alert("You have made a valid selection.");
      console.log(`Will password contain special characters? ${passwordSpecialCharacters}`);
    } else{
      window.alert(`Please make a valid selection.`);
      getPasswordSpecial; // recursive call to force valid selection
    }
  }

  var getPasswordLength = function (){
    passwordLength = window.prompt("Enter password length (integer between 8 and 128)");
    if (128 > passwordLength && passwordLength > 8) {
      window.alert("Your password will be " + passwordLength + " characters long.")
    } else {
      window.alert("Please enter a valid selection");
      getPasswordLength();
    }
    return passwordLength; 
  }
  
  // function calls to gather user input
  getPasswordLength();
  getLowerCase();
  getUppercase();
  getPasswordNumbers();
  getPasswordSpecial();

  // loop to complete the following tasks:
  // * generate characters based upon user input 
  // * push them into temporary array
  // * shuffle the temprary array
  // * push temporary array into results array
  for (let i=0; generatedPassword.length < passwordLength; i++) {
    // reset temporary array (loopResult) to empty []
    loopResult = [];
    
    // push lowercase letters to temprary array if selected
    const addLowercase = function(){
      if(isLowerCase === "yes") {
        let randomLowercaseLetter = random_items(lowercaseLetters)
        //console.log(randomLowercaseLetter);
        loopResult.push(randomLowercaseLetter);
      }
    }
    // push uppercase letters to temprary array if selected
   const addUppercase = function (){
     if(isUppercase === "yes") {
       let randomUppercase = random_items(capitalLetters);
       //console.log(randomUppercase);
       loopResult.push(randomUppercase);
      }
    }
    // push numbers to temprary array if selected
    const addNumbers = function(){

      if(passwordNumbers === "yes") {
        let randomNumber = random_items(numbers);
        console.log(randomNumber);
        loopResult.push(randomNumber);
      }
    }
    // push special characters to temprary array if selected
    const addSpecialCharacters = function(){

      if(passwordSpecialCharacters === "yes") {
        let randomSpecial = random_items(specialCharacters);
        console.log(randomSpecial);
        loopResult.push(randomSpecial);
      }
    }
    addLowercase();
    addUppercase();
    addNumbers();
    addSpecialCharacters();

    shuffleArray(loopResult);
    generatedPassword = generatedPassword.concat(loopResult);
  }

  // turn password array into text string without commas
  let result = generatedPassword.join('');
  
  // remove extra end characters
  result = result.slice(0, passwordLength);
  return result;
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

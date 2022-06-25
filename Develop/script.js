// Assignment code here
function generatePassword () {
  const shuffleArray = array => {
    for (let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array [j];
      array[j] = temp;
    }
  }
  
  const random_items = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  let capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
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
    console.log(isLowerCase);
    //isLowerCase = isLowerCase.toLowerCase();
    
    if(isLowerCase === "yes" || isLowerCase === "no") {
      window.alert("You have made a valid selection.")
    } else {
      window.alert("Please make a valid selection.")
      getLowerCase();
    }
  }

  var getUppercase = function(){
    isUppercase = window.prompt("Would you like to include UPPERCASE letters? YES or NO").toLowerCase();
    if (isUppercase === "yes" || isUppercase === "no") {
      window.alert("You have made a valid selection.")
    } else {
      window.alert("Please make a valid selection.");
      getUppercase();
    }
  }

  var getPasswordNumbers = function(){
    passwordNumbers = window.prompt("Include numbers? YES or NO").toLowerCase();
    
    if(passwordNumbers === "yes" || passwordNumbers === "no"){
      window.alert("You have made a valid selection.");
      console.log(`Will password contain numbers? ${passwordNumbers}`);
    } else {
      window.alert("Please enter a valid selection.");
      getPasswordNumbers();
    }
  }

  var getPasswordSpecial = function(){
    passwordSpecialCharacters = window.prompt("Include special characters? YES or NO").toLowerCase();
    
    if(passwordSpecialCharacters === "yes" || passwordSpecialCharacters === "no") {
      window.alert("You have made a valid selection.");
      console.log(`Will password contain special characters? ${passwordSpecialCharacters}`);
    } else{
      window.alert(`Please make a valid selection.`);
      getPasswordSpecial;
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
    console.log(`password length = ${passwordLength}`);
    return passwordLength;
  }
  
  // code block to gather user input
  getPasswordLength();
  getLowerCase();
  getUppercase();
  getPasswordNumbers();
  getPasswordSpecial();

  // revised loop to generate characters to push into password
  for (let i=0; generatedPassword.length < passwordLength; i++) {
    // reset loopResult array to []
    loopResult = [];
    
    // include lowercase letters if selected
    const addLowercase = function(){
      if(isLowerCase === "yes") {
        let randomLowercaseLetter = random_items(lowercaseLetters)
        //console.log(randomLowercaseLetter);
        loopResult.push(randomLowercaseLetter);
      }
    }
    // include uppercase letters if selected
   const addUppercase = function (){
     if(isUppercase === "yes") {
       let randomUppercase = random_items(capitalLetters);
       //console.log(randomUppercase);
       loopResult.push(randomUppercase);
      }
    }
    // include numbers if selected
    const addNumbers = function(){

      if(passwordNumbers === "yes") {
        let randomNumber = random_items(numbers);
        console.log(randomNumber);
        loopResult.push(randomNumber);
      }
    }
    // include special characters if selected
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
    console.log(`loopResult = ${loopResult}`);
    console.log(`generated Password length = ${generatedPassword.length}`)
    console.log(`generated Password = ${generatedPassword}`)
    debugger;
  }

  let result = generatedPassword.join('');
  result = result.slice(0, passwordLength);
  console.log(`result is ${result}`);
  return result;
}
  
  
  // original code below this point
  
//   do {
//   let loopResult = [];
//   var getLowerCase = function(){
//     var isLowerCase = window.prompt("Would you like to include lowercase letters? YES or NO");
//     isLowerCase = isLowerCase.toLowerCase();
    
//     if(isLowerCase === "yes" || isLowerCase === "no") {
//       window.alert("You have made a valid selection.")
//     } else {
//       window.alert("Please make a valid selection.")
//       getLowerCase();
//     }
//     if(isLowerCase === "yes") {
//       let randomLowercaseLetter = random_items(lowercaseLetters)
//       console.log(randomLowercaseLetter);
//       loopResult.push(randomLowercaseLetter);
//     }
//   }

//   getLowerCase();

//   var getUppercase = function(){
//     let isUppercase = window.prompt("Would you like to include UPPERCASE letters? YES or NO");
//     isUppercase = isUppercase.toLowerCase();
//     if (isUppercase === "yes" || isUppercase === "no") {
//       window.alert("You have made a valid selection.")
//     } else {
//       window.alert("Please make a valid selection.");
//       getUppercase();
//     }

//     if(isUppercase === "yes") {
//       let randomUppercase = random_items(capitalLetters);
//       console.log(randomUppercase);
//       loopResult.push(randomUppercase);
//     }
//   }

//   getUppercase();
  
//   var getPasswordNumbers = function(){
//     var passwordNumbers = window.prompt("Include numbers? YES or NO");
//     passwordNumbers = passwordNumbers.toLowerCase();
    
//     if(passwordNumbers === "yes" || passwordNumbers === "no"){
//       window.alert("You have made a valid selection.");
//       console.log(`Will password contain numbers? ${passwordNumbers}`);
//     } else {
//       window.alert("Please enter a valid selection.");
//       getPasswordNumbers();
//     }
//     if(passwordNumbers === "yes") {
//       let randomNumber = random_items(numbers);
//       console.log(randomNumber);
//       loopResult.push(randomNumber);
//     }
//   }

//   getPasswordNumbers();

//   var getPasswordSpecial = function(){
//     var passwordSpecialCharacters = window.prompt("Include special characters? YES or NO");
//     passwordSpecialCharacters = passwordSpecialCharacters.toLowerCase();
    
//     if(passwordSpecialCharacters === "yes" || passwordSpecialCharacters === "no") {
//       window.alert("You have made a valid selection.");
//       console.log(`Will password contain special characters? ${passwordSpecialCharacters}`);
//     } else{
//       window.alert(`Please make a valid selection.`);
//       getPasswordSpecial;
//     }
//     if(passwordSpecialCharacters === "yes") {
//       let randomSpecial = random_items(specialCharacters);
//       console.log(randomSpecial);
//       loopResult.push(randomSpecial);
//     }
//   }

//   getPasswordSpecial();

//   shuffleArray(loopResult);
//   generatedPassword = generatedPassword.concat(loopResult);
  
//   console.log(`loop result = ${loopResult}`);
//   console.log(`generatedPassword = ${generatedPassword}`);
//   console.log(`passwordLength = ${passwordLength}`);
// }
// while (generatedPassword.length < passwordLength);

//   let result = generatedPassword.join()
//   result = result.slice(0, passwordLength);
//   return result;
// }

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

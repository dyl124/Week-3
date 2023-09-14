
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var charcters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var specialCharcters = "!@#$%^&*()";
  for (var i=0; passwordLength; i++) 
  {  var randomNumber = math.floor(math.random() *8 )}

}

var charString = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", "~!@#$%^&*()-_=+"];

var userInput = [];

var password = "";

var generateBtn = document.querySelector("#generate");

function writePassword() {
    password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
function generatePassword() {
    var characterLength = 0
    while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === false) {
        characterLength = parseInt(prompt("How many characters would you like your password to be? (8-128)"));
    }

    var upper = false
    var lower = false
    var number = false
    var symbol = false

    while (!upper && !lower && !number && !symbol) {

      
        upper = confirm("Click OK to confirm uppercase characters");

     
        lower = confirm("Click OK to confirm lowercase characters");

        number = confirm("Click OK to confirm numeric characters");

        symbol = confirm("Click OK to confirm special characters (~!@#$%^&*()-_=+)");
    }

 
    if (upper) {
        userInput.push(charString[0]);
    }

    if (lower) {
        userInput.push(charString[1])
    }

    if (number) {
        userInput.push(charString[2])
    }

    if (symbol) {
        userInput.push(charString[3])
    }

    var password = "";


    userInput = userInput.join("").split("");


    for (var i = 0; i < characterLength; i++) {
    
        var index = (Math.floor(Math.random() * userInput.length));
        password = password + userInput[index]
    }

    return password
}


generateBtn.addEventListener("click", writePassword);
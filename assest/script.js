
// Global Variables
var arraySplit = ""; 
var exitApplication = false; 
var userInput = ""; 
var finalPassword = ""; 
var displayPassword = ""; 

// random object
var rCriteria = {
  lowercase: { indexNumber: 0 , criteria: "abcdefghijklmnopqrstuvwxyz"
  },
  uppercase: { indexNumber: 1, criteria: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  },
  numeric: { indexNumber: 2, criteria: "0123456789"
  },
  symbols: { indexNumber: 3, criteria: "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
  }
}

// prompt for generation criteria 
var generatePassword = function() {


   
   arraySplit = ""; 
   exitApplication = false; 
   userInput = ""; 
   finalPassword = ""; 
   displayPassword = ""; 

  // Alert user for criteria
  window.alert("The criteria for password generator are lowercase, uppercase, numeric, and/or special characters.");

  var validInput = true;



  while(validInput) {
    // Take user input
    userInput = window.prompt("Select criteria for password (you can select more than one use space between): 1=lowercase 2=uppercase 3=numeric 4=special characters.\n");
    if (!userInput) {
      window.alert("If you wish to close the application, please close this password generator tab.")
      generatePassword();
      } else if (userInput) {
                
    userInput = userInput.split(" ");
    
    arraySplit = userInput.slice(0,userInput.length);
  
    window.alert("You have selected: " + arraySplit);
    
    validInput = false;
      
    
    for (var i = 0; i < userInput.length; i++) {
      
      var inputCriteria = userInput[i];
     
      var inputCriteriaInteger = parseInt(inputCriteria);
    
      switch(inputCriteriaInteger) { 
        case 1:
        case 2:
        case 3:
        case 4:
          
          break;
        default: 
          if (!inputCriteriaInteger) { 
            window.alert("Please select a criteria using numbers and only from 1-4 seprated by one space.\nRestarting application");
            generatePassword(); 
          }
          else { 
            window.alert(" Please select a criteria using numbers and only from 1-4 seprated by space.\n\n" + "User input: " + inputCriteria + " is invalid");
            generatePassword(); 
          } 
      }
    }

                          

    
    var duplicatePassState = true;
  
    var validateInput = [];
    var round1In = "";
    var round1In2 = "";


    
    if (userInput.length == 1) {
      duplicatePassState = false;
    }

     
      while (duplicatePassState) {

        
        var tempVar = "";
        for (var i = 0; i < userInput.length; i++) {
          tempVar = userInput[i];
          validateInput.push(tempVar);
        }

        
        round1In = validateInput.shift();
        round1In2 = validateInput.pop();
        if (round1In === round1In2) {
          window.alert("Duplication detected, please check criteria rules.");
          generatePassword();
        } 
        
        else {
        
          var round2In = "";
          var round2In2 = "";
          round2In = validateInput.shift();
          round2In2 = validateInput.pop();

          

          if(!round2In || !round2In2) {
            duplicatePassState = false;
            break;
          }


          if (round1In === round2In) {
            window.alert("Duplication detected, please check criteria rules.");
            generatePassword();
          } else if (round1In2 === round2In2) {
            window.alert("Duplication detected, please check criteria rules.");
            generatePassword();
          } else if (round1In === round2In2) {
            window.alert("Duplication detected, please check criteria rules.");
            generatePassword();
          } else if (round1In2 === round2In) {
            window.alert("Duplication detected, please check criteria rules.");
            generatePassword();
          } 
            else if (round1In === round1In2) {
            window.alert("Duplication detected, please check criteria rules.");
            generatePassword();
          } else if (round2In === round2In2) {
            window.alert("Duplication detected, please check criteria rules.");
            generatePassword();
          } 
          else {
        
            duplicatePassState = false;
          }
        } 
      }
    }
  }
}
//how long the generated password should be
function passlength () { 

  
  window.alert("How long do you want your password to be from 8-128 characters.\n E.x 16");
  var plength = parseInt(window.prompt("Please enter length")); 
  if (plength < 8 || plength > 128) {
    
    window.alert("Please enter a valid number between 8-128");
    passlength();

  } else if (!plength) { 
    window.alert("Please enter a valid number between 8-128")
    passlength(); 
  } else {
    window.alert("You have entered a valid length of: " + plength + "\n Password will now be generated");
    return plength; 
  }
}

//uses the char type/length criteria to generate the password
function generatePasswordRandomness(userInput, plength) {
  
  var valueRandom = 0;
  var counter = userInput.length 
  var UserCounter = userInput.length 
  var finalPassword = ""; 

  
  for (var i = 0; i < userInput.length; i++) {

    var guaranteedCriteria = userInput[i];
    
    if (guaranteedCriteria === "1") {

      valueRandom = Math.floor(Math.random() * 26);
      finalPassword += rCriteria.lowercase.criteria[valueRandom];

    } else if (guaranteedCriteria === "2") {
      
      valueRandom = Math.floor(Math.random() * 26);
      finalPassword += rCriteria.uppercase.criteria[valueRandom];

    } else if (guaranteedCriteria === "3") {

      valueRandom = Math.floor(Math.random() * 10);
      finalPassword += rCriteria.numeric.criteria[valueRandom];

    } else if (guaranteedCriteria === "4") {

      valueRandom = Math.floor(Math.random() * 31);
      finalPassword += rCriteria.symbols.criteria[valueRandom];
    } 
  }

  
  while ( counter < plength )  {

    if (!userInput[(UserCounter - 1)]) {

      UserCounter -= Math.floor( ( (Math.random() * userInput.length) + 1) );
      counter += 1;
  
    } else {

      UserCounter = Math.floor( ( (Math.random() * userInput.length) + 1) );
      counter += 1;
    }


    var inputCriteria = userInput[(UserCounter - 1)];
    
    
    var inputCriteriaInteger = parseInt(inputCriteria);

    switch(inputCriteriaInteger) { 
      case 1:
       
        valueRandom = Math.floor(Math.random() * 26);
        finalPassword += rCriteria.lowercase.criteria[valueRandom];
          break; 
      case 2:
        valueRandom = Math.floor(Math.random() * 26);
        finalPassword += rCriteria.uppercase.criteria[valueRandom];
        break;
      case 3:
        valueRandom = Math.floor(Math.random() * 10);
        finalPassword += rCriteria.numeric.criteria[valueRandom];
        break;
      case 4:
        valueRandom = Math.floor(Math.random() * 31);
        finalPassword += rCriteria.symbols.criteria[valueRandom];
        break;
    }
  }
  
  return finalPassword;
}


  
// Write password to the #password input
function writePassword() {
 
  s
  arraySplit = "";
  exitApplication = false; 
  userInput = ""; 
  finalPassword = ""; 
  displayPassword = ""; 
  window.alert(" Lets check our password criteria options");
  
  var plength = passlength();

  displayPassword = generatePasswordRandomness(userInput,plength);


  var passwordText = document.querySelector("#password"); 
  
 
  document.getElementById("password").readOnly = false; 
  document.getElementById("password").value = displayPassword; 
  document.getElementById("password").readOnly = true; 

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//why wont my commits show up

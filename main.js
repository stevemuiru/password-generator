let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-','='];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const display = document.querySelector("#display")
let allCharacters = upperCase.concat(lowerCase, specialCharacters, numbers);


function generate() {
  let generatedPassword = "";
  const passwordLength = slider.value;
  let characterSet = "";

  if (includeUppercase) {
    characterSet += upperCase.join('');
  }
  if (includeLowercase) {
    characterSet += lowerCase.join('');
  }
  if (includeSpecialCharacters) {
    characterSet += specialCharacters.join('');
  }
  if (includeNumbers) {
    characterSet += numbers.join('');
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    generatedPassword += characterSet.charAt(randomIndex);
  }

  display.value = generatedPassword;
}


function copy() {
  let copyText = document.querySelector("#display");
  copyText.select(); document.execCommand("copy");
}
document.querySelector("#copy").addEventListener('click', copy);


let slider = document.querySelector("#myRange");
let output = document.querySelector("#value");
output.innerHTML = slider.value 

slider.oninput = function (event) {
  output.innerHTML = event.target.value;
}

let includeUppercase = false;
let includeLowercase = false;
let includeSpecialCharacters = false;
let includeNumbers = false;
 

function handleCheckboxChange(event) {
  const checkbox = event.target;
  const ischecked = checkbox.checked;
  
  if (checkbox.id === "includeUppercase") {
    includeUppercase = ischecked;
  }else if(checkbox.id === "includeLowercase") {
    includeLowercase = ischecked;
  } else if (checkbox.id === "includeSpecialCharacters") {
    includeSpecialCharacters = ischecked;
  } else if (checkbox.id === "includeNumbers") {
    includeNumbers = ischecked;
  }
}

document.getElementById("includeUppercase").addEventListener("change", handleCheckboxChange);
document.getElementById("includeLowercase").addEventListener("change", handleCheckboxChange);
document.getElementById("includeSpecialCharacters").addEventListener("change", handleCheckboxChange);
document.getElementById("includeNumbers").addEventListener("change", handleCheckboxChange);

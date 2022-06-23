function renderPasswords() {
  for (let i = 0; i < passwords.length; i++) {
    passwords[i].textContent = generatePassword();
  }
}

function randomLower() {
  return lowercase[getRandomNumber(0, lowercase.length)];
}

function randomUpper() {
  return uppercase[getRandomNumber(0, uppercase.length)];
}

function randomNumber() {
  return numbers[getRandomNumber(0, numbers.length)];
}

function randomSymbol() {
  return symbols[getRandomNumber(0, symbols.length)];
}

function randomChar() {
  return char[getRandomNumber(0, char.length)];
}

function generatePassword() {
  let password = [];

  password.push(randomLower());

  if (hasUppercase) {
    password.push(randomUpper());
    char += uppercase;
  }

  if (hasNumbers) {
    password.push(randomNumber());
    char += numbers;
  }

  if (hasSymbols) {
    password.push(randomSymbol());
    char += symbols;
  }

  for (let i = password.length; i < length; i++) {
    password.push(randomChar());
  }

  password.sort(() => Math.random() - 0.5);
  return password.join("");
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function processInputs(event) {
  event.preventDefault();

  length = Number(lengthEl.value);
  hasSymbols = symbolsEl.checked;
  hasNumbers = numbersEl.checked;
  hasUppercase = uppercaseEl.checked;

  renderPasswords();
}

function copy(element) {
  navigator.clipboard.writeText(element.innerText);

  copyModal.classList.toggle("hidden");
  setTimeout(() => copyModal.classList.toggle("hidden"), 2000);
}

const lengthEl = document.querySelector("#length");
const symbolsEl = document.querySelector("#symbols");
const numbersEl = document.querySelector("#numbers");
const uppercaseEl = document.querySelector("#uppercase");
const button = document.querySelector("button");
const copyModal = document.querySelector(".copy");

const passwords = document.querySelectorAll(".password p");

const lowercase = "abdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}],|:;<>.?/'\"\\";
let char = lowercase;

let length = null;
let hasSymbols = null;
let hasNumbers = null;
let hasUppercase = null;

button.addEventListener("click", processInputs);

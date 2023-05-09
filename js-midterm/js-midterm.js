const words = [
  "colorado",
  "boulder",
  "flagstaff",
  "buffalos",
  "ralphie",
  "sko",
  "flatirons",
  "chautauqua",
  "pearl street",
  "folsom field",
  "buffs",
  "the hill",
  "rocky mountains",
  "the fox",
  "boulder theater",
];

const word = words[Math.floor(Math.random() * words.length)];
const guessedLetters = [];
let incorrectGuesses = 0;

function displayWord() {
  let displayedWord = "";

  for (const letter of word) {
    if (guessedLetters.includes(letter)) {
      displayedWord += letter;
    } else {
      displayedWord += "_";
    }
  }

  document.getElementById("word").textContent = displayedWord;
}

function handleKeyPress(event) {
  if (/^[a-zA-Z ]$/.test(event.key)) {
    const letter = event.key.toLowerCase();
    if (!guessedLetters.includes(letter)) {
      guessedLetters.push(letter);

      if (word.includes(letter)) {
        document.getElementById("guesses").textContent = `You guessed "${letter}" correctly!`;

        displayWord();
        if (!document.getElementById("word").textContent.includes("_")) {
          document.getElementById("guesses").textContent = "Thats it!";
          
          document.removeEventListener("keydown", handleKeyPress);
        }
      } else {
        incorrectGuesses++;

        document.getElementById("guesses").textContent = `You guessed "${letter}" incorrectly! ${incorrectGuesses}/10`;

        if (incorrectGuesses === 10) {
          document.getElementById("guesses").textContent = `Darn! The word was "${word}".`;
          document.removeEventListener("keydown", handleKeyPress);
        }
      }
    }
  }
}

displayWord();
document.addEventListener("keydown", handleKeyPress);


const coll = document.querySelector(".collapsible");
coll.addEventListener("click", function() {
this.classList.toggle("active");
const content = this.nextElementSibling;
if (content.style.maxHeight) {
  content.style.maxHeight = null;
} else {
  content.style.maxHeight = content.scrollHeight + "px";
}
});
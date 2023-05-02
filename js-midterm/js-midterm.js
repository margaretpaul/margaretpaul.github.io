const words = [ 'banana', 'yellow','people','coffee','purple','summer','guitar','jacket','friend','beauty','purple','cookie','rocket','bottle','camera','church','pencil','window','tongue','school','silver','orange','dragon','rocket','basket'];
const word = words[Math.floor(Math.random() * words.length)];

let guesses = 0;
let correctGuesses = 0;
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '-';
}

function guessLetter() {
    const guess = document.getElementById('input-word').value;
    if (guess.length !== 6) {
        alert('enter a 6 letter word');
      return;

  }
  guesses++;
  let correct = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess[i]) {
      answerArray[i] = guess[i];
      correctGuesses++;
      correct = true;
    }
  }
  const result = document.getElementById('result-container');
  result.textContent = answerArray.join(' ');
  if (correctGuesses === word.length) {
    result.textContent = `Correct! You guessed "${word}" in ${guesses} guesses`;
   
  }
}

// Event listener for the submit button
document.getElementById('submit-button').addEventListener('click', guessLetter);

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
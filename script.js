const words = [
  'apple', 'banana', 'orange', 'grape', 'pear',
  'pineapple', 'kiwi', 'watermelon', 'strawberry', 'blueberry'
];

let currentWord = '';
let scrambledWord = '';
let score = 0;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function scrambleWord(word) {
  let scrambled = word;
  while (scrambled === word) {
    scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
  }
  return scrambled;
}

function displayWord() {
  currentWord = getRandomWord();
  scrambledWord = scrambleWord(currentWord);
  document.getElementById('wordDisplay').textContent = scrambledWord;
}

function checkAnswer() {
  const guess = document.getElementById('inputBox').value.toLowerCase();  
  if (guess === currentWord) {
    alert('Correct! Well done!');
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
    displayWord();
    document.getElementById('inputBox').value = '';
  } else {
    alert('Incorrect. Try again!');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  displayWord();
});

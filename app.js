'use strict';

function Song(name, path, incorrect) {
  this.name = name;
  this.path = path;
  this.incorrect = incorrect;
}

// test audio play command to be replaced with html5
var audio = new Audio('audio/clip_anything_but_mine.mp3');
audio.play();

// random function to position randomize position of correct and incorrect answers
function randomPos() {
  var randomFourNumbers = [];
  // algorithm to create random array of element containing four exclusive numbers.
  return randomFourNumbers;
}

// display choices by hooking up with specific LI element
function renderChoices(randomArray) {
  // render correct answer with using a random position
  // render first incorrect answer with random position
  // render second incorrect answer with random position
  // render third answer with random position
}

// if user answered incorrectly then that LI element will be crossed out








// display the specific image index
// function render(index, imgPos) {
//   var tempObj = JSON.parse(localStorage[index]);
//   tempObj.shownFreq++;
//   localStorage[index] = JSON.stringify(tempObj);
//   var displayEl = document.getElementById('image-row');
//   var rowEl = document.createElement('button');
//   rowEl.setAttribute('type', 'submit');
//   // imgPos values: 0 = left, 1 =  center, 2 = right
//   switch (imgPos) {
//   case 'left': rowEl.setAttribute('class', 'float-left');
//     break;
//   case 'center': rowEl.setAttribute('class', 'float-center');
//     break;
//   case 'right': rowEl.setAttribute('class', 'float-right');
//     break;
//   default: break;
//   }
//   rowEl.setAttribute('onclick', 'targetString = \"' + tempObj.ID_string + '\"; newRound();');
//   var imgEl = document.createElement('img');
//   imgEl.setAttribute('src', tempObj.imgPath);
//   rowEl.appendChild(imgEl);
//   displayEl.appendChild(rowEl);
// };

// newRound();

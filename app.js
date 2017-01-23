'use strict';

//Implements name from input functionailty
//Event listener
var formEl = document.getElementById('name-form').addEventListener('submit', getName ,false);

function getName(){
  event.preventDefault();
  event.stopPropagation();
  var userName = event.target.name.value;
  localStorage.setItem('name',userName);
}

function Song(name, path, incorrect) {
  this.name = name;
  this.path = path;
  this.incorrect = incorrect; //array of 3 incorrect strings
}

// random function to create an array with 4 elements containing (0,1,2,3) that will determine the position of answer choices in html
function randomPos() {
  var randomFourNumbers = [];
  // algorithm to create random array of element containing four exclusive numbers.
  while (randomFourNumbers.length < 4) {
    var tempNum = Math.round(Math.random() * 3);
    if (!(randomFourNumbers.includes(tempNum))) {
      randomFourNumbers.push(tempNum);
    };
  };
  return randomFourNumbers;
}

// display choices by hooking up with specific LI element
function renderChoices(randomArray) {
  var randomList = [];
  randomList = randomPos();
  console.log(randomList);
  // render correct answer with using a random position
  // render first incorrect answer with random position
  // render second incorrect answer with random position
  // render third answer with random position
}

// if user answered incorrectly then that LI element will be crossed out and will become unselectable
// if user answered correctly then




var randomList = 0;
renderChoices(randomList);
// kk();
//
// function kk(){
//   var lol = document.getElementById('selection').value;
//   alert(lol);
// }

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

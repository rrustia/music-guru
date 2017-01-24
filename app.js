'use strict';

//Implements name from input functionailty
//Event listener
//Collaboration Castro, Ron, Eve
if (document.getElementById('name-form')) {
  var formEl = document.getElementById('name-form').addEventListener('submit', getName ,false);
}

function getName(){
  event.preventDefault();
  event.stopPropagation();
  var userName = event.target.name.value;
  localStorage.setItem('name',userName);
}

function Song(name, path, answers) {
  this.name = name;
  this.path = path;
  this.answers = answers; //array of answer strings, first one is correct answer(index 0)
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
function renderChoices(song) {
  var randomList = [];
  randomList = randomPos();
  console.log(randomList);
  var genreEl = document.getElementById('classic-rock-question');
  for (var i = 0; i < 4; i++) {
    var listEl = document.createElement('input');
    listEl.setAttribute('type', 'radio');
    // listEl.setAttribute('value', song.answers[randomList[i]]);
    listEl.textContent(song.answers[randomList[i]]);
  }
}

// collaboration Eve, Castro, Ron

var rock = new Song('I Wanna Rock And Roll All Night','audio/classic-rock-kiss.mp3',['Kiss - I Wanna Rock And Roll All Night', 'Blue Oster Cult - Don\'t Fear the Reaper', 'Aerosmith - Dream On', 'Fleetwood Mac - Go Your Own Way']);

var pop = new Song('Safe And Sound', 'audio/clip_safe_and_sound.mp3', ['Capital Cities - Safe And Sound', 'The Weeknd - Staryboy', 'Alessia Cara - Scars to Your Beautiful', 'Shawn Mendes - Treat You Better']);

var rap = new Song('Push It', 'audio/Salt-N-Pepa-Push-It-clip.mp3', ['Salt-N-Pepa - Push It', 'Bell Biv Devoe - Poison', 'Drake - Hotline Bling', 'Vanilla Ice - Ice Ice Baby']);

var country = new Song('Anything But Mine', 'audio/clip_anything_but_mine.mp3', ['Kenny Chesney - Anything But Mine','Taylor Swift - Bad Blood', 'Garth Brooks - Friends In Low Places','Luke Bryan - Country Girl (Shake It For Me)']);

var edm = new Song('One More Time', 'audio/edm-clip-daft-punk.mp3', ['Daft Punk - One More Time','The Chainsmokers - Closer','Daft Punk - Get Lucky','Major Lazer & DJ Snake - Lean On']);
var jazz = new Song('What a Wonderful World', 'audio/Louis-Armstrong-What-a-Wonderful-World.mp3', ['Louis Armstrong - What a Wonderful World','Getz and Gilberto - The Girl From Ipanema','Mingus Ah Um - Goodbye, Pork Pie Hat','That\'s All - Mack the Knife']);

var randomList = 0;
// renderChoices(randomList);
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

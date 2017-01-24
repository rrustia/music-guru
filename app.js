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

// song object constructor
function Song(name, path, answers, id) {
  this.name = name;
  this.path = path;
  this.answers = answers; //array of 4 answer strings
  this.id = id; //array of 4 ID strings
}

// random function to create an array with 4 random elements containing (0,1,2,3) that will determine the position of answer choices in html
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

// display choices by hooking up with specific input element ID
function renderChoices(questionString, song) {
  var randomList = []; // this array will contain 4 numbers(0-3) that are mixed randomly
  randomList = randomPos();
  // show sound controls
  var soundEl = document.getElementById('audioBlock');
  var audioEl = document.createElement('audio');
  audioEl.setAttribute('controls', '');
  var sourceEl =  document.createElement('source');
  sourceEl.setAttribute('src', song.path);
  sourceEl.setAttribute('type', 'audio/mpeg');
  audioEl.appendChild(sourceEl);
  soundEl.appendChild(audioEl);

  // show choices menu
  var genreEl = document.getElementById(questionString);
  for (var i = 0; i < 4; i++) {
    var listEl = document.createElement('input');
    listEl.setAttribute('id', song.id[randomList[i]]);
    listEl.setAttribute('value', song.answers[randomList[i]]);
    listEl.setAttribute('type', 'radio');
    listEl.setAttribute('name', 'songName');
    genreEl.appendChild(listEl);
    $('input#' + song.id[randomList[i]]).after(song.answers[randomList[i]] + '<br>');
  };

  var buttonEl = document.createElement('button');
  buttonEl.setAttribute('type', 'submit');
  buttonEl.textContent('Submit Answer');
  genreEl.appendChild(buttonEl);
};

// collaboration Eve, Castro, Ron
var rock = new Song('I Wanna Rock And Roll All Night','audio/classic-rock-kiss.mp3',['Kiss - I Wanna Rock And Roll All Night', 'Blue Oster Cult - Don\'t Fear the Reaper', 'Aerosmith - Dream On', 'Fleetwood Mac - Go Your Own Way'], ['IWanna', 'Blue', 'Aerosmith', 'Fleetwood']);

var pop = new Song('Safe And Sound', 'audio/clip_safe_and_sound.mp3', ['Capital Cities - Safe And Sound', 'The Weeknd - Staryboy', 'Alessia Cara - Scars to Your Beautiful', 'Shawn Mendes - Treat You Better'], ['Safe', 'The', 'Alessia', 'Shawn']);

var rap = new Song('Push It', 'audio/Salt-N-Pepa-Push-It-clip.mp3', ['Salt-N-Pepa - Push It', 'Bell Biv Devoe - Poison', 'Drake - Hotline Bling', 'Vanilla Ice - Ice Ice Baby'], ['Push', 'Bell', 'Poison', 'Drake']);

var country = new Song('Anything But Mine', 'audio/clip_anything_but_mine.mp3', ['Kenny Chesney - Anything But Mine','Taylor Swift - Bad Blood', 'Garth Brooks - Friends In Low Places','Luke Bryan - Country Girl (Shake It For Me)'], ['Anything', 'Taylor', 'Garth', 'Luke']);

var edm = new Song('One More Time', 'audio/edm-clip-daft-punk.mp3', ['Daft Punk - One More Time','The Chainsmokers - Closer','Daft Punk - Get Lucky','Major Lazer & DJ Snake - Lean On'], ['Daft', 'The', 'Daf', 'Major']);

var jazz = new Song('What a Wonderful World', 'audio/Louis-Armstrong-What-a-Wonderful-World.mp3', ['Louis Armstrong - What a Wonderful World','Getz and Gilberto - The Girl From Ipanema','Mingus Ah Um - Goodbye, Pork Pie Hat','That\'s All - Mack the Knife'], ['What', 'Getz', 'Mingus', 'That']);

function determineGenre () {
// this boolean test will determine which genre page is currently loaded
  var questionString;
  if (document.getElementById('classic-rock-question')) {
    questionString = 'classic-rock-question';
    renderChoices(questionString, rock);
  };
  if (document.getElementById('country-question')) {
    questionString = 'country-question';
    renderChoices(questionString, country);
  };
  if (document.getElementById('edm-question')) {
    questionString = 'edm-question';
    renderChoices(questionString, edm);
  };
  if (document.getElementById('jazz-question')) {
    questionString = 'jazz-question';
    renderChoices(questionString, jazz);
  };
  if (document.getElementById('pop-question')) {
    questionString = 'pop-question';
    renderChoices(questionString, pop);
  };
  if (document.getElementById('rap-question')) {
    questionString = 'rap-question';
    renderChoices(questionString, rap);
  };
}

determineGenre ();

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

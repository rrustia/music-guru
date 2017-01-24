'use strict';

//Implements name from input functionailty
if (document.getElementById('name-form')) {
  var formEl = document.getElementById('name-form').addEventListener('submit', getName ,false);
}

function getName(){
  event.preventDefault();
  event.stopPropagation();
  var userName = event.target.name.value;
  localStorage.setItem('name',userName);
}
//Gets input choices

// if (document.getElementById(questionString));
//Ron, Castro, and Eve collaboration. Castro drives while Eve and Ron navigate
function getInput(){
  event.preventDefault();
  event.stopPropagation();
  if(document.getElementsByClassName('tracks')){
    console.log('Found radio buttons!');
    var trackArr = document.getElementsByClassName('tracks');
    var track = '';
    for(var i = 0; i < trackArr.length; i++){
      if(trackArr[i].checked){
        console.log('Inside of getInput: ' + trackArr[i].value);
        track = trackArr[i].value;
        break;
      }
    }
    isCorrect(track);
  }
}
//Helper function determines if user choice is correct
function isCorrect(song){
  console.log('Inside of isCorrect: ' + song);
  if(correctSongs.includes(song)){
    alert('Correct.');
  } else {
    alert('Incorrect.');
  }
}

// song object constructor
function Song(name, path, answers, id, idTwo, formId) {
  this.name = name;
  this.path = path;
  this.answers = answers; //array of 4 answer strings
  this.id = id; //array of 4 ID strings
  this.idTwo = idTwo; //id for audio controls
  this.formId = formId; //form id for each genre
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
  displayAudioPlayer(song);
  // show choices menu
  var genreEl = document.getElementById(questionString);
  for (var i = 0; i < 4; i++) {
    var listEl = document.createElement('input');
    listEl.setAttribute('id', song.id[randomList[i]]);
    listEl.setAttribute('value', song.answers[randomList[i]]);
    listEl.setAttribute('type', 'radio');
    listEl.setAttribute('name', 'songName');
    listEl.setAttribute('checked','');
    listEl.setAttribute('class','tracks');
    //console.log(listEl);
    //console.log(listEl.value);
    genreEl.appendChild(listEl);
    $('input#' + song.id[randomList[i]]).after(song.answers[randomList[i]] + '<br>');
  };

  if (document.getElementById(song.formId)){
    var formEl = document.getElementById(song.formId).addEventListener('submit', getInput, false);;
  }

  // var buttonEl = document.createElement('button');
  // buttonEl.setAttribute('type', 'submit');
  // // buttonEl.textContent('Submit Answer');
  // genreEl.appendChild(buttonEl);
};

//Event listener
//Collaboration Castro, Ron, Eve
function displayAudioPlayer(song){
  var radioLoc = document.getElementById(song.idTwo);
  var sound = document.createElement('audio');
  sound.id = 'audio-player';
  sound.controls = 'controls';
  sound.src = song.path;
  sound.type = 'audio/mpeg';
  radioLoc.appendChild(sound);
  console.log('inside of display audio player ');
}

// collaboration Eve, Castro, Ron
var rock = new Song('I Wanna Rock And Roll All Night','audio/classic-rock-kiss.mp3',['Kiss - I Wanna Rock And Roll All Night', 'Blue Oyster Cult - (Don\'t) Fear the Reaper', 'Aerosmith - Dream On', 'Fleetwood Mac - Go Your Own Way'], ['IWanna', 'Blue', 'Aerosmith', 'Fleetwood'],'classic-rock-radio','classic-rock-form');

var pop = new Song('Safe And Sound', 'audio/clip_safe_and_sound.mp3', ['Capital Cities - Safe And Sound', 'The Weeknd - Staryboy', 'Alessia Cara - Scars to Your Beautiful', 'Shawn Mendes - Treat You Better'], ['Safe', 'The', 'Alessia', 'Shawn'],'pop-radio','pop-form');

var rap = new Song('Push It', 'audio/Salt-N-Pepa-Push-It-clip.mp3', ['Salt-N-Pepa - Push It', 'Bell Biv Devoe - Poison', 'Drake - Hotline Bling', 'Vanilla Ice - Ice Ice Baby'], ['Push', 'Bell', 'Poison', 'Drake'],'rap-radio','rap-form');

var country = new Song('Anything But Mine', 'audio/clip_anything_but_mine.mp3', ['Kenny Chesney - Anything But Mine','Taylor Swift - Bad Blood', 'Garth Brooks - Friends In Low Places','Luke Bryan - Country Girl (Shake It For Me)'], ['Anything', 'Taylor', 'Garth', 'Luke'],'country-radio','country-form');

var edm = new Song('One More Time', 'audio/edm-clip-daft-punk.mp3', ['Daft Punk - One More Time','The Chainsmokers - Closer','Daft Punk - Get Lucky','Major Lazer & DJ Snake - Lean On'], ['Daft', 'The', 'Daf', 'Major'],'edm-radio','edm-form');

var jazz = new Song('What a Wonderful World', 'audio/Louis-Armstrong-What-a-Wonderful-World.mp3', ['Louis Armstrong - What a Wonderful World','Getz and Gilberto - The Girl From Ipanema','Mingus Ah Um - Goodbye, Pork Pie Hat','That\'s All - Mack the Knife'], ['What', 'Getz', 'Mingus', 'That'],'jazz-radio','jazz-form');
//Global answerArr
var correctSongs = [];
correctSongs.push(rock.answers[0]);
correctSongs.push(pop.answers[0]);
correctSongs.push(rap.answers[0]);
correctSongs.push(country.answers[0]);
correctSongs.push(edm.answers[0]);
correctSongs.push(jazz.answers[0]);

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

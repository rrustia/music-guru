'use strict';

if (!(localStorage.getItem('counter'))) {
  localStorage.setItem('counter', 1);
} else {
  localStorage.setItem('counter', Number(localStorage.getItem('counter')) + 1);
}

//Implements name from input functionailty
if (document.getElementById('name-form')) {
  var formEl = document.getElementById('name-form').addEventListener('submit', getName ,false);
}

//Castro navigated, Eve drove on 2nd half of getName function
function getName(){
  event.preventDefault();
  event.stopPropagation();
  var userName = event.target.name.value;
  localStorage.setItem('name',userName);
  var postSubmitEl = document.getElementById('post-submit-mess');
  var text = document.createTextNode('Thank you, ' + userName + ' please select a genre that you enjoy from above to test your inner Music Guru!');
  var pEl = document.createElement('p');
  pEl.appendChild(text);
  postSubmitEl.appendChild(pEl);
  document.location.href = 'about.html';
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
  this.name = name; // name of the song
  this.path = path; // filepath of the song
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
    // if tempNum is not inside the randomFourNumbers array then push it inside randomFourNumbers[]
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
  for (var i = 0; i < randomList.length; i++) {
    var listEl = document.createElement('input');
    // set attribute of the Input tags that will be created.
    // randomList[i] will make sure the choices are random
    listEl.setAttribute('id', song.id[randomList[i]]);
    listEl.setAttribute('value', song.answers[randomList[i]]);
    listEl.setAttribute('type', 'radio');
    listEl.setAttribute('name', 'songName');
    listEl.setAttribute('checked','');
    listEl.setAttribute('class','tracks');
    genreEl.appendChild(listEl);
    // use JQuery "after" method to add text after the "input" tag
    $('input#' + song.id[randomList[i]]).after(song.answers[randomList[i]] + '<br>');
  };
  // if a particular form ID is present on the page then execute the particular listener
  if (document.getElementById(song.formId)){
    var formEl = document.getElementById(song.formId).addEventListener('submit', getInput, false);;
  }
};

// Display the audio controls by hooking into tag with ID contained song.idTwo
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
// initial data for song objects that includes song name, filepath, and possible answers
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

// // works with a counter in localStorage
function setPage() {
  switch (localStorage.getItem('counter')) {
  case '1':
    document.getElementsByTagName('body')[0].setAttribute('id', 'country-background');
    document.getElementsByTagName('div')[1].setAttribute('id', 'country-radio');
    document.getElementsByTagName('form')[0].setAttribute('id', 'country-form');
    document.getElementsByTagName('div')[2].setAttribute('id', 'country-question');
    break;
  case '2':
    document.getElementsByTagName('body')[0].setAttribute('id', 'classic-rock-background');
    document.getElementsByTagName('div')[1].setAttribute('id', 'classic-rock-radio');
    document.getElementsByTagName('form')[0].setAttribute('id', 'classic-rock-form');
    document.getElementsByTagName('div')[2].setAttribute('id', 'classic-rock-question');
    break;
  case '3':
    document.getElementsByTagName('body')[0].setAttribute('id', 'edm-background');
    document.getElementsByTagName('div')[1].setAttribute('id', 'edm-radio');
    document.getElementsByTagName('form')[0].setAttribute('id', 'edm-form');
    document.getElementsByTagName('div')[2].setAttribute('id', 'edm-question');
    break;
  case '4':
    document.getElementsByTagName('body')[0].setAttribute('id', 'jazz-background');
    document.getElementsByTagName('div')[1].setAttribute('id', 'jazz-radio');
    document.getElementsByTagName('form')[0].setAttribute('id', 'jazz-form');
    document.getElementsByTagName('div')[2].setAttribute('id', 'jazz-question');
    break;
  case '5':
    document.getElementsByTagName('body')[0].setAttribute('id', 'pop-background');
    document.getElementsByTagName('div')[1].setAttribute('id', 'pop-radio');
    document.getElementsByTagName('form')[0].setAttribute('id', 'pop-form');
    document.getElementsByTagName('div')[2].setAttribute('id', 'pop-question');
    break;
  case '6':
    document.getElementsByTagName('body')[0].setAttribute('id', 'rap-background');
    document.getElementsByTagName('div')[1].setAttribute('id', 'rap-radio');
    document.getElementsByTagName('form')[0].setAttribute('id', 'rap-form');
    document.getElementsByTagName('div')[2].setAttribute('id', 'rap-question');
    break;
  default: break;
  };
}

function determineGenre () {
// this boolean test will determine which genre page is currently loaded and render the appropriate song object
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

setPage(); // using localStorage to index the correct type of genre html to be rendered;
// localStorage counter will be incremented by page transition.

// initiate genre when page is loaded.
determineGenre ();

'use strict';

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
        track = trackArr[i];
        break;
      }
    }
    isCorrect(track);
  }
}
//Helper function determines if user choice is correct
function isCorrect(song){
  console.log('Inside of isCorrect: ' + song);
  //List gets next song
  //console.log('Inside of isCorrect (nextPageCount): ' + nextPageCount);
  getNextPage(song.value);
  if(correctSongs.includes(song.value)){
    //Redirects to next genre page
    alert('Correct.');
    document.location.href = getNextPage(song.value);;
  } else {
    //Redirects to next genre page
    //console.log('Inside of isCorrect: ' + nextPageCount);
    alert('Incorrect.');
    // console.log('Inside of isCorrect: ' + nextPageCount);
    if(getNextPage(song.value) === 'about.html'){
      document.location.href = getNextPage(song.value);
    } else {
      document.location.href = getNextPage(song.value);
    }
  }
}
//Helper function determines next song
function getNextPage(song){
  var url = '';
  //Global var nextPageCount - increments when user gets to next page
  for (var i = 0; i < listOfSongs.length; i++){
    console.log('Inside of getNextPage: ' + song);
    if(listOfSongs[i].answers.includes(song)){
      if(i !== listOfSongs.length - 1){
        console.log('Next song path: ' + listOfSongs[i + 1].sitePath);
        url = listOfSongs[i + 1].sitePath;
        return url;
        break;
      } else {
        return 'about.html';
        console.log('Inside of getNextPage: Last page');
      }
    }
  }
}

// song object constructor
function Song(name, path, answers, id, idTwo, formId, sitePath) {
  this.name = name; // name of the song
  this.path = path; // filepath of the song
  this.answers = answers; //array of 4 answer strings
  this.id = id; //array of 4 ID strings
  this.idTwo = idTwo; //id for audio controls
  this.formId = formId; //form id for each genre
  this.sitePath = sitePath; //.html file for each genre
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
  for (var i = 0; i < 4; i++) {
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
var rock = new Song('I Wanna Rock And Roll All Night','audio/classic-rock-kiss.mp3',['"I Wanna Rock And Roll All Night" by Kiss', '"(Don\'t) Fear the Reaper" by Blue Oyster Cult', '"Dream On" by Aerosmith', '"Go Your Own Way" by Fleetwood Mac'], ['IWanna', 'Blue', 'Aerosmith', 'Fleetwood'],'classic-rock-radio','classic-rock-form','classic-rock.html');
//console.log('After rock instance: ' + rock.sitePath);

var pop = new Song('Safe And Sound', 'audio/clip_safe_and_sound.mp3', ['"Safe And Sound" by Capital Cities', '"Starboy" by The Weeknd', '"Scars to Your Beautiful" by Alessia Cara', '"Treat You Better" by Shawn Mendes'], ['Safe', 'The', 'Alessia', 'Shawn'],'pop-radio','pop-form','pop.html');

var rap = new Song('Push It', 'audio/Salt-N-Pepa-Push-It-clip.mp3', ['"Push It" by Salt-N-Pepa', '"Poison" by Bell Biv Devoe', '"Hotline Bling" by Drake', '"Ice Ice Baby" by Vanilla Ice'], ['Push', 'Bell', 'Poison', 'Drake'],'rap-radio','rap-form','rap.html');

var country = new Song('Anything But Mine', 'audio/clip_anything_but_mine.mp3', ['"Anything But Mine" by Kenny Chesney','"Bad Blood" by Taylor Swift', '"Friends In Low Places" by Garth Brooks','"Country Girl (Shake It For Me)" by Luke Bryan'], ['Anything', 'Taylor', 'Garth', 'Luke'],'country-radio','country-form','country.html');

var edm = new Song('One More Time', 'audio/edm-clip-daft-punk.mp3', ['"One More Time" by Daft Punk','"Closer" by The Chainsmokers','"Get Lucky" by Daft Punk','"Lean On" by Major Lazer & DJ Snake'], ['Daft', 'The', 'Daf', 'Major'],'edm-radio','edm-form','edm.html');

var jazz = new Song('What a Wonderful World', 'audio/Louis-Armstrong-What-a-Wonderful-World.mp3', ['"What a Wonderful World" by Louis Armstrong','"The Girl From Ipanema" by Getz and Gilberto','"Goodbye, Pork Pie Hat" by Mingus Ah Um','That\'s All - Mack the Knife'], ['What', 'Getz', 'Mingus', 'That'],'jazz-radio','jazz-form','jazz.html');
//Global answerArr
var correctSongs = [];
correctSongs.push(country.answers[0]);
correctSongs.push(rock.answers[0]);
correctSongs.push(edm.answers[0]);
correctSongs.push(pop.answers[0]);
correctSongs.push(jazz.answers[0]);
correctSongs.push(rap.answers[0]);

var listOfSongs = [];
listOfSongs.push(country);
listOfSongs.push(rock);
listOfSongs.push(edm);
listOfSongs.push(pop);
listOfSongs.push(jazz);
listOfSongs.push(rap);

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

// initiate genre when page is loaded.
determineGenre ();

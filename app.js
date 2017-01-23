'use strict';

var audio = new Audio('audio/clip_anything_but_mine.mp3');
audio.play();

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

'use strict';
//Displays name (from input) on each genre page
if(localStorage.length > 0) {
  console.log('Retrieving from localStorage: ' + localStorage.getItem('name'));
  var nameContainerEl = document.getElementById('name-container');
  console.log('Name.html location for p element: ' + nameContainerEl );
  var paraEl = document.createElement('p');
  //Adds id for styling purposes
  p.setAttribute('id','persistent-name');
  //Create text node
  var text = document.createTextNode(localStorage.getItem('name'));
  paraEl.appendChild(text);
  nameContainerEl.appendChild(paraEl);
}

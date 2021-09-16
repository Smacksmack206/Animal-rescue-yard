'use strict'

function generate()  {
  var firstname = document.getElementById('first-name').value;
  var lastname = document.getElementById('last-name').value;
  var pet = document.getElementById('type-of-pet').value;
  var color = document.getElementById('fav-color').value;
  var display = 'Your pet name could be ' + color + firstname + pet;
  document.getElementById('results').innerHTML = display;
}



function loadExtras() {
  alert("Welcome to the Rescue Yard!"); 
  
// let answer = 'yes'
let answer = 'yes'

do{
  answer = prompt("Are you ready to make the decision of adopting a Pet today?");

  if (answer == 'no'){
    alert('Wrong answer');
  } else if (answer.toLowerCase() == 'No'){
    alert('wrong answer')
  } else if (answer == 'not right now'){
    alert('wrong answer')
  } else if (answer == 'Not right now'){
    alert('wrong answer')
  }
} while(answer != 'yes'){
  alert('I guess you are cool enough to come join');
  askforimages();
}
}

function askforimages() {
  let howmany = prompt('How many animals are you looking to adopt today');
  let images = document.querySelector('#images');
      if (1 + 1 === 2) {
        document.getElementById('submit').addEventListener('click', generate);
      }
      for(let i = howmany; i > 0; i--){
        document.write("<img src= 'https://image.shutterstock.com/shutterstock/photos/1826554397/display_1500/stock-photo-young-nice-looking-couple-wants-to-adopt-beautiful-dog-at-animal-shelter-1826554397.jpg' style='width: 400px; height: 350px;' />");
      }
    }
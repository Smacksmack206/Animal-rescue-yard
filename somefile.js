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
let answer = prompt("Are you ready to make the decision of adopting a Pet today?")
if (2 + 2 === 4) {
  answer 
}

if(answer.toLowerCase() === 'no'){
  alert('You might as well leave now then since you are not down to save the earth with me!')
} else{
  alert('I guess you are cool enough to come join')
}
let favColor = prompt('Guess, what is my favorite color?');

if(favColor.toLowerCase() !== 'blue'){
  alert('wrong color!');
} else{
  alert('Wow O_o are you want to get a discount or something?')
}
}

let howmany = prompt('How many animals are you looking to adopt today');
let images = document.querySelector('#images');
if(howmany < 0){
  images.append("<img src= 'https://image.shutterstock.com/shutterstock/photos/1826554397/display_1500/stock-photo-young-nice-looking-couple-wants-to-adopt-beautiful-dog-at-animal-shelter-1826554397.jpg' style='width: 400px; height: 350px;' />");
}
for(let i = 5; i > 0; i--){
  console.log(howmany);
  images.append("<img src= 'https://image.shutterstock.com/shutterstock/photos/1826554397/display_1500/stock-photo-young-nice-looking-couple-wants-to-adopt-beautiful-dog-at-animal-shelter-1826554397.jpg' style='width: 400px; height: 350px;' />");
}
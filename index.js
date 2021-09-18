function randomNumber(){
  return Math.floor(Math.random() * 6) + 1;
}

function diceImg(classs, n){
  document.querySelector(classs).setAttribute("src", "images/dice" + n + ".png");
}

function displayResults(result){
  document.querySelector("h1").innerText = result;
}



var dice1 = randomNumber();
diceImg(".img1",dice1);

var dice2 = randomNumber();
diceImg(".img2",dice2);

if(dice1 > dice2){
  displayResults("Player 1 Wins!") ;
}
else if(dice1 < dice2){
  displayResults("Player 2 Wins!") ;
}
else{
  displayResults("Draw");
}

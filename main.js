function randomNumber(){
  return Math.floor(Math.random()*6) + 1;
}

function diceImageSource(classs, n){
  document.querySelector(classs).setAttribute("src","images/dice" + n + ".png");
}

function results(result){
document.querySelector("h1").innerHTML = result;
}

var dice1 = randomNumber();
diceImageSource(".img1",dice1);

var dice2 = randomNumber();
diceImageSource(".img2",dice2);

if(dice1 > dice2){
  results("Player 1 Wins!") ;
}
else if(dice1 < dice2){
  results("Player 2 Wins!") ;
}
else{
  results("Draw");
}

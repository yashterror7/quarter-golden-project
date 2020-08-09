var form,player,game;
var ball,playerPaddle,ComputerPaddle,edges;
var compScore=0,Playerscore=0;
var gameState =0,PlayerCount ;
var database;
function preload(){

}


function setup() {
  createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  background(255,255,255);  
  if(playerCount === 1){
    game.update(0);
  }
  if(gameState === 1){
    game.play();
  }
  if(gameState===2) {
    game.end();
  }
}
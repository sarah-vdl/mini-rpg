
const canvasWidth = 800 // remember this is also in html
const canvasHeight = 500

var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

function drawSquare(x, y, size) {
  ctx.fillStyle = "rgb(200, 0, 0)";
  ctx.fillRect(x, y, size, size);
}

function drawAll(gameData) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  // will need to know background / animations / only visuals
  drawSquare(gameData.player.x, gameData.player.y, 50);
}

function setup() {
  // create game objects
  var player = {
    x: canvasWidth / 2,
    y: canvasHeight / 2
  };
  var gameData = new Object();
  gameData.player = player;
  return gameData;
}

function gameLoop(gameData) {
  //step1: check for user input
  //step2: game logic (moving player, checking for any game states)
  //step3: draw screen
}

function main() {
  var gameData = setup();
  // while (true) {
  //   gameLoop();
  // }
}

main();

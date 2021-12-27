
const canvasWidth = 800 // remember this is also in html
const canvasHeight = 500

var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var keyStates = {
  up: false,
  down: false,
  left: false,
  right: false
};

function checkInputs(gameData) {
  if (keyStates.left) {
    gameData.player.x -= gameData.player.speed
  }
  if (keyStates.right) {
    gameData.player.x += gameData.player.speed
  }
  if (keyStates.down) {
    gameData.player.y += gameData.player.speed
  }
  if (keyStates.up) {
    gameData.player.y -= gameData.player.speed
  }
  return gameData
}

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
  // add keyboard events / make keeb event listeners
  // create game objects
  var player = {
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    speed: 3 // pixels per frame
  };
  document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
         case 37:
            keyStates.left = true;
            break;
         case 38:
            keyStates.up = true;
            break;
         case 39:
            keyStates.right = true;
            break;
         case 40:
            keyStates.down = true;
            break;
      }
  })
  document.addEventListener('keyup', function(event) {
    switch (event.keyCode) {
         case 37:
            keyStates.left = false;
            break;
         case 38:
            keyStates.up = false;
            break;
         case 39:
            keyStates.right = false;
            break;
         case 40:
            keyStates.down = false;
            break;
      }
  })
  var gameData = new Object();
  gameData.player = player;
  return gameData;
}

function gameLoop(gameData) {
  //step1: check for user input
  gameData = checkInputs(gameData)
  //step2: game logic (moving player, checking for any game states)
  //step3: draw screen
  drawAll(gameData);
  window.requestAnimationFrame(function() {
    gameLoop(gameData)
  });
}

function main() {
  var gameData = setup();
  window.requestAnimationFrame(function() {
    gameLoop(gameData)
  });
}

main();


//def function gets called when each button called

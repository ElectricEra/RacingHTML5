var canvas, canvasContext;

var car1 = new carClass();
var car2 = new carClass();

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0,0,canvas.width,canvas.height,"black");
	
	loadImages();
}

function Start() {
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	setupInput();

	loadLevel(levelOne);
}
function loadLevel(level) {
	trackGrid = level.slice();
	car1.reset(car1Pic, "Lightning");
	car2.reset(car2Pic, "Fast-o-rider");
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	car1.move();
	car2.move();
}

function clearScreen() {
	colorRect(0,0, canvas.width,canvas.height, 'black');
}

function drawAll() {
	//clearScreen();
	drawTracks();
	car1.draw();
	car2.draw();
}
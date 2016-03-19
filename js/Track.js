const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;
/*var trackGrid =
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		1, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1,
		1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
		1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1,
		1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1,
		1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1,
		1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1,
		1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1,
		1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1,
		1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
		1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1,
		1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
		1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];*/
var levelOne =
   [4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
    4, 1, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 1, 1,
    1, 2, 2, 0, 0, 1, 1, 5, 0, 0, 0, 0, 5, 1, 1, 0, 0, 0, 0, 1,
    1, 0, 6, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 6, 0, 1,
    1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 1, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 1, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 1, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1,
    1, 0, 6, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 6, 0, 1,
    1, 0, 0, 0, 0, 1, 1, 5, 0, 0, 0, 0, 5, 1, 1, 0, 0, 0, 0, 1,
    1, 1, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 1, 1,
    1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var trackGrid = [];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYER = 2;
const TRACK_FINISH = 3;
const TRACK_TREES = 4;
const TRACK_GRASS = 5;
const TRACK_OIL = 6;

function tileTypeAtColRow(col, row) {
  	if(col >= 0 && col < TRACK_COLS &&
    	row >= 0 && row < TRACK_ROWS) {
     	var trackIndexUnderCoord = rowColToArrayIndex(col, row);
     	return trackGrid[trackIndexUnderCoord];
  	} else {
    	return TRACK_WALL;
  	}
}

function carTrackHandling(someCar) {
  	var carTrackCol = Math.floor(someCar.x / TRACK_W);
  	var carTrackRow = Math.floor(someCar.y / TRACK_H);
  	var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

 	if(carTrackCol >= 0 && carTrackCol < TRACK_COLS && carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
		var tileType = tileTypeAtColRow( carTrackCol,carTrackRow );

    if (tileType == TRACK_FINISH) {
        console.log(someCar.name + " wins!");
        loadLevel(levelOne);
		} else if (tileType == TRACK_GRASS) {
        someCar.maxSpeedForward = 1.5;
        someCar.maxSpeedBackward = -1.5;
    } else if (tileType == TRACK_OIL) {
        someCar.turnRate = 0;
    } else if (tileType != TRACK_ROAD) {
        someCar.x -= someCar.speed * Math.cos(someCar.ang);
        someCar.y -= someCar.speed * Math.sin(someCar.ang);
        someCar.speed*=-0.3;
        //someCar.speed = 0;
    } else if (tileType == TRACK_ROAD) {
      someCar.maxSpeedForward = 14;
      someCar.maxSpeedBackward = -7;
      someCar.turnRate = TURN_RATE;
    }
  }
} 


function rowColToArrayIndex(col, row) {
	return col + TRACK_COLS * row;
}

function drawTracks() {

    var arrayIndex=0;
    var drawTileX=0;
    var drawTileY=0;
  	for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
    	for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
        var currentTile = trackGrid[arrayIndex];
        var imgToDraw = trackPicks[currentTile];
        canvasContext.drawImage(imgToDraw,drawTileX,drawTileY);
        arrayIndex++;
        drawTileX+=TRACK_W;    	   	
    	}
      drawTileX=0;
      drawTileY+=TRACK_H;
  	} 
}


const GROUNDSPEED_DECAY_MULTIPLYER = 0.98;
const DRIVE_POWER = 0.3;
const REVERSE_POWER = 0.6;
const TURN_RATE = 0.1;
const MIN_SPEED_TO_TURN = 0.1;

function carClass() {
	this.x = 75;
	this.y = 75;
	this.ang = Math.PI/2;
	this.speed = 0;
	this.maxSpeedForward = 14;
	this.maxSpeedBackward = -7;
	this.turnRate = TURN_RATE;

	this.name = "Unnamed car";
	this.carPic;

	this.keyHeld_Gas = false;
	this.keyHeld_Reverse = false;
	this.keyHeld_TurnLeft = false;
	this.keyHeld_TurnRight = false;

	this.controlKey_left;
	this.controlKey_up;
	this.controlKey_right;
	this.controlKey_down;

	this.assignButtons = function (leftButton,upButton,rightButton,downButton) {
		this.controlKey_left = leftButton;
		this.controlKey_up = upButton;
		this.controlKey_right = rightButton;
		this.controlKey_down = downButton;
	}

	this.reset = function(carTemp,carName) {
		this.name = carName;
		this.carPic = carTemp;
		this.speed = 0;
		this.ang = Math.PI/2;

		for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
			for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {

				var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 

				if(trackGrid[arrayIndex] == TRACK_PLAYER) {
					trackGrid[arrayIndex] = TRACK_ROAD;
					this.x = eachCol * TRACK_W + TRACK_W/2;
					this.y = eachRow * TRACK_H + TRACK_H/2;
					return;
				}
			}
		}
	}


	this.move = function() {
		this.speed *= GROUNDSPEED_DECAY_MULTIPLYER;

		if (this.keyHeld_Gas) {
			this.speed += DRIVE_POWER;
			if (this.speed > this.maxSpeedForward) {
				this.speed = this.maxSpeedForward;
			}
		}
		if (this.keyHeld_Reverse) {
			this.speed -= REVERSE_POWER;
			if (this.speed < this.maxSpeedBackward) {
				this.speed = this.maxSpeedBackward;
			}
		}
		if (Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
			if (this.keyHeld_TurnLeft) {
				this.ang -= this.turnRate;
			}
			if (this.keyHeld_TurnRight) {
				this.ang += this.turnRate;
			}
		}

		if ( Math.abs(this.speed) < 0.01) {
			this.speed = 0;
		}

		this.x += this.speed * Math.cos(this.ang);
		this.y += this.speed * Math.sin(this.ang);

		carTrackHandling(this);
	}

	this.draw = function () {
		drawBitmapCenteredWithRotation(this.carPic,this.x,this.y,this.ang);
		//colorCircle(this.x,this.y,2,"yellow");
		var a = this.x-this.carPic.width/2;
		var b = this.y+this.carPic.height/2;
		//colorRect(this.x-this.carPic.width/8,this.y-this.carPic.height/8,this.carPic.width/4, this.carPic.height/4,this.ang, "yellow");
		//console.log(a+" "+b+" "+ this.carPic.width+" "+ this.carPic.height+" "+ "yellow")
		//colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor)
	}
}

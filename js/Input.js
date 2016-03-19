const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;

const KEY_A = 65;
const KEY_W = 87;
const KEY_D = 68;
const KEY_S = 83;

var mouseX = 0;
var mouseY = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

	car1.assignButtons(KEY_LEFT,KEY_UP,KEY_RIGHT,KEY_DOWN);
	car2.assignButtons(KEY_A,KEY_W,KEY_D,KEY_S);
}

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;
}

function keySet(keyEvent,carSpecify,setState) {
	if (keyEvent.keyCode == carSpecify.controlKey_left) {
		carSpecify.keyHeld_TurnLeft = setState;
	}
	if (keyEvent.keyCode == carSpecify.controlKey_right) {
		carSpecify.keyHeld_TurnRight = setState;
	}
	if (keyEvent.keyCode == carSpecify.controlKey_up) {
		carSpecify.keyHeld_Gas = setState;
	}
	if (keyEvent.keyCode == carSpecify.controlKey_down) {
		carSpecify.keyHeld_Reverse = setState;
	}
}
function keyPressed(evt) {
	keySet(evt,car1,true);
	keySet(evt,car2,true);
}

function keyReleased(evt) {
	keySet(evt,car1,false);
	keySet(evt,car2,false);
}

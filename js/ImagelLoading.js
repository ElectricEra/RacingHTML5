var car1Pic = document.createElement("img");
var car2Pic = document.createElement("img");

var trackPicks = [];

var AllPics = 3;

function CountAndLoad() {
	AllPics--;
	if (AllPics == 0) {
		Start();
	}
}

function beginLoadingImages(img,path) {
	img.onload = CountAndLoad();
	img.src = path;
}

function loadImgForTrack(trackCode,fileName) {
	trackPicks[trackCode] = document.createElement("img");
	beginLoadingImages(trackPicks[trackCode],fileName);
}

function loadImages() {
	var imageList = [
		{varName:car1Pic , fileDir:"art/car1.png"},
		{varName:car2Pic , fileDir:"art/car2.png"},
		{trackType:TRACK_ROAD , fileDir:"art/road.png"},
		{trackType:TRACK_WALL , fileDir:"art/crate.png"},
		{trackType:TRACK_FINISH , fileDir:"art/finish.png"},
		{trackType:TRACK_TREES , fileDir:"art/trees.png"},
		{trackType:TRACK_GRASS , fileDir:"art/grassland.png"},
		{trackType:TRACK_OIL , fileDir:"art/oilSpill.png"}
		];
	for (var i=0; i< imageList.length; i++) {
		if (imageList[i].varName != undefined) {
			beginLoadingImages(imageList[i].varName,imageList[i].fileDir);
		} else {
			loadImgForTrack(imageList[i].trackType,imageList[i].fileDir);
		}
	}
}
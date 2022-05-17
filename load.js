function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0,0,0,0);
	loadAppFont();
	loadImages();
  	grid = width/10;
  	ShadowOffset = grid/10;
  	ScrollFactor = 0;
  	selectedClass = "Hunter";
  	selectedRaid = "dsc";
  	selectedMode = "lootTable"
  	menuOpen = false;
 	MaxScrollDistance = -1;
	const script = document.createElement('script');
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) script.src = 'https://raidresources.github.io/app/App/mobile.js';
	else script.src = 'https://raidresources.github.io/app/App/desktop.js';
	document.body.appendChild(script);
	remove();
}

function loadImages(){

	textAlign(CENTER,CENTER);
	background(255,255,255);
	text("Loading Images : squared2.png",width/2,height/2);
	bgimg = loadImage("https://raidresources.github.io/resources/2cb0b10bb2c3eaf5b018d0003e13c1fcd7f71dda81cf75db46259789b75c698b.png");

	background(255,255,255);
	console.log("Loading Images : f189251cfb9815df1f3f6063867d0957.jpg");
	text("Loading Images : f189251cfb9815df1f3f6063867d0957.jpg",width/2,height/2);
  	succession = loadImage("https://www.bungie.net/common/destiny2_content/icons/f189251cfb9815df1f3f6063867d0957.jpg");

  	background(255,255,255);
  	console.log("Loading Images : 3c02f8982f3f444a84a961572669213b.jpg");
	text("Loading Images : 3c02f8982f3f444a84a961572669213b.jpg",width/2,height/2);
	trustee = loadImage("https://www.bungie.net/common/destiny2_content/icons/3c02f8982f3f444a84a961572669213b.jpg");

	background(255,255,255);
	console.log("Loading Images : c1422e3664478a35b960bdb801001260.jpg");
	text("Loading Images : c1422e3664478a35b960bdb801001260.jpg",width/2,height/2);
 	legacysOathCloak  = loadImage("https://www.bungie.net/common/destiny2_content/icons/c1422e3664478a35b960bdb801001260.jpg");

 	background(255,255,255);
 	console.log("Loading Images : f1fdb2cbbbebc0bdcc38c7b02c1f9b36.jpg");
	text("Loading Images : f1fdb2cbbbebc0bdcc38c7b02c1f9b36.jpg",width/2,height/2);
	legacysOathStrides = loadImage("https://www.bungie.net/common/destiny2_content/icons/f1fdb2cbbbebc0bdcc38c7b02c1f9b36.jpg");

	background(255,255,255);
	console.log("Loading Images : f4bac3f5c3a735dd0788539600fb6c04.jpg");
	text("Loading Images : f4bac3f5c3a735dd0788539600fb6c04.jpg",width/2,height/2);
	legacysOathGrips = loadImage("https://www.bungie.net/common/destiny2_content/icons/f4bac3f5c3a735dd0788539600fb6c04.jpg");

	background(255,255,255);
	console.log("Loading Images : 7cc19cbefc988499b0faac30ea1fd192.jpg");
	text("Loading Images : 7cc19cbefc988499b0faac30ea1fd192.jpg",width/2,height/2);
	legacysOathBond = loadImage("https://www.bungie.net/common/destiny2_content/icons/7cc19cbefc988499b0faac30ea1fd192.jpg");

	background(255,255,255);
	console.log("Loading Images : 434ddd1074f935e0a975ec8929efd8be.jpg");
	text("Loading Images : 434ddd1074f935e0a975ec8929efd8be.jpg",width/2,height/2);
	legacysOathBoots = loadImage("https://www.bungie.net/common/destiny2_content/icons/434ddd1074f935e0a975ec8929efd8be.jpg");

	background(255,255,255);
	console.log("Loading Images : a7092ad81df38b5dd568d4176cee3001.jpg");
	text("Loading Images : a7092ad81df38b5dd568d4176cee3001.jpg",width/2,height/2);
	legacysOathGloves = loadImage("https://www.bungie.net/common/destiny2_content/icons/a7092ad81df38b5dd568d4176cee3001.jpg");

	background(255,255,255);
	console.log("Loading Images : 142e7b6946a3b29386931d5c613a5b9d.jpg");
	text("Loading Images : 142e7b6946a3b29386931d5c613a5b9d.jpg",width/2,height/2);
 	legacysOathMark = loadImage("https://www.bungie.net/common/destiny2_content/icons/142e7b6946a3b29386931d5c613a5b9d.jpg");

 	background(255,255,255);
 	console.log("Loading Images : c02578408e785b7e48dd4bc8486b346f.jpg");
	text("Loading Images : c02578408e785b7e48dd4bc8486b346f.jpg",width/2,height/2);
	legacysOathGreaves = loadImage("https://www.bungie.net/common/destiny2_content/icons/c02578408e785b7e48dd4bc8486b346f.jpg");

	background(255,255,255);
	console.log("Loading Images : 55947464ab5dc1974beec1c77d27ba56.jpg");
	text("Loading Images : 55947464ab5dc1974beec1c77d27ba56.jpg",width/2,height/2);
 	legacysOathGauntlets = loadImage("https://www.bungie.net/common/destiny2_content/icons/55947464ab5dc1974beec1c77d27ba56.jpg");
  
}

function loadAppFont(){

	textAlign(CENTER,CENTER);
  	noStroke();
  	textSize(25);

  	background(255,255,255);
  	console.log("Loading Fonts : NeueHaasDisplayBold.ttf");
	text("Loading Fonts : NeueHaasDisplayBold.ttf",width/2,height/2);
	headerFontBold = loadFont("https://raidresources.github.io/resources/560e2cc82a90f74f7201df6e1eaf7d92d055de37da365859a803a4c9cea92b48.ttf");

	background(255,255,255);
	console.log("Loading Fonts : NeueHaasDisplayRoman.ttf");
	text("Loading Fonts : NeueHaasDisplayRoman.ttf",width/2,height/2);
	headerFont = loadFont("https://raidresources.github.io/resources/a4538689f69b3adf96e402d631d8d051c2135336172e613c524520febcfe66f2.ttf");

	background(255,255,255);
	console.log("Loading Fonts : AGaramondPro-Regular.otf");
	text("Loading Fonts : AGaramondPro-Regular.otf",width/2,height/2);
	bodyFont = loadFont("https://raidresources.github.io/resources/8aebfc902818e1baa7e5242b4b6560b576c3e259886eb1f61665749d9f0170c8.otf");

	background(255,255,255);
	console.log("Loading Fonts : Cromwell HPLHS.ttf");
	text("Loading Fonts : Cromwell HPLHS.ttf",width/2,height/2);
	accentFont = loadFont("https://raidresources.github.io/resources/6bac3781d1d360517848518ed3d32985.ttf");
}
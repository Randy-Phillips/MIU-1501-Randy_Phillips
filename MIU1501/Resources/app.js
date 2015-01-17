//	Set Background Color
Titanium.UI.setBackgroundColor('#000');

//	Main Window
var mainWin = Titanium.UI.createWindow({  
    title:'About Me',
    backgroundColor:'#fff'
});

//	Main Window Label
var winLab = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var myNav = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

//	Load JSON file
var loadFile = require('json');


mainWin.add(winLab);
myNav.open();



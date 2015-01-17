var currentWindow = Ti.UI.currentWindow;


//	JSON Data

var qaList = 

	{"qna":  [
		{question: "q 1" , answer:"answer one"},
		{question: "q 1" , answer:"answer one"},
		{question: "q 1" , answer:"answer one"},
		{question: "q 1" , answer:"answer one"},
		{question: "q 1" , answer:"answer one"},
		{question: "q 1" , answer:"answer one"},
		{question: "q 1" , answer:"answer one"},
		{question: "q 1" , answer:"answer one"},
		{question: "q 1" , answer:"answer one"},
		{question: "q 1" , answer:"answer one"},
		{question: "q 1" , answer:"answer one"},
			]
		
	};



var newTable = Ti.UI.createTableView({
	//ßbackgroundColor: "E83F3F",
	top: 20,
	bottom: 20,
	zIndex:10,
	left: 0,
	right: 0,
});


// My Question Page
var myDetails = function(){
	

	var detailWindow = Ti.UI.createWindow({
		//title: this.question,
		backgroundColor: "f5f5f5"
		
	});
	
	var newNav = Ti.UI.iOS.createNavigationWindow({
		window: detailWindow
	});
		
	
	var detailView = Ti.UI.createView ({
		backgroundColor: "E3E6E4",
		top: 20,
		right: 10,
		left: 10,
		bottom: 10,
		zIndex: 1
});

var answerText = Ti.UI.createLabel({
	text: this.answer,
	font:{fontSize:16,fontFamily:"Arial"},
	top: 240,	
	left: 20,
	right: 20,
	zIndex: 10
});	

var questionText = Ti.UI.createLabel({
	text: this.question,
	font:{fontSize:24,fontFamily:"Arial"},
	top:50,
	left: 20,
	right: 20,
	zIndex: 10
});	

var closeButton = Ti.UI.createLabel({
	text: "Go Back",
	backgroundColor: "#333",
	color: "#fff",
	height: 50,
	font:{fontSize:12,fontFamily:"Arial"},
	width: "100%",
	bottom: 0,
	textAlign: "center",
	zIndex: 8
});

var closeWindow = function() {
	detailWindow.close();
};


closeButton.addEventListener("click", closeWindow);

detailView.add(questionText);
detailWindow.add(detailView,answerText,questionText, closeButton);

myNav.openWindow(detailWindow);

};



	



var questionSection = Ti.UI.createTableViewSection ({
	headerTitle: "Questions About Me",
//	footerTitle: "",
});

for (var i=0, j=qaList.qna.length; i<j; i++) {
	var questRow = Ti.UI.createTableViewRow({
		title: qaList.qna[i].question,
		question: qaList.qna[i].question,
		answer:  qaList.qna[i].answer,
		hasChild: true
	});
	
	questionSection.add(questRow);
	questRow.addEventListener("click", myDetails);
}


var jsonSections = [questionSection];

newTable.setData(jsonSections);

mainWin.add(newTable);

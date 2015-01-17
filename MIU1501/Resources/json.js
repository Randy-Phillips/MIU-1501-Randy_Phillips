var currentWindow = Ti.UI.currentWindow;


//	JSON Data

var qaList = 

	{"qna":  [
		{question: "What is my name?" , answer:"My name is Randy Phillips!!"},
		{question: "What is my chat user name, including the host?" , answer:"I am assuming this question is in regards to what alias I go by online and that would be Attackruby. I have used it since probably 2003ish when I started playing video games and have not changed it!"},
		{question: "What Time Zone do I Reside?" , answer:"EST. I am currently from Ohio where it's cold! I wish I could be on campus right now enjoying the weather. :)"},
		{question: "Why am I in the Mobile Development Program?" , answer:"Because I love mobile! I took the class originally just to get myself into programming. I have/had more desire programming application for the windows platform but in general I just greatly enjoy programming."},
		{question: "How comfortable am I with javascript?" , answer:"I feel decently comforable. I love mathmatics so the logical part of programming is fun for me."},
		{question: "How comfortable am I with Titanium?" , answer:"About the same as Javascript. I feel that I have a good understanding of the basics and feel comfortable with Titanium."},
		{question: "What is my favorite Color?" , answer:"My favorite color would have to be red. Especially ruby red."},
		{question: "What is my favorite Sport?" , answer:"NONE! hahaha. I am not really a sports fan but I do enjoy watching a game of football here and there. My girlfriend loves the fact that I do not follow sports.... she wishes I was like that with video games too. :P"},
		{question: "What are my Hobbbies?" , answer:"Video Games, Movies, and programming. I live in the pittsburgh area and me and a friend likes to find coding meetups to learn more about other programming languages and frameworks."},
		{question: "What is my favorite TV Show?" , answer:"The Big Bang Theory!"},
		{question: "What is my favorite movie?" , answer:"I enjoyed watching the Lord of the Rings and The Hobbit movies."},
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

chrome.runtime.sendMessage({todo:"ShowPageAction"});

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	if(request.todo = "changeColor"){
		var addColor = '#' + request.clickedColor;
		//$('.page_title').css({'color':addColor});
		var elem = $("div[role='banner']");
		console.log(elem);
		elem[0].style.removeProperty('background-color');
		elem[0].style.setProperty('background-color', addColor, 'important');
	}
});
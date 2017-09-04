chrome.runtime.sendMessage({todo:"ShowPageAction"});

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	if(request.todo = "changeColor"){
		var addColor = '#' + request.clickedColor;
		//$('.page_title').css({'color':addColor});
		var elem = $("body");
		console.log(elem);
		elem[0].style.removeProperty('color');
		elem[0].style.setProperty('color', addColor, 'important');
	}
});
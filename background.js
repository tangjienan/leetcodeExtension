chrome.runtime.onMessage.addListener(function (msg,sender) {
	if(msg.from == 'popup'){
	var newURL = "https://leetcode.com/tag/" + msg.message; +"/";
	//create a new tab for parsing
	var flag = 1;
	chrome.tabs.create({ url: newURL, active : false},  function(tab) {
		var id = tab.id;
		chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
			//listening to the specific tab we need
				if(tabId == id && flag == 1 && changeInfo.status == 'complete'){
					//alert("the hidden tab is loaded now");
					flag = 2;
					chrome.tabs.executeScript(id, {
 					 	file: 'parse.js'
					},function(){
						chrome.tabs.remove(id);
					});
				}
				
		});
	});
	}
});

chrome.runtime.onMessage.addListener(function (msg,sender) {
	if(msg.from == 'parse'){
		//alert("hey i got you");
		var newUrl = "https://leetcode.com" + msg.message + "description/";
		//alert(newUrl);
		chrome.tabs.create({ url: newUrl}); 
	}
});







/*
chrome.browserAction.onClicked.addListener(function(activeTab){
 	alert("dsada");
	var newURL = "http://stackoverflow.com/";
	chrome.tabs.create({ url: newURL });
});

*/
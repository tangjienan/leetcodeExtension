//https://stackoverflow.com/questions/20019958/chrome-extension-how-to-send-data-from-content-script-to-popup-html
$( document ).ready(function() {
	$("#pick").on("click", function(){
    	var text = $( 'select[name="category"] option:selected' ).text();
    	var dataToSend = {
    		from    :  "popup",
    		message :  text
    	};
    	chrome.runtime.sendMessage(dataToSend);
	});	
});

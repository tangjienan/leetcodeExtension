//shoud generate a random number based on the length of the row in here
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var rowCount = $('#question_list tr').length;
var randomNumber = getRandomInt(1,rowCount+1);
//alert(randomNumber);
var row = $("#question_list tr:nth-child(" + randomNumber + ") td:nth-child(3) a").first();
var message = row.attr('href');
//alert(message);

//object to send
var dataToSend = {
    from    :  "parse",
    message :  message 
};
chrome.runtime.sendMessage(dataToSend);
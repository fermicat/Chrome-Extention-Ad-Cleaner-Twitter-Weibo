// run this method after click the button
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    // run run.js
    chrome.tabs.executeScript( activeTab.id , {file:'run.js'});
});


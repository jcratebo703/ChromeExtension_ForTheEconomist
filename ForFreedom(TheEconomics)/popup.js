var getSelectedTab = (tab) => {
    var tabId = tab.id;
    var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
    document.getElementById('free').addEventListener('click', () => sendMessage({ action: 'FREE' }));
}
chrome.tabs.getSelected(null, getSelectedTab);
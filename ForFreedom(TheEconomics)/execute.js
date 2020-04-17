function removeElementsByClass(className) {
    var tags = document.getElementsByClassName(className);

    var arrLen = tags.length;
    for (var i = 0; i < arrLen; i++) {
        tags[i].parentNode.removeChild(tags[i]);

        if (tags[i] == undefined && i < arrLen) {
            removeElementsByClass(className);
        }
    }
};

const onMessage = (message) => {
    switch (message.action) {
        case 'FREE':
            removeElementsByClass("paywall");
            removeElementsByClass("layout-article-shade");
            break;
        
        default:
            break;
    }
}

chrome.runtime.onMessage.addListener(onMessage);
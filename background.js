//Not working idk why
function spoof(){
    chrome.webRequest.onBeforeSendHeaders.addListener(
        function(details) {
            for (var i = 0; i < details.requestHeaders.length; ++i) {
                if (details.requestHeaders[i].name === 'User-Agent') {
                    details.requestHeaders.splice(i, 1);
                    break;
                }
            }
            details.requestHeaders.push({name: 'User-Agent', value: 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Mobile Safari/537.36'});
            return {requestHeaders: details.requestHeaders};
        },
        {urls: ["<all_urls>"]},
        ["blocking", "requestHeaders"]
    );
}
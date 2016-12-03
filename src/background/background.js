
chrome.extension.onRequest.addListener(function(data, sender) {
	var port = chrome.runtime.connectNative('com.josephbuchma.ghsandbox');
	port.onMessage.addListener(function(msg) {
		console.log("Received" + msg);
	});
	port.onDisconnect.addListener(function() {
		console.log("Disconnected");
	});
	port.postMessage(data);
});

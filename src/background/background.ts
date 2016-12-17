
function UnmarshalMessagePayload(msg: any) {
    // nested payload json is base64-encoded
    msg.payload = JSON.parse(atob(msg.payload));
    return msg
}

window.onload = function(event :any) {
  chrome.extension.onRequest.addListener(function(data :any, sender :any) {
    var port = chrome.runtime.connectNative('com.josephbuchma.ghsandbox');
    port.onMessage.addListener(function(msg) {
      console.log(UnmarshalMessagePayload(msg));
    });
    port.onDisconnect.addListener(function() {
      console.log("Disconnected");
    });
    port.postMessage(data);
  });
}

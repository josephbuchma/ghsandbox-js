
import $ = require('jquery');

function MarshalMessage(msgType: string, payload: any) {
    var pl = JSON.stringify(payload);
    return {type: msgType, payload: btoa(pl)};
}

function openGHRepoSandbox() {
  chrome.extension.sendRequest(MarshalMessage("sandbox", {url: window.location.href}));
}

//chrome.extension.sendMessage({}, function(response: any) {
//  var readyStateCheckInterval = setInterval(function() {
//    if (document.readyState === "complete") {
//      clearInterval(readyStateCheckInterval);

window.onload = function(event: any) {

      var html='\
        <button id="open_sandbox_button" class="btn btn-sm btn-primary" title="Sandbox" type="button">\
          <span>Sandbox</span>\
        </button>';

      $(".file-navigation").append(html);
      $("#open_sandbox_button").click(openGHRepoSandbox);
    }
//  }, 10);
//});
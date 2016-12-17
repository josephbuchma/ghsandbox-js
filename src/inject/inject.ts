
import $ = require('jquery');

function MarshalMessage(msgType: string, payload: any) {
  var pl = JSON.stringify(payload);
  return {type: msgType, payload: btoa(pl)};
}

function openGHRepoSandbox() {
  chrome.extension.sendRequest(MarshalMessage("sandbox", {url: window.location.href}));
}

window.onload = function(event: any) {
  var html='\
  <button id="open_sandbox_button" class="btn btn-sm btn-primary" title="Sandbox" type="button">\
    <span>Sandbox</span>\
  </button>';

  $(".file-navigation").append(html);
  $("#open_sandbox_button").click(openGHRepoSandbox);
}
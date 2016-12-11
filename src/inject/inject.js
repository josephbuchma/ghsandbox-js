
function MarshalMessage(type, payload) {
    var pl = JSON.stringify(payload);
    return {type: type, payload: btoa(pl)};
}

function openGHRepoSandbox() {
  chrome.extension.sendRequest(MarshalMessage("sandbox", {url: window.location.href}));
}

chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      var html='\
        <button id="open_sandbox_button" class="btn btn-sm btn-primary" title="Sandbox" type="button">\
          <span>Sandbox</span>\
        </button>';

      $(".file-navigation").append(html);
      $("#open_sandbox_button").click(openGHRepoSandbox);
    }
  }, 10);
});
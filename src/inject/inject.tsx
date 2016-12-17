
import $ = require('jquery');

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { GreenButton } from './components/green_button';

function MarshalMessage(msgType: string, payload: any) {
  var pl = JSON.stringify(payload);
  return {type: msgType, payload: btoa(pl)};
}

function openGHRepoSandbox() {
  chrome.extension.sendRequest(MarshalMessage("sandbox", {url: window.location.href}));
}

window.onload = function(event: any) {
  $(".file-navigation").append("<div id='sandbox_button_container'></div>");
  //$("#open_sandbox_button").click(openGHRepoSandbox);

  ReactDOM.render(
    (<GreenButton click={openGHRepoSandbox} />),
    document.getElementById("sandbox_button_container")
  );
}
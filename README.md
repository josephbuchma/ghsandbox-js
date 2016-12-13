
# Github Sandbox

ghsandbox is a Chrome web-browser extension that allows to clone any repository
on Github and open it locally in one click.

It uses [Native Messaging](https://developer.chrome.com/extensions/nativeMessaging),
so you also must install its [native messaging host](https://github.com/josephbuchma/ghsandbox-go)

## WORK IN PROGRESS

Currently it adds "Sandbox" button next to "New pull request" button on
repository page. When you click on "Sandbox" button it clone this repository to some
temporary directory and opens terminal in this directory, and it will delete it
immediately after you close this terminal window.


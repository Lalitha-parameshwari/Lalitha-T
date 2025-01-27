# Chrome Extension SSL Checker

This repository contains a simple Chrome extension example with a popup interface, background script, and content script. Follow the steps below to set it up and test it locally.

---

## Features
- *Popup Interface*: A simple UI with a button and a message.
- *Background Script*: Listens for extension icon clicks and sends messages to content scripts.
- *Content Script*: Modifies the DOM of web pages and listens for messages from the background.

---

## Folder Structure

chrome-extension/
├── manifest.json          # Metadata for the Chrome extension
├── popup.html             # Popup interface
├── background.js          # Background script
├── content.js             # Content script
├── icons/                 # Folder for extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png


---

## Installation

1. Clone or download this repository.

2. Open *Google Chrome* and navigate to chrome://extensions/.

3. Enable *Developer mode* (top-right corner).

4. Click *Load unpacked* and select the folder containing the extension files.

5. The extension will now appear in the list of installed extensions.

---
## Usage
1. *Popup Functionality*:
   - Click the extension icon in the Chrome toolbar.
   - A popup will appear with a button.
   - Click the button to display a message and log an event to the console.

2. *Content Script*:
   - Open any webpage (e.g., https://example.com).
   - The content script will add a red border to the webpage.

3. *Background Script*:
   - The background script listens for clicks on the extension icon and sends a message to the active tab.
   - The content script displays an alert upon receiving this message.

---
## Code Overview

### manifest.json
json
{
  "manifest_version": 3,
  "name": "Chrome Extension Example",
  "version": "1.0",
  "description": "A simple Chrome extension example.",
  "icons": {
    "16": "SSL Checker Extension.png",
    "48": "SSL Checker Extension.png",
    "128": "SSL Checker Extension.png"
  },
  "permissions": ["tabs", "activeTab"],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["https://*/*", "http://*/*"],
      "js": ["content.js"]
    }
  ],
  "action": {
    "default_popup": "popup.html",
    "default_icon": "SSL Checker Extension.png"
  }
}


### popup.html
Contains the popup UI and button functionality.

### background.js
Handles the background logic and listens for icon clicks.

### content.js
Modifies the DOM of web pages and interacts with the background script.

---

## Debugging

- Open chrome://extensions/ and inspect your extension for errors.
- Use *Developer Tools* to debug popup scripts, background scripts, or content scripts.
  - Right-click the extension icon > "Inspect popup."
  - Inspect background scripts directly from the extensions page.
  - Check the console on any webpage for content script logs.

---




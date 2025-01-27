// background.js

chrome.runtime.onInstalled.addListener(() => {
  console.log("SSL/TLS Monitor Extension Installed.");
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "checkSSL") {
    // Use the `chrome.tabs` API to check SSL details (mock data here)
    const sslInfo = {
      isSecure: true,
      certificateIssuer: "DigiCert",
      validUntil: "2025-01-30"
    };

    sendResponse(sslInfo);  // Send SSL info back to content script
  }
});

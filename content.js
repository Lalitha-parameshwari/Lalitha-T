// content.js

// Example: Check SSL status when a page loads
window.addEventListener('load', () => {
  // Send message to background script to get SSL information
  chrome.runtime.sendMessage({ action: "checkSSL" }, (response) => {
    if (response.isSecure) {
      console.log("This page is served over a secure connection.");
      // You can also display a visual cue on the page
      alert("SSL/TLS is secure. Issuer: " + response.certificateIssuer);
    } else {
      console.log("This page is not served over a secure connection.");
      alert("Warning: SSL/TLS connection is not secure.");
    }
  });
});


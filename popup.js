document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("check-ssl").addEventListener("click", async () => {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        // 🚨 Prevent script injection on chrome:// or other restricted URLs
        if (!tab || !tab.url || tab.url.startsWith("chrome://") || tab.url.startsWith("about:") || tab.url.startsWith("file://")) {
            document.getElementById("result").innerText = "⛔ Cannot check SSL on this page.";
            return;
        }

        // Execute script only on valid pages
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: checkSSLStatus
        }).catch(error => console.error("Script execution failed:", error));
    });
});

// Function that runs inside the tab
function checkSSLStatus() {
    fetch(window.location.href)
        .then(response => {
            const headers = response.headers;
            let hsts = headers.get("Strict-Transport-Security") ? "✅ HSTS Enabled" : "⚠️ HSTS Not Found";
            alert(`SSL Check:\n${hsts}`);
        })
        .catch(() => {
            alert("SSL Check Failed.");
        });
}

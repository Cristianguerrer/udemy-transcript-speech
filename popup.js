document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("start-tts").addEventListener("click", function() {
        chrome.runtime.sendMessage({ message: "toggleTTS" });
    });

    document.getElementById("stop-tts").addEventListener("click", function() {
        chrome.runtime.sendMessage({ message: "stopTTS" });
    });
});

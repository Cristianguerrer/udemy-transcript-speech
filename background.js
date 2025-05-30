let isSpeaking = false;
let lastSubtitle = "";
let isTTSActive = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "toggleTTS") {
        isTTSActive = !isTTSActive;
        if (isTTSActive) {
            speakSubtitle();
        }
    } else if (request.message === "stopTTS") {
        isTTSActive = false;
        chrome.tts.stop();
        isSpeaking = false;
    }
});

function fetchSubtitle(callback) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0];
        if (!activeTab) return;

        chrome.scripting.executeScript({
            target: {tabId: activeTab.id},
            function: getSubtitleText,
        }, (injectionResults) => {
            if (injectionResults && injectionResults.length > 0) {
                callback({data: injectionResults[0].result});
            }
        });
    });
}

function getSubtitleText() {
    let activeSubtitleElement = document.querySelector('[data-purpose="transcript-cue-active"] > [data-purpose="cue-text"]');
    return activeSubtitleElement ? activeSubtitleElement.innerText : null;
}

function speakSubtitle() {
    if (!isTTSActive || isSpeaking) return;

    isSpeaking = true;
    fetchSubtitle(function(response) {
        if (response && response.data) {
            let subtitleText = response.data;
            if (subtitleText === lastSubtitle) {
                isSpeaking = false;
                if (isTTSActive) {
                    speakSubtitle();
                }
                return;
            }
            lastSubtitle = subtitleText;

            chrome.tts.speak(subtitleText, {
                rate: 2.0,
                onEvent: function(event) {
                    if (event.type === 'end') {
                        isSpeaking = false;
                        if (isTTSActive) {
                            speakSubtitle();
                        }
                    }
                }
            });
        } else {
            isSpeaking = false;
        }
    });
}

chrome.action.onClicked.addListener((tab) => {
    chrome.runtime.sendMessage({message: "toggleTTS"});
});

setInterval(() => {
    if (isTTSActive && !isSpeaking) {
        speakSubtitle();
    }
}, 1000);

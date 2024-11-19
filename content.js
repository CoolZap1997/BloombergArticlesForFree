chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchH1Text") {
    const h1Element = document.querySelector('h1.media-ui-HedAndDek_headline-D19MOidHYLI-');
    if (h1Element) {
      console.log('H1 Text:', h1Element.textContent);
    } else {
      console.log('H1 element not found');
    }
  }
});
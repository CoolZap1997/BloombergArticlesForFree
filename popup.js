document.getElementById("fetchText").addEventListener("click", () => {
    // Send a message to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: fetchHeadline
        });
      }
    });
});
  
function fetchHeadline() {
    // Fetch and log the text from the target h1 element
    const headline = document.querySelector("h1.media-ui-HedAndDek_headline-D19MOidHYLI-");
    if (headline) {
        const headlineText = headline.textContent;
        console.log("Fetched H1 Text:", headlineText);
    
        // Percent encode the fetched headline
        const encodedHeadline = encodeURIComponent(headlineText);
        console.log("Percent Encoded Text:", encodedHeadline);
    
        // Construct the URL with the encoded headline
        const url = `https://www.bnnbloomberg.ca/search/?query=${encodedHeadline}`;
        console.log("Constructed URL:", url);
        window.location.href = url;

        // const resultLink = getElementByXPath("//div[@id='queryly_resultscontainer']/div[1]//a[@class='resultlink double-teaser__title']");
        // if (resultLink) {
        //     resultLink.click();
        //     console.log("Clicked first search result link.");
        // } else {
        //     console.warn("Result link not found.");
        // }
    } else {
      console.warn("No H1 tag with the specified class found.");
    }

    
}  
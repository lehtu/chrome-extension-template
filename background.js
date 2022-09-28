chrome.webNavigation.onCommitted.addListener((details) => {
  chrome.scripting.insertCSS({
    css: 'body { filter: grayscale() !important }',
    target: { tabId: details.tabId }
  });
}, {
  url: [{ schemes: ['http', 'https'] }]
});

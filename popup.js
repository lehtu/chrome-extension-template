const getCurrentTab = async () => {
  const queryOptions = { active: true, lastFocusedWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

myFirstActionButton.addEventListener('click', async (event) => {
  try {
    const tab = await getCurrentTab();
    const injectionObject = {
      target: { tabId: tab.id },
      css: 'body { filter: none !important }'
    };
    await chrome.scripting.insertCSS(injectionObject);
  } catch (err) {
    console.error(`failed to insert CSS: ${err}`);
  }
});

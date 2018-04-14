const scrapURL = () => {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		document.getElementById("title").value = tabs[0].title;
		document.getElementById("url").value = tabs[0].url;
		document.getElementById("favicon").style = `
			background-image: url(${tabs[0].favIconUrl});
			background-repeat: no-repeat;
			background-position:center`;
	});
};



document.addEventListener('DOMContentLoaded', async () => {
	scrapURL();
}, false);

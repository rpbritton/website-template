/*function setThemeDark(yes) {
	if (yes) {
		document.body.style.setProperty('--fg-color', `#${materialColors[17][4]}`);
		document.body.style.setProperty('--fg-faded-color', `#${materialColors[17][8]}`);
		document.body.style.setProperty('--bg-color', `#${materialColors[17][9]}`);
	}
	else {
		document.body.style.setProperty('--fg-color', `#${materialColors[17][9]}`);
		document.body.style.setProperty('--fg-faded-color', `#${materialColors[17][2]}`);
		document.body.style.setProperty('--bg-color', `#${materialColors[17][0]}`);
	}
}*/

const colors = {
	'fg': window.getComputedStyle(document.body).getPropertyValue('--fg'),
	'bg': window.getComputedStyle(document.body).getPropertyValue('--bg'),
	'fd': window.getComputedStyle(document.body).getPropertyValue('--fd')
};

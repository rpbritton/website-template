for (let button of document.getElementsByClassName('add-ink-drop')) {
	button.addEventListener('mousedown', function(ev) { inkDropStart(ev); }, false);
	button.addEventListener('dragend', function(ev) { inkDropEnd(); });
	button.addEventListener('click', function(ev) { inkDropEnd(); });
}

var inkDropOn = false;
function inkDropStart(ev, el = ev.currentTarget) {
	if (inkDropOn) inkDropEnd();
	inkDropOn = true;

	let x = ev.clientX-el.getBoundingClientRect().left;
	let w = (el.offsetWidth-x < x) ? x : el.offsetWidth-x;

	let y = ev.clientY-el.getBoundingClientRect().top;
	let h = (el.offsetHeight-y < y) ? y : el.offsetHeight-y;

	let radius = Math.sqrt(w*w+h*h);

	let inkDrop = document.createElement('div');
	inkDrop.className = ('ink-drop ink-drop-on');
	inkDrop.style.width = `${radius*2}px`;
	inkDrop.style.height = `${radius*2}px`;
	inkDrop.style.left = `${x-radius}px`;
	inkDrop.style.top = `${y-radius}px`;

	el.appendChild(inkDrop);

	setTimeout(() => { inkDrop.style.transform = 'scale(1)'; }, 0);
}

function inkDropEnd() {
	if (inkDropOn) {
		inkDropOn = false;
		let inkDrop = document.getElementsByClassName('ink-drop-on')[0];
		inkDrop.classList.remove('ink-drop-on');
		inkDrop.classList.add('ink-drop-off');
		setTimeout(() => { inkDrop.remove(); }, 400);
	}
}

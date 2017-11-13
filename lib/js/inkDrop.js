var inkDropState = false;
function inkDropStart(ev, elFrom, elTo = elFrom, color = '#000') {
	inkDropState = true;

	let x = ev.clientX-elTo.getBoundingClientRect().left;
	let w = (elTo.offsetWidth-x < x) ? x : elTo.offsetWidth-x;

	let y = ev.clientY-elTo.getBoundingClientRect().top;
	let h = (elTo.offsetHeight-y < y) ? y : elTo.offsetHeight-y;

	let radius = Math.sqrt(w*w+h*h);

	let inkDrop = document.createElement('div');
	inkDrop.className = 'ink-drop';
	inkDrop.style.width = `${radius*2}px`;
	inkDrop.style.height = `${radius*2}px`;
	inkDrop.style.left = `${x-radius}px`;
	inkDrop.style.top = `${y-radius}px`;
	inkDrop.style.backgroundColor = color;

	elTo.appendChild(inkDrop);

	setTimeout(() => { inkDrop.style.transform = 'scale(1)'; }, 0);
}

function inkDropEnd() {
	if (inkDropState) {
		inkDropState = false;
		let inkDrop = document.getElementsByClassName('ink-drop')[0];
		setTimeout(() => { inkDrop.style.opacity = '0'; }, 0);
		setTimeout(() => { inkDrop.remove(); }, 400);
	}
}

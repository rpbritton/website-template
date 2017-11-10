var inkDropState = false;
function inkDropStart(ev, elFrom, elTo = elFrom, color = '#000') {
	inkDropState = true;
  // Ya should make a more advanced calculator
	let radius = Math.sqrt(Math.pow(elTo.offsetWidth, 2)+Math.pow(elTo.offsetHeight, 2));

	let inkDrop = document.createElement('div');
	inkDrop.className = 'ink-drop';
	inkDrop.style.width = `${radius*2}px`;
	inkDrop.style.height = `${radius*2}px`;
	inkDrop.style.left = `${ev.clientX-elTo.getBoundingClientRect().left-radius}px`;
	inkDrop.style.top = `${ev.clientY-elTo.getBoundingClientRect().top-radius}px`;
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

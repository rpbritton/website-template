function inkAnimation(ev, elFrom, elTo, color = '#EEEEEE') {
	let radius = Math.sqrt(Math.pow(elTo.offsetWidth, 2)+Math.pow(elTo.offsetHeight, 2));

	let ink = document.createElement('div');
	ink.className = 'ink';
	ink.style.width = `${radius*2}px`;
	ink.style.height = `${radius*2}px`;
	ink.style.left = `${ev.clientX-elTo.getBoundingClientRect().left-radius}px`;
	ink.style.top = `${ev.clientY-elTo.getBoundingClientRect().top-radius}px`;

	ink.style.backgroundColor = color;

	setTimeout(() => { ink.style.transform = 'scale(1)'; }, 0);

	elFrom.addEventListener('mouseup', function() { inkAnimationEnd(ink); });
	elFrom.addEventListener('mouseleave', function() { inkAnimationEnd(ink); });

	elTo.appendChild(ink);
}

function inkAnimationEnd(ink) {
	setTimeout(() => { ink.style.opacity = '0'; }, 0);
	setTimeout(() => { ink.remove(); }, 400);
}

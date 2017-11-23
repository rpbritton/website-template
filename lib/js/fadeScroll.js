{
	setInterval(() => {
		for (let el of document.getElementsByClassName('fade-in-scroll')) {
			if (el.getBoundingClientRect().top < window.innerHeight-300 && el.getBoundingClientRect().bottom > 200) {
				el.style.opacity = 1;
				el.style.transform = 'translateY(0)';
				el.style.pointerEvents = 'auto';
			}
			if (el.getBoundingClientRect().top > window.innerHeight*1.5 || el.getBoundingClientRect().bottom < 0-window.innerHeight*0.5) {
				el.style.opacity = '';
				el.style.transform = '';
				el.style.pointerEvents = '';
			}
		}
	}, 20);
}

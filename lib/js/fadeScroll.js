{
	for (let el of document.getElementsByClassName('fade-in-scroll')) {
		el.fadedIn = false;
		checkIfVisible(el);
		window.addEventListener('scroll', function(ev) {
			if (!el.fadeIn) {
				checkIfVisible(el);
			}
		});
	}
	function checkIfVisible(el) {
		if (el.getBoundingClientRect().top < window.innerHeight-300 && el.getBoundingClientRect().bottom > 200) {
			el.fadedIn = true;
			el.style.opacity = 1;
			el.style.transform = 'translateY(0)';
			el.style.pointerEvents = 'auto';
		}
	}
}

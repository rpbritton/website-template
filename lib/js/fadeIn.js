{
	for (let img of document.getElementsByTagName('img')) {
		img.onload = () => {
			img.style.opacity = 1;
			let credit = img.parentElement.getElementsByClassName('content-text-img-bg-credit')[0];
			if (credit) 
				credit.style.opacity = 1;
		};
		img.src = img.alt;
	}
	for (let el of document.getElementsByClassName('fade-in-scroll-top')) {
		el.fadedIn = false;
		scrollCheck(el);
		window.addEventListener('scroll', function(ev) {
			scrollCheck(el);
		});
	}
	function scrollCheck(el) {
		let elTop = el.getBoundingClientRect().top;
		let elBottom = el.getBoundingClientRect().bottom;
		if (elTop < window.innerHeight-300 && elBottom > 200) {
			if (!el.fadeIn) {
				el.fadedIn = true;
				el.style.opacity = 1;
				el.style.transform = 'translateY(0)';
				el.style.pointerEvents = 'auto';
			}
		}
	}
}

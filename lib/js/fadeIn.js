for (let img of document.getElementsByClassName('fade-in-img')) {
	img.onload = () => {
		img.style.opacity = 1;
	};
	img.src = img.alt;
}
for (let el of document.getElementsByClassName('fade-in-scroll-top')) {
	scrollCheck(el);
	window.addEventListener('scroll', function(ev) {
		scrollCheck(el);
	});
}
function scrollCheck(el) {
	let elTop = el.getBoundingClientRect().top;
	let elBottom = el.getBoundingClientRect().bottom;
	if (elTop < window.innerHeight-300 && elBottom > 300) {
		el.style.opacity = 1;
		el.style.transform = 'translateY(0)';
		el.style.pointerEvents = 'auto';
	}
}

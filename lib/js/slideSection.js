for (let nav of document.getElementsByClassName('content-cards-slide-nav')) {
	let height = nav.parentElement.parentElement.getElementsByClassName('content-cards-slide-container')[0].offsetHeight;
	let overflow = nav.parentElement.parentElement.getElementsByClassName('content-cards-slide-overflow')[0];
	nav.addEventListener('click', function(ev) {
		let direction = 0;
		if (nav.classList.contains('content-cards-slide-left'))
			direction = -1;
		if (nav.classList.contains('content-cards-slide-right'))
			direction = 1;
		let margin = Number(overflow.style.marginTop.slice(0, -2))-height*direction;
		if (margin > height*0.5)
			margin = overflow.offsetHeight*-1+height;
		if (margin < overflow.offsetHeight*-1+height*0.5)
			margin = 0;
		overflow.style.marginTop = `${margin}px`;
	});
}

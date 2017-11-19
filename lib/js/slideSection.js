{
	for (let nav of document.getElementsByClassName('content-cards-slide-nav')) {
		let container = nav.parentElement.getElementsByClassName('content-cards-slide-container')[0];
		container.slideDestination = 0;
		nav.addEventListener('click', function(ev) {
			let direction = 0;
			if (nav.classList.contains('content-cards-slide-left'))
				direction = -1;
			if (nav.classList.contains('content-cards-slide-right'))
				direction = 1;
			slideSection(container, container.clientHeight*direction);
		});
	}
	function slideSection(el, amount, options = {'position': 0, 'speed': 400, 'quality': 20}) {
		if (el.slideDestination+amount < 0) {
			el.slideDestination = el.scrollHeight+amount;
			amount = el.scrollHeight+amount;
		} else if (el.slideDestination+amount > el.scrollHeight-amount) {
			el.slideDestination = 0;
			amount = (el.scrollHeight-amount)*-1;
		} else {
			el.slideDestination += amount;
		}
		let add = 0, old = 0;
		let interval = setInterval(() => {
			if (options.position <= options.speed) {
				old = add;
				add = Math.round((Math.cos(Math.PI*(options.position/options.speed+1))+1)/2*amount);
				el.scrollTop += add-old;
				options.position += options.quality;
			} else {
				clearInterval(interval);
			}
		}, options.speed/options.quality);
	}
}

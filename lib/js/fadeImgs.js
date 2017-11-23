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
}

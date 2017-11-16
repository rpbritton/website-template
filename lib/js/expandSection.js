for (let expander of document.getElementsByClassName('expand-section')) {
	expander.addEventListener('click', function(ev) {
		expander.parentElement.style.maxHeight = `${expander.parentElement.scrollHeight}px`;
		expander.style.boxShadow = 'inset 0 0 200px -100px rgba(var(--bg), 1)';
		expander.style.pointerEvents = 'none';
	}, {'once': true});
}

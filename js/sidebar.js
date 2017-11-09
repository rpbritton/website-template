for (let button of document.getElementsByClassName('sidebar-button')) {
	button.addEventListener('mousedown', function(ev) { inkAnimation(ev, this, this) });
}

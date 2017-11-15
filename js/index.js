for (let button of document.getElementsByClassName('hover-fade')) {
	button.addEventListener('mousedown', function(ev) { inkDropStart(ev, this, this); });
	button.addEventListener('dragend', function(ev) { inkDropEnd(); });
}

for (let button of document.getElementsByClassName('sidebar-button')) {
	button.addEventListener('mousedown', function(ev) { inkDropStart(ev, this, this, colors.bg); });
	button.addEventListener('dragend', function(ev) { inkDropEnd(); });
}

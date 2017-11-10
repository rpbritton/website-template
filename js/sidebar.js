for (let button of document.getElementsByClassName('sidebar-button')) {
	button.addEventListener('mousedown', function(ev) { inkDropStart(ev, this, this, colors.bg); });
	button.addEventListener('mouseup', function(ev) { inkDropEnd(); });
	button.addEventListener('mouseleave', function(ev) { inkDropEnd(); });
}

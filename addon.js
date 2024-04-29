/**
 * Roundcube CalDAVZap Plugin
 *
 * @version 1.5.7
 * @author Offerel
 * @copyright Copyright (c) 2024, Offerel
 * @license GNU General Public License, version 3
 */
window.rcmail && rcmail.addEventListener("init", function(a) {
	if(document.getElementById('panel')) document.getElementById('panel').addEventListener('click', showPanel);
});

function maxselect(select, maxcount) {
	var checkboxes = document.getElementsByClassName(select.className);
	var oCount = 0;
	for(var i = 0; i < checkboxes.length; i++) {
		if(checkboxes[i].checked) {
			oCount++;
			if(oCount > maxcount) {
				select.checked = false;
			}
		}
	}
}

function showPanel() {
	let lft = '274px';
	let zft = '0px';

	let main = document.getElementById('caldavzapcontentframe').contentWindow.document.getElementById('main');
	let mainTODO = document.getElementById('caldavzapcontentframe').contentWindow.document.getElementById('mainTODO');
	let main_h = document.getElementById('caldavzapcontentframe').contentWindow.document.getElementById('main_h');
	let main_h_TODO = document.getElementById('caldavzapcontentframe').contentWindow.document.getElementById('main_h_TODO');
	let searchForm = document.getElementById('caldavzapcontentframe').contentWindow.document.getElementById('searchForm');
	let searchFormTODO = document.getElementById('caldavzapcontentframe').contentWindow.document.getElementById('searchFormTODO');

	if(main.style.left != lft) {
		main.style.left = lft;
		mainTODO.style.left = lft;
		main_h.style.left = lft;
		main_h_TODO.style.left = lft;
		searchForm.style.left = lft;
		searchFormTODO.style.left = lft;
	} else {
		main.style.left = zft;
		mainTODO.style.left = zft;
		main_h.style.left = zft;
		main_h_TODO.style.left = zft;
		searchForm.style.left = zft;
		searchFormTODO.style.left = zft;
	}
}
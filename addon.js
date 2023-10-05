/**
 * Roundcube CalDAVZap Plugin
 *
 * @version 1.5.6
 * @author Offerel
 * @copyright Copyright (c) 2023, Offerel
 * @license GNU General Public License, version 3
 */
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
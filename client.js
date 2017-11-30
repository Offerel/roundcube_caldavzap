function onLoadHandler() {
	var iframe = document.getElementById("caldavzapcontentframe");
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

	innerDoc.getElementById('username').value = rcmail.env.caldavzap_username;
	innerDoc.getElementById('password').value = rcmail.env.caldavzap_password;
	
	document.getElementById("caldavzapcontentframe").contentWindow.login(); 
}
function onLoadHandler() {
	// Insert customized css in to CalDAVZap
	var $head = $("iframe").contents().find("head");                
	$head.append($("<link/>", 
    { rel: "stylesheet", href: "../"+rcmail.env.skinpath+"/caldavzap.css", type: "text/css" }));
	
	// find the hidden login form and enter the credentials
	var iframe = document.getElementById("caldavzapcontentframe");
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

	innerDoc.getElementsByName('username')[0].value = rcmail.env.caldavzap_username;
	innerDoc.getElementsByName('password')[0].value = rcmail.env.caldavzap_password;

	// start the normal login process
	document.getElementById("caldavzapcontentframe").contentWindow.login(); 
}
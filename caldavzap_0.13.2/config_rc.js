var globalNetworkRoundcubeSettings={
	href: location.protocol+'//'+location.hostname+
		(location.port ? ':'+location.port : '')+
		location.pathname.replace(RegExp('roundcube\.html$'),'')+
		'auth/',
	timeOut: 30000
};
var globalBackgroundSync=true;
var globalSyncResourcesInterval=120000;
var globalEnableRefresh=true;
var globalEnableKbNavigation=true;
var globalSettingsType='principal-URL';
var ck = document.cookie.split('; ');
for(var i = 0; i < ck.length; i++) {
	if(ck[i].includes("rclang=")) {
		var globalInterfaceLanguage=ck[i].split("=")[1];
	}
	
	if(ck[i].includes("rctz=")) {
		var globalTimeZone=decodeURIComponent(ck[i].split("=")[1]);
	}
}
var globalSortAlphabet=' 0123456789'+
	'AÀÁÂÄÆÃÅĀBCÇĆČDĎEÈÉÊËĒĖĘĚFGĞHIÌÍÎİÏĪĮJKLŁĹĽMNŃÑŇOÒÓÔÖŐŒØÕŌ'+
	'PQRŔŘSŚŠȘșŞşẞTŤȚțŢţUÙÚÛÜŰŮŪVWXYÝŸZŹŻŽ'+
	'aàáâäæãåābcçćčdďeèéêëēėęěfgğhiìíîïīįıjklłĺľmnńñňoòóôöőœøõō'+
	'pqrŕřsśšßtťuùúûüűůūvwxyýÿzźżžАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ'+
	'Ьабвгґдеєжзиіїйклмнопрстуфхцчшщюяь';
var globalSearchTransformAlphabet={
	'[ÀàÁáÂâÄäÆæÃãÅåĀā]': 'a', '[ÇçĆćČč]': 'c', '[Ďď]': 'd',
	'[ÈèÉéÊêËëĒēĖėĘęĚě]': 'e', '[Ğğ]': 'g', '[ÌìÍíÎîİıÏïĪīĮį]': 'i',
	'[ŁłĹĺĽľ]': 'l', '[ŃńÑñŇň]': 'n', '[ÒòÓóÔôÖöŐőŒœØøÕõŌō]': 'o',
	'[ŔŕŘř]': 'r', '[ŚśŠšȘșŞşẞß]': 's', '[ŤťȚțŢţ]': 't',
	'[ÙùÚúÛûÜüŰűŮůŪū]': 'u', '[ÝýŸÿ]': 'y', '[ŹźŻżŽž]': 'z'
};
var globalResourceAlphabetSorting=true;
var globalNewVersionNotifyUsers=[];
var globalDatepickerFirstDayOfWeek=1;
var globalHideInfoMessageAfter=1800;
var globalEditorFadeAnimation=666;
var globalEventStartPastLimit=3;
var globalEventStartFutureLimit=3;
var globalTodoPastLimit=1;
var globalLoadedCalendarCollections=[];
var globalLoadedTodoCollections=[];
var globalActiveCalendarCollections=[];
var globalActiveTodoCollections=[];
var globalCalendarSelected='/default/';
var globalTodoCalendarSelected='default/';
var globalActiveView='agendaWeek';
var globalOpenFormMode='single';
var globalTodoListFilterSelected=['filterAction', 'filterProgress'];
var globalCalendarStartOfBusiness=7;
var globalCalendarEndOfBusiness=15;
var globalDefaultEventDuration=60;
var globalDisplayHiddenEvents=false;
var globalTimeZoneSupport=false;
var globalRewriteTimezoneComponent=true;
var globalRemoveUnknownTimezone=false;
var globalShowHiddenAlarms=false;
var globalIgnoreCompletedOrCancelledAlarms=true;
var globalMozillaSupport=true;
var globalWeekendDays=[0, 6];
var globalAppleRemindersMode=true;
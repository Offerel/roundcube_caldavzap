var globalNetworkRoundcubeSettings={
	href: location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '')+location.pathname.replace(RegExp('roundcube\.html$'),'')+'auth/',
	timeOut: 30000
};
var globalBackgroundSync=true;
var globalSyncResourcesInterval=120000;
var globalEnableRefresh=true;
var globalEnableKbNavigation=true;
var globalSettingsType='principal-URL';

var ck = document.cookie.split('; ');
for(var i = 0; i < ck.length; i++) {
	var c = ck[i];
	nameEQ = "cdz=";
	while (c.charAt(0) === ' ') {
		c = c.substring(1,c.length);
    }
	
	if (c.indexOf(nameEQ) === 0) {
		var carr = JSON.parse(decodeURIComponent(c.substring(nameEQ.length,c.length)));
		var globalInterfaceLanguage=carr.cdz_ln;
		var globalTimeZone=carr.cdz_tz;
		var globalDatepickerFirstDayOfWeek=carr.cdz_fd;
		var globalCalendarStartOfBusiness=carr.cdz_sb;
		var globalCalendarEndOfBusiness=carr.cdz_eb;
		var globalWeekendDays=carr.cdz_wd.split(",");
		var globalActiveView=carr.cdz_wv;
		var globalTimeZoneSupport=carr.cdz_ts;
		var globalRewriteTimezoneComponent=carr.cdz_tr;
		var globalRemoveUnknownTimezone=carr.cdz_td;
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
var globalOpenFormMode='single';
var globalTodoListFilterSelected=['filterAction', 'filterProgress'];
var globalDefaultEventDuration=60;
var globalDisplayHiddenEvents=false;	
var globalShowHiddenAlarms=false;
var globalIgnoreCompletedOrCancelledAlarms=true;
var globalMozillaSupport=true;
var globalAppleRemindersMode=true;
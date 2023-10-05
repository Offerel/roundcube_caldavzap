var globalNetworkCheckSettings={href:'https://'+location.hostname+'/dav/principals/',
	timeOut: 90000,
	lockTimeOut: 10000,
	checkContentType: false,
	settingsAccount: true,
	delegation: false,
	additionalResources: [],
	hrefLabel: 'SabreDAV',
	forceReadOnly: null,
	ignoreAlarms: false,
	backgroundCalendars: []
}

var globalBackgroundSync=false;
var globalSyncResourcesInterval=120000;
var globalEnableRefresh=true;
var globalEnableKbNavigation=true;
var globalSettingsType='principal-URL';
var globalInterfaceLanguage='de_DE';
var globalInterfaceCustomLanguages=['de_DE'];
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
var globalEditorFadeAnimation=333;
var globalEventStartPastLimit=1;
var globalEventStartFutureLimit=1;
var globalTodoPastLimit=1;
var globalLoadedCalendarCollections=[];
var globalLoadedTodoCollections=[];
var globalActiveCalendarCollections=[];
var globalActiveTodoCollections=[];
var globalCalendarSelected='default/';
var globalTodoCalendarSelected='default/';
var globalActiveView='agendaWeek';
var globalOpenFormMode='single';
var globalTodoListFilterSelected=['filterAction', 'filterProgress'];
var globalCalendarStartOfBusiness=7;
var globalCalendarEndOfBusiness=15;
var globalDefaultEventDuration=60;
var globalDisplayHiddenEvents=false;
var globalTimeZoneSupport=true;
var globalTimeZone='Europe/Berlin';
var globalTimeZonesEnabled=['Europe/Berlin'];
var globalRewriteTimezoneComponent=true;
var globalRemoveUnknownTimezone=false;
var globalShowHiddenAlarms=false;
var globalIgnoreCompletedOrCancelledAlarms=true;
var globalMozillaSupport=true;
var globalWeekendDays=[0, 6];
var globalAppleRemindersMode=true;
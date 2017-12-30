//var globalEnableDevelBuilds=true;


var globalNetworkRoundcubeSettings={
	href: location.protocol+'//'+location.hostname+
		(location.port ? ':'+location.port : '')+
		location.pathname.replace(RegExp('roundcube\.html$'),'')+
		'/auth/',
	timeOut: 30000
};

// var globalNetworkAccountSettings={
	// href: location.protocol+'//'+location.hostname+
		// (location.port ? ':'+location.port : '')+
		// location.pathname.replace(RegExp('index_local\.html$'),'')+
		// 'auth/',
	// timeOut: 30000
// };

// globalUseJqueryAuth
// Use jQuery .ajax() auth or custom header for HTTP basic auth (default).
// Set this option to true if your server uses digest auth (note: you may
// experience auth popups on some browsers).
// If undefined (or empty), custom header for HTTP basic auth is used.
// Example:
//var globalUseJqueryAuth=true;


// globalBackgroundSync
// Enable background synchronization even if the browser window/tab has no
// focus.
// If false, synchronization is performed only if the browser window/tab
// is focused. If undefined or not false, then background sync is enabled.
// Example:
var globalBackgroundSync=true;


// globalSyncResourcesInterval
// This option defines how often (in miliseconds) are resources/collections
// asynchronously synchronized.
// Example:
var globalSyncResourcesInterval=120000;


// globalEnableRefresh
// This option enables or disables the manual synchronization button in
// the interface. If this option is enabled then users can perform server
// synchronization manually. Enabling this option may cause high server
// load (even DDOS) if users will try to manually synchronize data too
// often (instead of waiting for the automatic synchronization).
// If undefined or false, the synchronization button is disabled.
// NOTE: enable this option only if you really know what are you doing!
// Example:
var globalEnableRefresh=true;


// globalEnableKbNavigation
// Enable basic keyboard navigation using arrow keys?
// If undefined or not false, keyboard navigation is enabled.
// Example:
var globalEnableKbNavigation=true;


// globalSettingsType
// Where to store user settings such as: active view, enabled/selected
// collections, ... (the client store them into DAV property on the server).
// NOTE: not all servers support storing DAV properties (some servers support
// only subset /or none/ of these URLs).
// Supported values:
// - 'principal-URL', '', null or undefined (default) => settings are stored
//   to principal-URL (recommended for most servers)
// - 'addressbook-home-set' => settings are are stored to addressbook-home-set
// Example:
var globalSettingsType='principal-URL';


// globalCrossServerSettingsURL
// Settings such as enabled/selected collections are stored on the server
// (see the previous option) in form of full URL
// (e.g.: https://user@server:port/principal/collection/), but even if this
// approach is "correct" (you can use the same principal URL with multiple
// different logins, ...) it causes a problem if your server is accessible
// from multiple URLs (e.g. http://server/ and https://server/). If you want
// to store only the "principal/collection/" part of the URL (instead of the
// full URL) then enable this option.
// Example:
//var globalCrossServerSettingsURL=false;


// globalInterfaceLanguage
// Default interface language (note: this option is case sensitive):
//   cs_CZ (Čeština [Czech])
//   da_DK (Dansk [Danish]; thanks Niels Bo Andersen)
//   de_DE (Deutsch [German]; thanks Marten Gajda and Thomas Scheel)
//   en_US (English [English/US])
//   es_ES (Español [Spanish]; thanks Damián Vila)
//   fr_FR (Français [French]; thanks John Fischer)
//   it_IT (Italiano [Italian]; thanks Luca Ferrario)
//   ja_JP (日本語 [Japan]; thanks Muimu Nakayama)
//   hu_HU (Magyar [Hungarian])
//   nb_NO (Norsk (bokmål) [Norwegian]; thanks Tore Ørpetveit)
//   nl_NL (Nederlands [Dutch]; thanks Johan Vromans)
//   sk_SK (Slovenčina [Slovak])
//   tr_TR (Türkçe [Turkish]; thanks Selcuk Pultar)
//   ru_RU (Русский [Russian]; thanks Александр Симонов)
//   uk_UA (Українська [Ukrainian]; thanks Serge Yakimchuck)
//   zh_CN (中国 [Chinese]; thanks Fandy)
// Example:
var globalInterfaceLanguage='de_DE';


// globalInterfaceCustomLanguages
// If defined and not empty then only languages listed here are shown
// at the login screen, otherwise (default) all languages are shown
// NOTE: values in the array must refer to an existing localization
// (see the option above)
// Example:
//   globalInterfaceCustomLanguages=['en_US', 'sk_SK'];
var globalInterfaceCustomLanguages=['de_DE'];


// globalSortAlphabet
// Use JavaScript localeCompare() or custom alphabet for data sorting.
// Custom alphabet is used by default because JavaScript localeCompare()
// not supports collation and often returns "wrong" result. If set to null
// then localeCompare() is used.
// Example:
//   var globalSortAlphabet=null;
var globalSortAlphabet=' 0123456789'+
	'AÀÁÂÄÆÃÅĀBCÇĆČDĎEÈÉÊËĒĖĘĚFGĞHIÌÍÎİÏĪĮJKLŁĹĽMNŃÑŇOÒÓÔÖŐŒØÕŌ'+
	'PQRŔŘSŚŠȘșŞşẞTŤȚțŢţUÙÚÛÜŰŮŪVWXYÝŸZŹŻŽ'+
	'aàáâäæãåābcçćčdďeèéêëēėęěfgğhiìíîïīįıjklłĺľmnńñňoòóôöőœøõō'+
	'pqrŕřsśšßtťuùúûüűůūvwxyýÿzźżžАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯ'+
	'Ьабвгґдеєжзиіїйклмнопрстуфхцчшщюяь';


// globalSearchTransformAlphabet
// To support search without diacritics (e.g. search for 'd' will find: 'Ď', 'ď')
// it is required to define something like "character equivalence".
// key = regex text, value = search character
// Example:
var globalSearchTransformAlphabet={
	'[ÀàÁáÂâÄäÆæÃãÅåĀā]': 'a', '[ÇçĆćČč]': 'c', '[Ďď]': 'd',
	'[ÈèÉéÊêËëĒēĖėĘęĚě]': 'e', '[Ğğ]': 'g', '[ÌìÍíÎîİıÏïĪīĮį]': 'i',
	'[ŁłĹĺĽľ]': 'l', '[ŃńÑñŇň]': 'n', '[ÒòÓóÔôÖöŐőŒœØøÕõŌō]': 'o',
	'[ŔŕŘř]': 'r', '[ŚśŠšȘșŞşẞß]': 's', '[ŤťȚțŢţ]': 't',
	'[ÙùÚúÛûÜüŰűŮůŪū]': 'u', '[ÝýŸÿ]': 'y', '[ŹźŻżŽž]': 'z'
};

// globalResourceAlphabetSorting
// If more than one resource (server account) is configured, sort the
// resources alphabetically?
// Example:
var globalResourceAlphabetSorting=true;


// globalNewVersionNotifyUsers
// Update notification will be shown only to users with login names defined
// in this array.
// If undefined (or empty), update notifications will be shown to all users.
// Example:
//   globalNewVersionNotifyUsers=['admin', 'peter'];
var globalNewVersionNotifyUsers=[];


// globalDatepickerFormat
// Set the datepicker format (see 
// http://docs.jquery.com/UI/Datepicker/formatDate for valid values).
// NOTE: date format is predefined for each localization - use this option
// ONLY if you want to use custom date format (instead of the localization
// predefined one).
// Example:
//var globalDatepickerFormat='dd.mm.yy';


// globalDatepickerFirstDayOfWeek
// Set the datepicker first day of the week: Sunday is 0, Monday is 1, etc.
// Example:
var globalDatepickerFirstDayOfWeek=1;


// globalHideInfoMessageAfter
// How long are information messages (such as: success, error) displayed
// (in miliseconds).
// Example:
var globalHideInfoMessageAfter=1800;


// globalEditorFadeAnimation
// Set the editor fade in/out animation duration when editing or saving data
// (in miliseconds).
// Example:
var globalEditorFadeAnimation=666;



// globalEventStartPastLimit, globalEventStartFutureLimit, globalTodoPastLimit
// Number of months pre-loaded from past/future in advance for calendars
// and todo lists (if null then date range synchronization is disabled).
// NOTE: interval synchronization is used only if your server supports
// sync-collection REPORT (e.g. DAViCal).
// NOTE: if you experience problems with data loading and your server has
// no time-range filtering support set these variables to null.
// Example:
var globalEventStartPastLimit=3;
var globalEventStartFutureLimit=3;
var globalTodoPastLimit=1;


// globalLoadedCalendarCollections
// This option sets the list of calendar collections (down)loaded after login.
// If empty then all calendar collections for the currently logged user are
// loaded.
// NOTE: settings stored on the server (see settingsAccount) overwrite this
// option.
// Example:
var globalLoadedCalendarCollections=[];


// globalLoadedTodoCollections
// This option sets the list of todo collections (down)loaded after login.
// If empty then all todo collections for the currently logged user are loaded.
// NOTE: settings stored on the server (see settingsAccount) overwrite this
// option.
// Example:
var globalLoadedTodoCollections=[];


// globalActiveCalendarCollections
// This options sets the list of calendar collections checked (enabled
// checkbox => data visible in the interface) by default after login.
// If empty then all loaded calendar collections for the currently logged
// user are checked.
// NOTE: only already (down)loaded collections can be checked (see 
// the globalLoadedCalendarCollections option).
// NOTE: settings stored on the server (see settingsAccount) overwrite this
// option.
// Example:
var globalActiveCalendarCollections=[];


// globalActiveTodoCollections
// This options sets the list of todo collections checked (enabled
// checkbox => data visible in the interface) by default after login.
// If empty then all loaded todo collections for the currently logged
// user are checked.
// NOTE: only already (down)loaded collections can be checked (see 
// the globalLoadedTodoCollections option).
// NOTE: settings stored on the server (see settingsAccount) overwrite this
// option.
// Example:
var globalActiveTodoCollections=[];


// globalCalendarSelected
// This option sets which calendar collection will be pre-selected
// (if you create a new event) by default after login.
// The value must be URL encoded path to a calendar collection,
// for example: 'USER/calendar/'
// If empty or undefined then the first available calendar collection
// is selected automatically.
// NOTE: only already (down)loaded collections can be pre-selected (see
// the globalLoadedCalendarCollections option).
// NOTE: settings stored on the server (see settingsAccount) overwrite this
// option.
// Example:
var globalCalendarSelected='/default/';


// globalTodoCalendarSelected
// This option sets which todo collection will be pre-selected
// (if you create a new todo) by default after login.
// The value must be URL encoded path to a todo collection,
// for example: 'USER/todo_calendar/'
// If empty or undefined then the first available todo collection
// is selected automatically.
// NOTE: only already (down)loaded collections can be pre-selected (see 
// the globalLoadedTodoCollections option).
// NOTE: settings stored on the server (see settingsAccount) overwrite this
// option.
// Example:
var globalTodoCalendarSelected='default/';


// globalActiveView
// This options sets the default fullcalendar view option (the default calendar
// view after the first login).
// Supported values:
// - 'month'
// - 'multiWeek'
// - 'agendaWeek'
// - 'agendaDay'
// NOTE: we use custom and enhanced version of fullcalendar!
// Example:
var globalActiveView='agendaWeek';


// globalOpenFormMode
// Open new event form on 'single' or 'double' click.
// If undefined or not 'double', then 'single' is used.
// Example:
var globalOpenFormMode='single';


// globalTodoListFilterSelected
// This options sets the list of filters in todo list that are selected
// after login.
// Supported options:
// - 'filterAction'
// - 'filterProgress' (available only if globalAppleRemindersMode is disabled)
// - 'filterCompleted'
// - 'filterCanceled' (available only if globalAppleRemindersMode is disabled)
// NOTE: settings stored on the server (see settingsAccount) overwrite this
// option.
// Example:
var globalTodoListFilterSelected=['filterAction', 'filterProgress'];

// globalCalendarStartOfBusiness, globalCalendarEndOfBusiness
// These options set the start and end of business hours with 0.5 hour
// precision. Non-business hours are faded out in the calendar interface.
// If both variables are set to the same value then no fade out occurs.
// Example:
var globalCalendarStartOfBusiness=7;
var globalCalendarEndOfBusiness=15;


// globalDefaultEventDuration
// This option sets the default duration (in minutes) for newly created events.
// If undefined or null, globalCalendarEndOfBusiness value will be taken as
// a default end time instead.
// Example:
var globalDefaultEventDuration=60;


// globalAMPMFormat
// This option enables to use 12 hours format (AM/PM) for displaying time.
// NOTE: time format is predefined for each localization - use this option
// ONLY if you want to use custom time format (instead of the localization
// predefined one).
// Example:
//var globalAMPMFormat=false;


// globalTimeFormatBasic
// This option defines the time format information for events in month and
// multiweek views. If undefined or null then default value is used.
// If defined as empty string no time information is shown in these views.
// See http://arshaw.com/fullcalendar/docs/utilities/formatDate/ for exact
// formating rules.
// Example:
//var globalTimeFormatBasic='';


// globalTimeFormatAgenda
// This option defines the time format information for events in day and
// week views. If undefined or null then default value is used.
// If defined as empty string no time information is shown in these views.
// See http://arshaw.com/fullcalendar/docs/utilities/formatDate/ for exact
// formating rules.
// Example:
//var globalTimeFormatAgenda='';


// globalDisplayHiddenEvents
// This option defined whether events from unechecked calendars are displayed
// with certain transparency (true) or completely hidden (false).
// Example:
var globalDisplayHiddenEvents=false;


// globalTimeZoneSupport
// This option enables timezone support in the client.
// NOTE: timezone cannot be specified for all-day events because these don't
// have start and end time.
// If this option is disabled then local time is used.
// Example:
var globalTimeZoneSupport=false;


// globalTimeZone
// If timezone support is enabled, this option sets the default timezone.
// See timezones.js or use the following command to get the list of supported
// timezones (defined in timezones.js):
// grep "'[^']\+': {" timezones.js | sed -Ee "s#(\s*'|':\s*\{)##g"
// Example:
var globalTimeZone='Europe/Berlin';


// globalTimeZonesEnabled
// This option sets the list of available timezones in the interface (for the 
// list of supported timezones see the comment for the previous configuration
// option).
// NOTE: if there is at least one event/todo with a certain timezone defined,
// that timezone is enabled (even if it is not present in this list).
// Example:
//   var globalTimeZonesEnabled=['America/New_York', 'Europe/Berlin'];	
var globalTimeZonesEnabled=['Europe/Berlin'];


// globalRewriteTimezoneComponent
// This options sets whether the client will enhance/replace (if you edit an
// event or todo) the timezone information using the official IANA timezone
// database information (recommended).
// Example:
var globalRewriteTimezoneComponent=true;


// globalRemoveUnknownTimezone
// This options sets whether the client will remove all non-standard timezone
// names from events and todos (if you edit an event or todo)
// (e.g.: /freeassociation.sourceforge.net/Tzfile/Europe/Vienna)
// Example:
var globalRemoveUnknownTimezone=false;


// globalShowHiddenAlarms
// This option sets whether the client will show alarm notifications for
// unchecked calendars. If this option is enabled and you uncheck a calendar
// in the calendar list, alarm notifications will be temporary disabled for
// unchecked calendar(s).
// Example:
var globalShowHiddenAlarms=false;


// globalIgnoreCompletedOrCancelledAlarms
// This options sets whether the client will show alarm notifications for
// already completed or cancelled todos. If enabled then alarm notification
// for completed and cancelled todos are disabled.
// Example:
var globalIgnoreCompletedOrCancelledAlarms=true;


// globalMozillaSupport
// Mozilla automatically treats custom repeating event calculations as if
// the start day of the week is Monday, despite what day is chosen in settings.
// Set this variable to true to use the same approach, ensuring compatible
// event rendering in special cases.
// Example:
var globalMozillaSupport=true;


// globalCalendarColorPropertyXmlns
// This options sets the namespace used for storing the "calendar-color"
// property by the client.
// If true, undefined (or empty) "http://apple.com/ns/ical/" is used (Apple
// compatible). If false, then the calendar color modification functionality
// is completely disabled.
// Example:
//var globalCalendarColorPropertyXmlns=true;


// globalWeekendDays
// This option sets the list of days considered as weekend days (these
// are faded out in the calendar interface). Non-weekend days are automatically
// considered as business days.
// Sunday is 0, Monday is 1, etc.
// Example:
var globalWeekendDays=[0, 6];


// globalAppleRemindersMode
// If this option is enabled then then client will use the same approach
// for handling repeating reminders (todos) as Apple. It is STRONGLY
// recommended to enabled this option if you use any Apple clients for
// reminders (todos).
// Supported options:
// - 'iOS6'
// - 'iOS7'
// - true (support of the latest iOS version - 'iOS8')
// - false
// If this option is enabled:
// - RFC todo support is SEVERELY limited and the client mimics the behaviour
//   of Apple Reminders.app (to ensure maximum compatibility)
// - when a single instance of repeating todo is edited, it becomes an
//   autonomous non-repeating todo with NO relation to the original repeating
//   todo
// - capabilities of repeating todos are limited - only the first instance
//   is ever visible in the interface
// - support for todo DTSTART attribute is disabled
// - support for todo STATUS attribute other than COMPLETED and NEEDS-ACTION
//   is disabled
// - [iOS6 only] support for LOCATION and URL attributes is disabled
// Example:
var globalAppleRemindersMode=true;


// globalSubscribedCalendars
// This option specifies a list of remote URLs to ics files (e.g.: used
// for distributing holidays information). Subscribed calendars are
// ALWAYS read-only. Remote servers where ics files are hosted MUST
// return proper CORS headers (see readme.txt) otherwise this functionality
// will not work!
// NOTE: subsribed calendars are NOT "shared" calendars. For "shared"
// calendars see the delegation option in globalAccountSettings,
// globalNetworkCheckSettings and globalNetworkAccountSettings.
// List of properties used in globalSubscribedCalendars variable:
// - hrefLabel
//   This options defines the header string above the subcsribed calendars.
// - calendars
//   This option specifies an array of remote calendar objects with the
//   following properties:
//   - href
//     Set this option to the "full URL" of the remote calendar
//   - userAuth
//     NOTE: keep empty if remote authentication is not required!
//     - userName
//       Set the username you want to login.
//     - userPassword
//       Set the password for the given username.
//   - typeList
//     Set the list of objects you want to process from remote calendars;
//     two options are available:
//     - 'vevent' (show remote events in the interface) 
//     - 'vtodo' (show remote todos in the interface) 
//   - ignoreAlarm
//     Set this option to true if you want to disable alarm notifications
//     from the remote calendar.
//   - displayName
//     Set this option to the name of the calendar you want to see
//     in the interface.
//   - color
//     Set the calendar color you want to see in the interface.
//
// Example:



# rc_caldavzap
A plugin for Roundcube to include CalDAVZap in to the main GUI. CalDAVZap is included in the plugin folder since version 1.02 of this plugin. The latest version i could found is 0.13.2rc1 from https://www.inf-it.com/mlmmj/davclients/2015-11/0000004.html. All credits goes to inf-it.com, the developers of CalDAVZap.

There are some minor tweaks i have made to: 
1. the **config.js** This is now preconfigured for a SabreDAV / Baikal server on the same host. If you need a other setup, you can look in to the config.js and change the config to your needs.
2. **interfce.js** I have found a small glitch displaying the wrong state of availabillity. I have fixed this and reported it back to inf-it.com. They have included this fix in his internal GIT.
3. **index.html** This file is the original version, i have made a copy called rc.html and tweaked the loginform a little bit. Mostly in that way that i hide the login form and some other small parts but keep the same functionallity.

# Installation
1. copy plugin folder in to the plugins folder of your Roundcube installation
2. configure CalDAVZap config.js to your needs in the subdir of this plugin, you must use the same credentials for CalDAVZap and RC
3. activate Roundcube plugin in <rc_folder>/config/config.inc.php
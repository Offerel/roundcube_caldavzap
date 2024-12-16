# Roundcube CalDAVZap Plugin
A plugin for Roundcube to include CalDAVZap in to the main GUI. CalDAVZap is included in the plugin folder since version 1.02 of this plugin. The latest version of CalDAVZap I could found is 0.13.2rc1 from https://www.inf-it.com/mlmmj/davclients/2015-11/0000004.html. All credits goes to inf-it.com, the developers of CalDAVZap.

There are some minor tweaks i have made to: 
1. **interface.js** I have found a small glitch displaying the wrong state of availability. I have fixed this and reported it back to inf-it.com. They have included this fix in his internal GIT.
2. **index.html** This file is the original version, I have made a copy called `roundcube.html` and tweaked it to use my own CalDAVZap-Auth-Plugin.
3. **config_rc.js** includes a configuration for the new Auth Plugin
4. **main_rc.js** added the code for my own Auth Plugin
5. **/auth/plugins/roundcube** both files in this folder manage to login via a existing Roundcube session

# Issues
Please create issues in the [Codeberg.org](https://codeberg.org/Offerel/Roundcube_CalDavZAP/issues) issue tracker. I have disabled the issue tracker in GitHub.com because the repo there is only used as a workaround and for compatibility reasons.

# Contribution
If you would like to support this Plugin, you have various options. You can report bugs via the [Issue Tracker](https://codeberg.org/Offerel/Roundcube_CalDavZAP/issues). This helps me to fix these bugs as quickly as possible.

Another option is to help translate the plugin into other languages. This is relatively easy to do via Weblate. The following languages are currently available:
[![Status](https://translate.codeberg.org/widget/roundcube-caldavzap/roundcube-plugin/multi-auto.svg)](https://translate.codeberg.org/engage/roundcube-caldavzap/)

# Installation
1. extract the archive into the plugin folder of Roundcube `<roundcube>/plugins/` and rename it to `caldavzap`, so that the path reads at the end /path/to/DOCUMENT_ROOT/ROUNDCUBEDIR/plugins/caldavzap/.
2. activate the CalDAVZap plugin in <roundcube>/config/config.inc.php in the way that you add it to the active plugins array, like `$config['plugins'] = array('caldavzap');`
3. copy config.inc.php.dist to config.inc.php and configure at least the parameters `$config['caldav_server']` and `$config['caldav_path']`
# Roundcube CalDAVZap Plugin
A plugin for Roundcube to include CalDAVZap in to the main GUI. CalDAVZap is included in the plugin folder since version 1.02 of this plugin. The latest version i could found is 0.13.2rc1 from https://www.inf-it.com/mlmmj/davclients/2015-11/0000004.html. All credits goes to inf-it.com, the developers of CalDAVZap.

There are some minor tweaks i have made to: 
1. the **config.js** This is now preconfigured for a SabreDAV / Baikal server on the same host. If you need a other setup, you can look in to the config.js and change the config to your needs.
2. **interfce.js** I have found a small glitch displaying the wrong state of availabillity. I have fixed this and reported it back to inf-it.com. They have included this fix in his internal GIT.
3. **index.html** This file is the original version, i have made a copy called rc.html and tweaked the loginform a little bit. Mostly in that way that i hide the login form and some other small parts but keep the same functionallity.

# Changelog
**v1.0.4**
  - Add support for the Roundcube classic skin. Before that, it was only compatibel with larry. If you want your non-standard skin to be supported also, please drop me a line. If you have a dedicated calender icon you want to use, please let me know.

**v1.0.3**
  - Re-Submit plugin to GitHub after accidential delete it before. Sorry for that
  - Added latest CalDAVZap package to the plugin, no seperate download is needed.

**v1.0.2**
- Removed unused code

**v1.0**
- Initial Commit

# Installation
1. extract the archive into the plugin folder of Roundcube `<roundcube>/plugins/` and rename it to `caldavzap`, so that the path reads at the end /path/to/DOCUMENT_ROOT/ROUNDCUBEDIR/plugins/caldavzap/.
2. configure CalDAVZap config.js to your needs in the "caldavzap_0.13.2" subdir of this plugin. Keep in mind that your DAV source uses the same credentials as the Roundcube credentials
3. activate the CalDAVZap plugin in <roundcube>/config/config.inc.php in the way that you add it to the active plugins array, like `$config['plugins'] = array('caldavzap');`

<?php
/**
 * Roundcube CalDAVZap Plugin
 * Integrate CalDAVZap in to Roundcube
 *
 * @version 1.4.2
 * @author Offerel
 * @copyright Copyright (c) 2018, Offerel
 * @license GNU General Public License, version 3
 */

class caldavzap extends rcube_plugin
{
	public $task = '?(?!login|logout).*';

	function init()	{
		$rcmail = rcmail::get_instance();
		$this->load_config();
		$this->add_texts('localization/', true);
		$this->register_task('caldavzap');
		
		$this->add_button(array(
			'label'		=> 'caldavzap.caldavzap',
			'id'		=> '7ea3a1d1-8270-4985-aaaa-c8227e551e43',
			'command'	=> 'caldavzap',
			'class'		=> 'button-calendar',
			'classsel'	=> 'button-calendar button-selected',
			'innerclass'=> 'button-inner',
			'type'		=> 'link'
		), 'taskbar');
		
		$this->include_stylesheet($this->local_skin_path().'/caldavzap.min.css');
		
		if ($rcmail->task == 'caldavzap') {
			$this->register_action('index', array($this, 'action'));
		}
		
		$caldavzap_langs = array("cs_CZ", "da_DK", "de_DE", "en_US", "fr_FR", "it_IT", "ja_JP", "hu_HU", "nb_NO", "nl_NL", "sk_SK", "tr_TR", "ru_RU", "uk_UA", "zh_CN");
		$rc_lang = $rcmail->get_user_language();
		$rc_timezone = $rcmail->config->get('timezone');
		
		if(in_array($rc_lang,$caldavzap_langs)) {
			setcookie("rclang",$rc_lang);
			setcookie("rctz",$rcmail->config->get('timezone'));
		} else {
			setcookie("rclang","en_US");
		}
	}

	function action() {
		$rcmail = rcmail::get_instance();
		$rcmail->output->add_handlers(array('caldavzapcontent' => array($this, 'content'),));
		$rcmail->output->set_pagetitle($this->gettext('caldavzap'));
		$rcmail->output->send('caldavzap.caldavzap');
	}

	function content($attrib) {
		$rcmail = rcmail::get_instance();
		$attrib['src'] = $rcmail->config->get('caldavzap_url', false);
		if (empty($attrib['id']))
				$attrib['id'] = 'rcmailcaldavzapcontent';
		$attrib['name'] = $attrib['id'];
		return $rcmail->output->frame($attrib);
	}
}
?>

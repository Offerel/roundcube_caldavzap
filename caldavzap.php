<?php
/**
 * Roundcube CalDAVZap Plugin
 * Integrate CalDAVZap in to Roundcube
 *
 * @version 1.03
 * @author Offerel
 * @copyright Copyright (c) 2017, Offerel
 * @license GNU General Public License, version 3
 */

class caldavzap extends rcube_plugin
{
	public $task = '.*';

	function init()
	{
		$rcmail = rcmail::get_instance();
		$this->load_config();
		$this->add_texts('localization/', true);
		
		$this->register_task('caldavzap');
		
		$this->add_button(array(
			'label'      => 'caldavzap.caldavzap',
			'command'    => 'caldavzap',
			'class'      => 'button-calendar',
			'classsel'   => 'button-calendar button-selected',
			'innerclass' => 'button-inner'
		), 'taskbar');
		
		$this->include_stylesheet($this->local_skin_path() . '/caldavzap.css');
		
		if ($rcmail->task == 'caldavzap') {
			$this->register_action('index', array($this, 'action'));
			$this->login_caldavzap();
		}
	}
	
	private function login_caldavzap()
	{
		$rcmail = rcmail::get_instance();
		$this->include_script('client.js'); 
		$rcmail->output->set_env('caldavzap_username', $rcmail->user->get_username());
		$rcmail->output->set_env('caldavzap_password', $rcmail->get_user_password());
		$rcmail->output->set_env('caldavzap_url', $rcmail->config->get('caldavzap_url', false));
		$rcmail->output->set_env('skinpath', $this->local_skin_path());
	}
	
	function action()
    	{
        	$rcmail = rcmail::get_instance();
        	// register UI objects
        	$rcmail->output->add_handlers(array('caldavzapcontent' => array($this, 'content'),));
			$rcmail->output->set_pagetitle($this->gettext('caldavzap'));
        	$rcmail->output->send('caldavzap.caldavzap');
    	}

	function content($attrib)
    	{
        	$rcmail = rcmail::get_instance();
			$attrib['src'] = $rcmail->config->get('caldavzap_url', false);
        	if (empty($attrib['id']))
            		$attrib['id'] = 'rcmailcaldavzapcontent';
        	$attrib['name'] = $attrib['id'];
        	return $rcmail->output->frame($attrib);
    	}
}
?>

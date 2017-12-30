<?php
	define('INSTALL_PATH', realpath(__DIR__ . '/../../../../') . '/');
	require_once INSTALL_PATH . 'program/include/iniset.php';
	$rcmail = rcmail::get_instance();
	
	// Server base URL
	$pluginconfig['base_url']=(empty($_SERVER['HTTPS']) ? 'http' : 'https').'://'.$rcmail->config->get('caldav_server');

	// Default values are usually OK
	//  for Davical:
	$pluginconfig['request']=$rcmail->config->get('caldav_path');	// change only if your Davical is not installed into server root directory
	//  for Lion server:
	//$pluginconfig['request']='/principals/users';

	$pluginconfig['timeout']=30;
?>
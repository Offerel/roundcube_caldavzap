<?php
require_once(dirname(__FILE__).'/roundcube_conf.inc');
define('INSTALL_PATH', realpath(__DIR__ . '/../../../../../') . '/');
require_once(INSTALL_PATH . 'program/include/iniset.php');

	function roundcube_authenticate()
	{
		global $pluginconfig;
		$rcmail = rcmail::get_instance();

		if(!empty($rcmail->user->ID))
		{
			$user = $rcmail->user->get_username();
			$pw = $rcmail->get_user_password();
			
			preg_match('#(https?)://([^/:]+)((?::[0-9]+)?)#i', $pluginconfig['base_url'], $matches);
			$hostname_clean=$matches[2];
			if($matches[1]=='https')
				$hostname='ssl://'.$matches[2];
			else
				$hostname=$matches[2];

			if($matches[3]=='')
			{
				if($matches[1]=='http')
					$port=80;
				else if($matches[1]=='https')
					$port=443;
			}
			else
				$port=substr($matches[3],1);
			
			$fp=fsockopen($hostname, $port, $errno, $errstr, $pluginconfig['timeout']);

			if(!$fp)
			{
				echo "$errstr ($errno)<br />\n";
				return -2;
			}
			else
			{
				$request="<?xml version=\"1.0\" encoding=\"utf-8\"?><A:propfind xmlns:A=\"DAV:\"><A:prop><A:current-user-principal/></A:prop></A:propfind>";

				$out="PROPFIND ".$pluginconfig['request']." HTTP/1.1\r\n";
				$out.="Host: $hostname_clean\r\n";
				$out.="Authorization: Basic ".base64_encode($user.':'.$pw)."\r\n";
				$out.="Depth: 0\r\n";
				$out.="Content-Type: text/xml; charset=\"utf-8\"\r\n";
				$out.="Content-Length:". strlen($request)."\r\n\r\n";
				$out.=$request;
				fwrite($fp, $out);

				$result='';
				if(!feof($fp))
		    		$result.=fgets($fp);
				fclose($fp);

				if(strpos($result, 'HTTP/1.1 207')===0)
					return 1;	// auth successful
				else
					return -1;	// auth unsuccessful
			}
		}
		die('Not logged in. roundcube.inc');
		return 0;	// empty username or password
	}
?>
<?php
/**
 * Roundcube CalDAVZap Plugin
 * Integrate CalDAVZap in to Roundcube
 *
 * @version 1.5.7
 * @author Offerel
 * @copyright Copyright (c) 2024, Offerel
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
		
		$this->include_stylesheet($this->local_skin_path().'/caldavzap_button.css');
		$this->add_button(array(
			'label'		=> 'caldavzap.caldavzap',
			'id'		=> '7ea3a1d1-8270-4985-aaaa-c8227e551e43',
			'command'	=> 'caldavzap',
			'class'		=> 'button-calendar',
			'classsel'	=> 'button-calendar button-selected',
			'innerclass'=> 'button-inner',
			'type'		=> 'link'
		), 'taskbar');

		$this->include_stylesheet($this->local_skin_path().'/caldavzap.css');

		if ($rcmail->task == 'caldavzap') {
			
			$this->include_script('addon.js');
			$this->register_action('index', array($this, 'action'));
			$rcmail->output->set_env('refresh_interval', 0);

			$caldavzap_langs = array("cs_CZ", "da_DK", "de_DE", "en_US", "fr_FR", "it_IT", "ja_JP", "hu_HU", "nb_NO", "nl_NL", "sk_SK", "tr_TR", "ru_RU", "uk_UA", "zh_CN");
			$rc_lang = $rcmail->get_user_language();
			$rc_timezone = $rcmail->config->get('timezone');
			$cdz_standardview = $rcmail->config->get('cdz_standardview');
			$cdz_weekstart = intval($rcmail->config->get('cdz_weekstart'));
			$cdz_businesstart = intval($rcmail->config->get('cdz_businesstart'));
			$cdz_businessend = intval($rcmail->config->get('cdz_businessend'));
			$cdz_weekendays = $rcmail->config->get('cdz_weekendays');
			$cdz_timezonesupport = boolval($rcmail->config->get('cdz_tzsupport'));
			$cdz_rewritetimezone = boolval($rcmail->config->get('cdz_rewritetz'));
			$cdz_removetimezone = boolval($rcmail->config->get('cdz_removetz'));
			$cdz_ignoreserver = boolval($rcmail->config->get('cdz_ignserver'));
			$cdz_options = ['cdz_ln' => (in_array($rc_lang,$caldavzap_langs)) ? $rc_lang:'en_US', 
							'cdz_tz' => $rc_timezone,
							'cdz_wv' => $cdz_standardview,
							'cdz_fd' => $cdz_weekstart,
							'cdz_sb' => $cdz_businesstart,
							'cdz_eb' => $cdz_businessend,
							'cdz_wd' => $cdz_weekendays,
							'cdz_ts' => $cdz_timezonesupport,
							'cdz_tr' => $cdz_rewritetimezone,
							'cdz_td' => $cdz_removetimezone,
							'cdz_is' => $cdz_ignoreserver
							];

			setcookie('cdz', json_encode($cdz_options), 0, parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '.'.$_SERVER['HTTP_HOST'], true);
		}
		
		if($rcmail->task == 'settings') {
			$this->add_hook('preferences_sections_list', array($this, 'cal_preferences_sections_list'));
			$this->add_hook('preferences_list', array($this, 'preferences_list'));
			$this->add_hook('preferences_save', array($this, 'preferences_save'));
			$this->include_script('addon.js');
		}
	}

	function cal_preferences_sections_list($p) {
		$p['list']['caldavzap'] = array('id' => 'caldavzap', 'section' => $this->gettext('caldavzap'));
		return($p);
	}
	
	function preferences_list($p) {
		if ($p['section'] != 'caldavzap') {
            return $p;
		}

		$rcmail = rcmail::get_instance();
		
		$p['blocks']['main']['name']=$this->gettext('mainoptions');

		$field_id='cdz_ignserver';
		$ignsrv = new html_checkbox(array(	'name'	=> 'cdz_ignsrv',
											'id'	=> 'cdz_ignsrv',
											'value' => 1
										));

		$cdz_ignsrv = $rcmail->config->get('cdz_ignserver');
		$p['blocks']['main']['options']['cdz_ignserver'] = array(
														'title'=> html::label($field_id, "Property Storage"),
														'content'=> $ignsrv->show($cdz_ignsrv)."Ignore Server Settings</br>");

		$field_id='cdz_standardview';
		$select   = new html_select(array('name' => 'cdz_standardview', 'id' => $field_id));
		foreach (array('month', 'multiWeek', 'agendaWeek', 'agendaDay', 'todo') as $m) {$select->add($this->gettext('cdz_'.$m), $m);}
		$p['blocks']['main']['options']['cdz_standardview'] = array(
														'title'=> html::label($field_id, $this->gettext('cdz_standardview')),
														'content'=> $select->show($rcmail->config->get('cdz_standardview')));

		$field_id='cdz_weekstart';
		$select   = new html_select(array('name' => 'cdz_weekstart', 'id' => $field_id));
		foreach (array(0, 1, 2, 3, 4, 5, 6) as $d) { $select->add($this->gettext('cdz_day_'.$d), $d); }
		$p['blocks']['main']['options']['cdz_weekstart'] = array(
														'title'=> html::label($field_id, $this->gettext('cdz_weekstart')),
														'content'=> $select->show(intval($rcmail->config->get('cdz_weekstart'))));

		$field_id='cdz_worktime';
		$select_s  = new html_select(array('name' => 'cdz_businesstart', 'id' => 'cdz_businesstart'));
		$select_e  = new html_select(array('name' => 'cdz_businessend', 'id' => 'cdz_businessend'));
		foreach (array(5, 6, 7, 8, 9, 10, 11) as $sb) { $select_s->add($this->gettext('cdz_time_'.$sb), $sb); }
		foreach (array(12, 13, 14, 15, 16, 17, 18) as $se) { $select_e->add($this->gettext('cdz_time_'.$se), $se); }
		$p['blocks']['main']['options']['cdz_worktime'] = array(
														'title'=> html::label($field_id, $this->gettext('cdz_worktime')),
														'content'=> $select_s->show(intval($rcmail->config->get('cdz_businesstart'))).' - '.$select_e->show(intval($rcmail->config->get('cdz_businessend')))
														);

		$field_id='cdz_weekendays';
		$inputw0 = new html_checkbox(array(	'name'	=> 'cdz_wday_0',
											'id'	=> 'cdz_wday_0',
											'onchange' => 'maxselect(this,2)',
											'class'	=> 'cdz_weekendays',
											'value' => 1));
		$inputw1 = new html_checkbox(array(	'name'	=> 'cdz_wday_1',
											'id'	=> 'cdz_wday_1',
											'onchange' => 'maxselect(this,2)',
											'class'	=> 'cdz_weekendays',
											'value' => 1));
		$inputw2 = new html_checkbox(array('name'	=> 'cdz_wday_2',
											'id'	=> 'cdz_wday_2',
											'onchange' => 'maxselect(this,2)',
											'class'	=> 'cdz_weekendays',
											'value' => 1));
		$inputw3 = new html_checkbox(array('name'	=> 'cdz_wday_3',
											'id'	=> 'cdz_wday_3',
											'onchange' => 'maxselect(this,2)',
											'class'	=> 'cdz_weekendays',
											'value' => 1));
		$inputw4 = new html_checkbox(array('name'	=> 'cdz_wday_4',
											'id'	=> 'cdz_wday_4',
											'onchange' => 'maxselect(this,2)',
											'class'	=> 'cdz_weekendays',
											'value' => 1));
		$inputw5 = new html_checkbox(array('name'	=> 'cdz_wday_5',
											'id'	=> 'cdz_wday_5',
											'onchange' => 'maxselect(this,2)',
											'class'	=> 'cdz_weekendays',
											'value' => 1));
		$inputw6 = new html_checkbox(array('name'	=> 'cdz_wday_6',
											'id'	=> 'cdz_wday_6',
											'onchange' => 'maxselect(this,2)',
											'class'	=> 'cdz_weekendays',
											'value' => 1));

		$cdz_weekendays = explode(",",$rcmail->config->get('cdz_weekendays'));
		for($i=0; $i<7; $i++) {
			if(in_array($i,$cdz_weekendays )) {
				${"c".$i} = "1";
			}
			else {
				${"c".$i} = "0";
			}
		}

		$p['blocks']['main']['options']['cdz_weekendays'] = array(	'title'=> html::label($field_id, $this->gettext('cdz_weekendays')),
																	'content'=> $inputw0->show($c0)." ".$this->gettext('cdz_day_0')."</br>".
																				$inputw1->show($c1)." ".$this->gettext('cdz_day_1')."</br>".
																				$inputw2->show($c2)." ".$this->gettext('cdz_day_2')."</br>".
																				$inputw3->show($c3)." ".$this->gettext('cdz_day_3')."</br>".
																				$inputw4->show($c4)." ".$this->gettext('cdz_day_4')."</br>".
																				$inputw5->show($c5)." ".$this->gettext('cdz_day_5')."</br>".
																				$inputw6->show($c6)." ".$this->gettext('cdz_day_6')."</br>"
																);

		$field_id='tzone';
		$cdz_tzselect = new html_select([
										'name'  => 'cdz_tzselect',
										'id'    => 'cdz_tzselect',
										'class' => 'custom-select'
										]);

		$cdz_tzselect->add($rcmail->gettext('autodetect'), 'auto');
		$zones = [];
		$timezone_identifiers = DateTimeZone::listIdentifiers();
		$utcTime = new DateTime('now', new DateTimeZone('GMT'));
		foreach($timezone_identifiers as $key => $timezone) {
			$tz = new DateTimeZone($timezone);
			$zones[$key]['offset'] = (int)$tz->getOffset($utcTime);
			$zones[$key]['name'] = $timezone;
		}

		usort($zones, function($a, $b) {
			return ($a['offset'] == $b['offset']) ? strcmp($a['name'], $b['name']):$a['offset'] - $b['offset'];
		});

		$azone = $rcmail->config->get('timezone');

		foreach ($zones as $zone) {
			$sign = ($zone['offset'] > 0) ? '+' : '-';
			$offset = gmdate('H:i', abs($zone['offset']));
			$cdz_tzselect->add('(GMT '.$sign.$offset.') '.$zone['name']);
			if($azone == $zone['name']) $azone = '(GMT '.$sign.$offset.') '.$zone['name'];
		}

		$inputt1 = new html_checkbox(array(	'name'	=> 'cdz_gtzs',
											'id'	=> 'cdz_gtzs',
											'value' => 1
										));

		$inputt2 = new html_checkbox(array(	'name'	=> 'cdz_grtz',
											'id'	=> 'cdz_grtz',
											'value' => 1
										));

		$inputt3 = new html_checkbox(array(	'name'	=> 'cdz_gdtz',
											'id'	=> 'cdz_gdtz',
											'value' => 1
										));

		$cdz_gtzs = $rcmail->config->get('cdz_tzsupport');
		$cdz_grtz = $rcmail->config->get('cdz_rewritetz');
		$cdz_gdtz = $rcmail->config->get('cdz_removetz');

		$p['blocks']['main']['options']['tzone'] = array(
														'title'=> html::label($field_id, $this->gettext('cdz_timezone')),
														'content'=> $cdz_tzselect->show($azone)."</br>".
																	$inputt1->show($cdz_gtzs)." ".$this->gettext('cdz_tzsupport')."</br>".
																	$inputt2->show($cdz_grtz)." ".$this->gettext('cdz_rewritetz')."</br>".
																	$inputt3->show($cdz_gdtz)." ".$this->gettext('cdz_removetz')."</br>"
													);

		return $p;
	}

	function preferences_save($p) {
		if ($p['section'] == 'caldavzap') {
			for($i=0; $i < 7; $i++) {
				if(rcube_utils::get_input_value('cdz_wday_'.$i, rcube_utils::INPUT_POST) == 1) {
					$checked[] = $i;
				}
			}

			$tz = rcube_utils::get_input_value('cdz_tzselect', rcube_utils::INPUT_POST);
			$tz = substr($tz, strpos($tz, ') ',0) + 2);

            $p['prefs'] = array(
                'cdz_standardview'	=> rcube_utils::get_input_value('cdz_standardview', rcube_utils::INPUT_POST),
                'cdz_weekstart'		=> intval(rcube_utils::get_input_value('cdz_weekstart', rcube_utils::INPUT_POST)),
                'cdz_businesstart'	=> intval(rcube_utils::get_input_value('cdz_businesstart', rcube_utils::INPUT_POST)),
                'cdz_businessend'	=> intval(rcube_utils::get_input_value('cdz_businessend', rcube_utils::INPUT_POST)),
				'cdz_weekendays'	=> implode(",", $checked),
				'cdz_tzsupport'		=> intval(rcube_utils::get_input_value('cdz_gtzs', rcube_utils::INPUT_POST)),
				'cdz_rewritetz'		=> intval(rcube_utils::get_input_value('cdz_grtz', rcube_utils::INPUT_POST)),
				'cdz_removetz'		=> intval(rcube_utils::get_input_value('cdz_gdtz', rcube_utils::INPUT_POST)),
				'timezone'			=> $tz,
				'cdz_ignserver'		=> intval(rcube_utils::get_input_value('cdz_ignsrv', rcube_utils::INPUT_POST))
            );
		}

        return $p;
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
		if (empty($attrib['id'])) $attrib['id'] = 'rcmailcaldavzapcontent';
		$attrib['name'] = $attrib['id'];
		return $rcmail->output->frame($attrib);
	}
}
?>

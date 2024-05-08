<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $contact = $_POST["contact"];
    $project = $_POST["project"];
    $utm_form_name = $_POST["utm_form_name"];
    $utm_source = $_POST["utm_source"];
    $network = $_POST["network"];
    $campaign_id = $_POST["campaign_id"];
    $adgroup_id = $_POST["adgroup_id"];
    $gclid = $_POST["gclid"];
    $device = $_POST["device"];
    $creative = $_POST["creative"];
    $placement = $_POST["placement"];
    $extension_id = $_POST["extension_id"];
    $target_id = $_POST["target_id"];
    $loc_interest_ms = $_POST["loc_interest_ms"];
    $loc_physical_ms = $_POST["loc_physical_ms"];
    $device_model = $_POST["device_model"];
    $keyword = $_POST["keyword"];
    $match_type = $_POST["match_type"];
    $adposition = $_POST["adposition"];
    $source_id = $_POST["source_id"];
    $target = $_POST["target"];
    
    $apikey = "kG6vgYgUqEmnHUtHX15pNQ";
    $url = 'https://www.realtybucket.com/webhook/website_form_data';
    $myvars = 'apikey=' . $apikey . '&name=' . $name . '&email=' . $email . '&contact=' . $contact . '&project=' . $project . '&utm_form_name=' . $utm_form_name . '&utm_source=' . $utm_source . '&network=' . $network . '&campaign_id=' . $campaign_id . '&adgroup_id=' . $adgroup_id . '&gclid=' . $gclid . '&device=' . $device . '&creative=' . $creative. '&placement=' . $placement . '&extension_id=' . $extension_id . '&target_id=' . $target_id . '&loc_interest_ms=' . $loc_interest_ms . '&loc_physical_ms=' . $loc_physical_ms . '&device_model=' . $device_model . '&keyword=' . $keyword . '&match_type=' . $match_type . '&adposition=' . $adposition . '&source_id=' . $source_id . '&target=' . $target;
    $ch = curl_init( $url );
    curl_setopt( $ch, CURLOPT_POST, 1);
    curl_setopt( $ch, CURLOPT_POSTFIELDS, $myvars);
    curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt( $ch, CURLOPT_HEADER, 0);
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec( $ch );
    header("Location:https://dreamone.co.in/thankyoufordownload.php?email=" . $email . "&contact=" . $contact);
?>
<?php
    $name = $_POST["fullname"];
    $email = $_POST["email"];
    $contact = $_POST["phone"];
    $comments = $_POST["comments"];
    $project = "Dream Gurukul";
    $utm_form_name = "Enquiry Form";
    $utm_source = $_POST["utm_source"];
    $utm_campaign = $_POST["utm_campaign"];
    $utm_medium = $_POST["utm_medium"];
    $utm_content = $_POST["utm_content"];
    $utm_term = $_POST["utm_term"];
    $network = $_POST["network"];
    $campaign_id = $_POST["campaign_id"];
    $adgroup_id = $_POST["adgroup_id"];
    $gclid = $_POST["gclid"];
    $device = $_POST["device"];
    $creative = $_POST["creative"];
    $placement = $_POST["placement"];
    $target_id = $_POST["target_id"];
    $loc_interest_ms = $_POST["loc_interest_ms"];
    $loc_physical_ms = $_POST["loc_physical_ms"];
    $device_model = $_POST["device_model"];
    $keyword = $_POST["keyword"];
    $match_type = $_POST["match_type"];
    $mobile = $_POST["mobile"];
    $apikey = "kG6vgYgUqEmnHUtHX15pNQ";
    
    $url = 'https://www.realtybucket.com/webhook/website_form_data';
    $data = array('apikey' => $apikey, 'name' => $name, 'email' => $email, 'contact' => $contact, 'comments' => $comments, 'project' => $project, 'utm_form_name' => $utm_form_name, 'utm_source' => $utm_source, 'utm_campaign' => $utm_campaign, 'utm_medium' => $utm_medium, 'utm_content' => $utm_content, 'utm_term' => $utm_term,'network' => $network, 'campaign_id' => $campaign_id, 'adgroup_id' => $adgroup_id, 'gclid' => $gclid, 'device' => $device, 'creative' => $creative, 'placement' => $placement, 'target_id' => $target_id, 'loc_interest_ms' => $loc_interest_ms, 'loc_physical_ms' => $loc_physical_ms, 'device_model' => $device_model, 'keyword' => $keyword, 'match_type' => $match_type, 'mobile' => $mobile);
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    header('Location: thankyou.php?email=' . $email . "&contact=" . $contact);
?>
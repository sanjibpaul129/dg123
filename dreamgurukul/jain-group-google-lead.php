<?php 
$Google_data = file_get_contents("php://input");
$decoded_data= json_decode($Google_data, true);
$name=$decoded_data["user_column_data"][0]["string_value"];
$phone=$decoded_data["user_column_data"][1]["string_value"];
$email=$decoded_data["user_column_data"][2]["string_value"];


//echo "<pre>";print_r($_SERVER);
if($name && $phone && $email){
	$curl = curl_init();
  	curl_setopt_array($curl, 
  		array(
		    CURLOPT_URL => 'https://www.realtybucket.com/webhook/website_form_data?apikey=kG6vgYgUqEmnHUtHX15pNQ&name=' . $name . '&email=' . $email . '&contact=' . $phone . '&project=Dream%20Gurukul&utm_form_name=Discovery%20Leadgen&utm_source=discovery',
		    CURLOPT_RETURNTRANSFER => true,
		    CURLOPT_ENCODING => '',
		    CURLOPT_MAXREDIRS => 10,
		    CURLOPT_TIMEOUT => 0,
		    CURLOPT_FOLLOWLOCATION => true,
		    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		    CURLOPT_CUSTOMREQUEST => 'POST',
  		)
  	);
  	$response = curl_exec($curl);
  	curl_close($curl);
  	echo json_encode(array('status'=>'success'));
  	$servername = "localhost";
	$username = "root";
	$password = "Apple123!@#";
	$dbname = "jaingroup_enquirydb";
  	// Create connection
  	$conn = new mysqli($servername, $username, $password, $dbname);
  	$query = "INSERT INTO `enquiries`(`name`, `email`, `phone`, `comments`, `utmsource`, `utmcampaign`, `utmmedium`, `utmterm`) VALUES ('" . $name . "','" . $email . "','" . $phone . "','".$response."','Discovery Leadgen','','','')";
  	$conn->query($query);
	
} else {
	echo "Something Went Wrong! Please try again!";
}
die;
?>


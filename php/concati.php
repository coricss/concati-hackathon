<?php

header('Access-Control-Allow-Origin: http://localhost:3000');

class concati{


  public $key = "LXoppirtI9IfzrURzX";
  public $secret = "6oM39TnsntZZ2zW9K5lK6PbltaMkKPQbcq5qa9F2XF432CwpNqdkrtRk8e7NBIFtPS6ZS8Bx78R0lYulxL7XzVzX";

  public $clientkey = "5HG0J4Sv1s4Ikx7kTC";
  public $clientsecret = "MQt17YiKSdBHyduKve06vOxaFHpg4vq7rQ3vRIh8l7fNGsDzYcsStIF0kN4Cx1s46qguEkaTAsZeXzfNqK8QGAJ6";
  

  public $endpoint = "https://api.concati.com/";
  public $bearerToken = false;


  public function ApiCurl($urlTrail ,$postFields, $requestType = "POST", $json = true) {

    $url = $this->endpoint.$urlTrail;
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    $headersRequest = array(
      "accept: application/json",
      "Content-Type: application/json",
    );
    if ( $this->bearerToken != false) {
      $headersRequest[] =  "Authorization: Bearer ".$this->bearerToken;
    }
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headersRequest);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $requestType);
    curl_setopt($ch, CURLOPT_POSTFIELDS,json_encode($postFields));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $server_output = curl_exec($ch);
    $jsonArrayResponse = json_decode($server_output,true);
    curl_close($ch);
    return $jsonArrayResponse;
  }
  //ADMIN
  public function Auth(){
    $response = $this->ApiCurl( "wallets/auth", ['key' => $this->key,'secret' => $this->secret]);
    $this->bearerToken = $response['access_token'];
    if($response['code'] == '200') {
      return $this->bearerToken;
    }
    var_dump('failed');
    return false;
  }

  //CLIENT 
  public function AuthClient(){
    $response = $this->ApiCurl( "wallets/auth", ['key' => $this->clientkey,'secret' => $this->clientsecret]);
    $this->bearerToken = $response['access_token'];
    if($response['code'] == '200') {
      return $this->bearerToken;
    }
    var_dump('failed');
    return false;
  }

  //create Account
  public function createAccount($data){
    $headersRequest = array(
        "accept: application/json",
        "Content-Type: application/json",
    );
    $headersRequest[] =  "Authorization: Bearer ".$this->Auth();
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_HTTPHEADER, $headersRequest);
    curl_setopt($ch, CURLOPT_URL,$this->endpoint."users/accounts");
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST,"POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS,$data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,TRUE);

    $response = curl_exec($ch);
    $err = curl_error($ch);
    $response = (json_decode($response , true));
    curl_close ($ch);

    if ($err) {
	    return "cURL Error #:" . $err;
    } else {
      return $response;
    }
  }

  //forgot password
  public function forgotPassword($email){
    $headersRequest = array(
        "accept: application/json",
        "Content-Type: application/json",
    );
    $headersRequest[] =  "Authorization: Bearer ".$this->AuthClient();
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_HTTPHEADER, $headersRequest);
    curl_setopt($ch, CURLOPT_URL,$this->endpoint."users/forgot_password");
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST,"POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS,$email);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,TRUE);

    $response = curl_exec($ch);
    $err = curl_error($ch);
    $response = (json_decode($response , true));
    curl_close ($ch);

    if ($err) {
	    return "cURL Error #:" . $err;
    } else {
        return $response;
    }
  }


  //login
  public function login($data){
    $client = false;

  $headersRequest = array(
      "accept: application/json",
      "Content-Type: application/json",
  );
  $headersRequest[] =  "Authorization: Bearer ".(($client)? $this->Auth() :$this->AuthClient());
  $ch = curl_init();

  curl_setopt($ch, CURLOPT_HTTPHEADER, $headersRequest);
  curl_setopt($ch, CURLOPT_URL,$this->endpoint."users/login");
  curl_setopt($ch, CURLOPT_CUSTOMREQUEST,"POST");
  curl_setopt($ch, CURLOPT_POSTFIELDS,$data);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER,TRUE);

  $response = curl_exec($ch);
  $err = curl_error($ch);
  $response = (json_decode($response , true));
  curl_close ($ch);

  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
      return $response;
  }

  }

  //policy
  public function getPolicy(){
      $admin = true;
  
    $headersRequest = array(
        "accept: application/json",
        "Content-Type: application/json",
    );
    $headersRequest[] =  "Authorization: Bearer ".(($admin)? $this->Auth() :$this->AuthClient());
    $ch = curl_init();
  
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headersRequest);
    curl_setopt($ch, CURLOPT_URL,$this->endpoint."consents/applications/10787442-813b-4581-83c9-c9297a5bcd35/policies");
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST,"GET");
    // curl_setopt($ch, CURLOPT_POSTFIELDS,$data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,TRUE);
  
    $response = curl_exec($ch);
    $err = curl_error($ch);
    $response = (json_decode($response , true));
    curl_close ($ch);
    // var_dump($response);
    if ($err) {
      return "cURL Error #:" . $err;
    } else {
        return $response['policies'][0]['text'];
    }
  
  }

    //set Ratings
  public function setRate(){
    $headersRequest = array(
      "accept: application/json",
      "Content-Type: application/json",
  );
  $headersRequest[] =  "Authorization: Bearer ".(($admin)? $this->Auth() :$this->AuthClient());
  $ch = curl_init();

  curl_setopt($ch, CURLOPT_HTTPHEADER, $headersRequest);
  curl_setopt($ch, CURLOPT_URL,$this->endpoint."feedback/survey/{survey_id}/answer");
  curl_setopt($ch, CURLOPT_CUSTOMREQUEST,"GET");
  // curl_setopt($ch, CURLOPT_POSTFIELDS,$data);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER,TRUE);

  $response = curl_exec($ch);
  $err = curl_error($ch);
  $response = (json_decode($response , true));
  curl_close ($ch);
  if ($err) {
    return "cURL Error #:" . $err;
  } else {
      return $response['policies'][0]['text'];
  }



  }


  



}


?>

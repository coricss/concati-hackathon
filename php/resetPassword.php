<?php 
require("concati.php");
header('Access-Control-Allow-Origin: http://localhost:3000');

    $email = $_GET['email'];
    $data =json_encode(array("email"=> $email));
    $class = new concati();
    $res = $class->forgotPassword($data);

    echo json_encode($res);

?>
<?php
require("concati.php");

header('Access-Control-Allow-Origin: http://localhost:3000');

    $username = $_GET["email"];
    $password = $_GET["password"];
    $data =json_encode(array("username"=> $username,"password"=>$password));
    $class = new concati();
    $res = $class->login($data);

    echo json_encode($res);


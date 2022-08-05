<?php
require("concati.php");


    $email = $_GET['email'];
    $password = $_GET['password'];
    $mobile = $_GET['mobile'];
    // $confirmPassword = $_GET['confirmPassword'];

    $data =json_encode(array("email"=> $email,"password"=>$password,"mobile"=>$mobile));
    $class = new concati();
    $res = $class->createAccount($data);

    echo json_encode($res);
       
    

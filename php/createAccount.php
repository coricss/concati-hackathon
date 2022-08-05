<?php
require("concati.php");


if(isset($_POST['createAccount'])){
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];



    if($password===$confirmPassword){


    $data =json_encode(array("email"=> $email,"password"=>$password));
    $class = new concati();
    $account = $class->createAccount($data);

        if($account['code']==200){
            echo "<script>alert('".$account['message']."')</script>";
            echo "<script>window.location.href = 'http://localhost:3000/register'</script>";
        }
        else{
            echo $account['message'] ;
        }
    }
    else{
        echo "<script>alert('Password Do Not Match')</script>";
    }
    
}

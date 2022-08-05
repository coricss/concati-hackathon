<?php
require("concati.php");

header('Access-Control-Allow-Origin: http://localhost:3000');

    $username = $_POST['username'];
    $password = $_POST['password'];
    return  "<script>alert('eaaa')</script>";
    $data =json_encode(array("username"=> $username,"password"=>$password));
    $class = new concati();
    $res = $class->login($data);
    // echo $res['message'] ;

    if($res['code']==200){
        echo "<script>alert('".$res['message']."')</script>";
        echo "<script>localStorage.setItem('username',".$username.");</script>";
        return json_encode($res); 
        echo "<script>window.location.href = 'http://localhost:3000/inbox'</script>";

    }
    else{
        echo "<script>alert('".$res['message']."')</script>";
        // echo "<script>window.location.href = 'http://localhost:3000/login?message = ".$res['message']."'</script>";
        return json_encode($res);
    }

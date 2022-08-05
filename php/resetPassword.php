<?php 
require("concati.php");
header('Access-Control-Allow-Origin: http://localhost:3000');




if(isset($_POST['resetPassword'])){
    $email = $_POST['email'];
    
    $data =json_encode(array("email"=> $email));
    $class = new concati();
    $account = $class->forgotPassword($data);

    if($account['code']==200){
        echo "<script>alert('".$account['message']."')</script>";
        echo "<script>window.location.href = 'http://localhost:3000/login'</script>";
    }
    else {
        header('Access-Control-Allow-Origin: http://localhost:3000/password_reset');
        echo $account['message'];
    }
} 

?>
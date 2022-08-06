<?php
require("concati.php");

header('Access-Control-Allow-Origin: http://localhost:3000');

    $rate = $_GET["rate"];
    $data =json_encode(array("rate?"=> $rate));
    $class = new concati();
    $res = $class->login($data);

    echo json_encode($res);


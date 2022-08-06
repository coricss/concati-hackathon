<?php
require("concati.php");

header('Access-Control-Allow-Origin: http://localhost:3000');

    $rate = $_GET["rate"];
    // $rate = 5;

    $data = array (
        'user_id' => 'f41d64e1-5c9a-45c3-9bcc-3d671fb268d5',
        'answers' => 
        array (
          0 => 
          array (
            'answer' => 
            array (
              0 => strval($rate),
            ),
            'question_id' => 'b1f9c1ff-71ef-4fef-a47d-beda85b6c730',
          ),
        ),
    );


    // var_dump(json_encode($data));

    $data =($data);
    $class = new concati();
    $res = $class->setRate(json_encode($data));

    echo json_encode($res);


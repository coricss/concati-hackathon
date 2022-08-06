<?php
require("concati.php");

header('Access-Control-Allow-Origin: http://localhost:3000');

    // $rate = $_GET["rate"];
    $rate = 5;

    $data = array (
        'user_id' => 'f41d64e1-5c9a-45c3-9bcc-3d671fb268d5',
        'answers' => 
        array (
          0 => 
          array (
            'answer' => 
            array (
              0 => $rate,
            ),
            'question_id' => 'ebdec9fc-5ca3-415c-bac6-345878475644',
          ),
        ),
    );


    // var_dump(json_encode($data));

    $data =json_encode($data);
    $class = new concati();
    $res = $class->setRate($data);

    echo json_encode($res);


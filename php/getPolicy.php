<?php
require("concati.php");


// if(isset($_POST['getPolicy'])){
    $class = new concati();
    $policy = $class->getPolicy();
    echo $policy;
// }

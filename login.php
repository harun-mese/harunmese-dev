<?php
// Start the session


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $_POST['user'];
    $pass = $_POST['password'];
    
    if ($name == 'harun' && $pass == '1234') {
        session_start();
        $_SESSION["user"] = $name;
        $_SESSION["pass"] = $pass;

        header("Location: /editable.php");
        exit;
    }
    else{
        header("Location: /");
        exit;
    }
} else {
    header("Location: /");
    exit;
}







?>
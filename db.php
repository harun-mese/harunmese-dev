<?php
include_once 'config.php' ;

  try {
    $conn = new PDO("mysql:host=$servername;dbname=editable", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "CREATE TABLE posts (
         id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `category` varchar(100) NOT NULL,
        `title` varchar(300) NOT NULL,
        `description` varchar(1000) NOT NULL,
        `content` text NOT NULL,
        `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `keywords` varchar(300) NOT NULL
        )";

        // use exec() because no results are returned
        $conn->exec($sql);
  } catch(PDOException $e) {
    try {
        $conn = new PDO("mysql:host=$servername", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "CREATE DATABASE editable";
        // use exec() because no results are returned
        $conn->exec($sql);
      } catch(PDOException $e) {
      }
  }


  
?>
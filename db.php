<?php
 
  class DB{
    
    $servername = "localhost";
    $username = "root";
    $password = "root";

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
  
    function addData($data) {
     
      try {
        $conn = new PDO("mysql:host=$servername;dbname=editable", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
         $stmt = $conn->prepare("INSERT INTO posts (`category`, `title`, `description`,`content`, `keywords` )
         VALUES (:category, :title, :descript, :content, :keywords)");
         $stmt->bindParam(':category', $category);
         $stmt->bindParam(':title', $title);
         $stmt->bindParam(':descript', $descript);
         $stmt->bindParam(':content', $content);
         $stmt->bindParam(':keywords', $keywords);
       
         // insert a row
         $category = $data["category"];
         $title = $data["title"];
         $descript = $data["description"];
         $content =  $data["content"];
         $keywords = $data["title"];
         $stmt->execute();
  
        echo "New record created successfully";
      } catch(PDOException $e) {
        echo 'hata';
      }
      
      $conn = null;
    }
  }





  
?>
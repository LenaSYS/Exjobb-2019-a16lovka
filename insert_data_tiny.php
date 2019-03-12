<?php

$data = file_get_contents('../data_tiny.json');

try {
        $sql_tinyblob = "INSERT INTO BLOB_Tiny(BLOB_Tiny_Data) VALUES('$data')";
        $sql_tinyjson = "INSERT INTO JSON_Tiny(JSON_Tiny_Data) VALUES('$data')";

        $conn->exec($sql_tinyblob);
        $conn->exec($sql_tinyjson);
        echo "New record created successfully";
    }
catch(PDOException $e){
        echo $sql . "<br>" . $e->getMessage();
    }

?>
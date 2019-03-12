<?php

$data = file_get_contents('../data.json');

try {
        $sql_mediumblob = "INSERT INTO BLOB_Medium(BLOB_Medium_Data) VALUES('$data')";
        $sql_mediumjson = "INSERT INTO JSON_Medium(JSON_Medium_Data) VALUES('$data')";

        $conn->exec($sql_mediumblob);
        $conn->exec($sql_mediumjson);
        echo "New record created successfully";
    }
catch(PDOException $e){
        echo $sql . "<br>" . $e->getMessage();
    }

?>
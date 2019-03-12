<?php

$data = file_get_contents('../data.json');

try {
        $sql_normalblob = "INSERT INTO BLOB_Normal(BLOB_Normal_Data) VALUES('$data')";
        $sql_normaljson = "INSERT INTO JSON_Normal(JSON_Normal_Data) VALUES('$data')";

        $conn->exec($sql_normalblob);
        $conn->exec($sql_normaljson);
        echo "New record created successfully";
    }
catch(PDOException $e){
        echo $sql . "<br>" . $e->getMessage();
    }

?>
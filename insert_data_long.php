<?php

$data = file_get_contents('../data.json');

try {
        $sql_longblob = "INSERT INTO BLOB_Long(BLOB_Long_Data) VALUES('$data')";
        $sql_longjson = "INSERT INTO JSON_Long(JSON_Long_Data) VALUES('$data')";

        $conn->exec($sql_longblob);
        $conn->exec($sql_longjson);
        echo "New records created successfully";
    }
catch(PDOException $e){
        echo $sql . "<br>" . $e->getMessage();
    }

?>
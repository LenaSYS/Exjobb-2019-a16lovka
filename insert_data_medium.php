<?php

$data = file_get_contents('../data.json');
$data= json_decode($data);

try {

    for ($i=0; $i < sizeof($data); $i++) { 

        $dataToInsert = json_encode($data[$i]);

        $sql = "INSERT INTO BLOB_Medium(BLOB_Medium_Data) VALUES('$dataToInsert');
                INSERT INTO JSON_Medium(JSON_Medium_Data) VALUES('$dataToInsert')";

        $conn->exec($sql);
    }
    
    echo "New records created successfully";
}
catch(PDOException $e){
    echo $sql . "<br>" . $e->getMessage();
}

?>
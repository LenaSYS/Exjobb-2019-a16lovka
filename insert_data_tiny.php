<?php
ini_set('memory_limit', '5000M');
ini_set('max_execution_time', 240);

$data = file_get_contents('../data_tiny.json');
$data= json_decode($data);

try {

    for ($i=0; $i < sizeof($data); $i++) { 

        $dataToInsert = json_encode($data[$i]);

        $sql = "INSERT INTO BLOB_Tiny(BLOB_Tiny_Data) VALUES('$dataToInsert');
                INSERT INTO JSON_Tiny(JSON_Tiny_Data) VALUES('$dataToInsert');
                INSERT INTO TEXT_Tiny(TEXT_Tiny_Data) VALUES('$dataToInsert')";

        $conn->exec($sql);
    }
    
    echo "New records created successfully";
}
catch(PDOException $e){
    echo $sql . "<br>" . $e->getMessage();
}

?>
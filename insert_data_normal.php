<?php

$data = file_get_contents('../data_normal.json');
$data= json_decode($data);

try {

    $dataToInsert = json_encode($data);

    $sql = "INSERT INTO JSON_Normal(JSON_Normal_Data) VALUES('$dataToInsert');
            INSERT INTO BLOB_Normal(BLOB_Normal_Data) VALUES('$dataToInsert'); 
            INSERT INTO TEXT_Normal(TEXT_Normal_Data) VALUES('$dataToInsert');";

    $conn->exec($sql);
    
    echo "New records created successfully";
}
catch(PDOException $e){
    echo $sql . "<br>" . $e->getMessage();
}

?>
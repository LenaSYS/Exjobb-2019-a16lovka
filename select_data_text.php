<pre>
<?php

    ini_set('memory_limit', '5000M');
    ini_set('max_execution_time', 240);

    $stmt = $conn->prepare("SELECT TEXT_Tiny_Data FROM TEXT_Tiny");

    $time_start = microtime(true);
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_COLUMN, 0);
        
    $item = json_decode($data[0]);

    for ($i=0; $i < sizeof($item); $i++) {   
        $obj = $item[$i];
        //if($obj->{'price'} < 500) {
            print_r($obj->{'color'} . "\n");
        //} 
    }

    $time_end = microtime(true);
    $time = $time_end - $time_start;

    $file = '../responseTimes.txt';
    $current = file_get_contents($file);
    $current .= $time." \n";
    file_put_contents($file, $current); 
?>
</pre>
<script src="reload_count.js"></script>



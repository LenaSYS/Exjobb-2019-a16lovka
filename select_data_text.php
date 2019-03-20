<pre>
<?php

    ini_set('memory_limit', '5000M');
    ini_set('max_execution_time', 240);

    $stmt = $conn->prepare("SELECT TEXT_Long_Data FROM TEXT_Long");

    $time_start = microtime(true);
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_COLUMN, 0);
        
    for ($i=0; $i < sizeof($data); $i++) {    
        $item = json_decode($data[$i]);
        if($item->{'price'} < 500) {
            print_r($item->{'id'} . "\n");
        }
    }

    $time_end = microtime(true);
    $time = $time_end - $time_start;

    $file = '../responseTimes.txt';
    $current = file_get_contents($file);
    $current .= $time." \n";
    file_put_contents($file, $current); 
?>
</pre>

<script>
    var counter = localStorage.getItem("count");
    counter++;
    localStorage.setItem("count", counter);
    if(counter < 100) {
        location.reload();
    }
</script>



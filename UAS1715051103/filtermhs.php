<?php 
	header("Content-type: application/json; charset=ISO-8859-1");
	include_once "koneksi.php";
	$sql = "select * from mhs";
    
    $result = $koneksi->query($sql);
 
    if ($result->num_rows >0) {
 
 
    while($row[] = $result->fetch_assoc()) {
 
    $item = $row;
 
    $json = json_encode($item);
 
    }
 
    } else {
        echo "No Results Found.";
    }
    echo $json;
    $koneksi->close();
    
    
    
    
    
 ?>
 

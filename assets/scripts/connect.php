<?php

	$con=mysqli_connect("localhost","root","","rawr-db");
	// Check connection
	if (mysqli_connect_errno()) {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  print json_encode(array("success"=>false));
	  exit();
	}

?>
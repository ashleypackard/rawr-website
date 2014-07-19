<?php

	$con=mysqli_connect("localhost","rawr-client","","rawr-db");
	// Check connection
	if (mysqli_connect_errno()) {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  print json_encode(array("success"=>false));
	  exit();
	}

	// Display messages
	$result = mysqli_query($con,"SELECT item_name, stock_quantity FROM `bedding`");

	$num_rows = mysqli_num_rows($result);

	if($num_rows == 0)
		echo "<p id='rowCounter'>There are no messages posted.</p>";
	else if($num_rows == 1)
		echo "<p id='rowCounter'>There is " . $num_rows . " message posted.</p>";
	else
		echo "<p id='rowCounter'>There are " . $num_rows . " messages posted.</p>";

	while($row = mysqli_fetch_array($result)) {
	  echo "<div class='post'> <h3 class='subjectHeader'>" . $row['subject'] . "</h3>";
	  echo "<p>" . $row['body'] . "</p></div>";
	}

	mysqli_close($con);

	print json_encode(array("success"=>true));

?>
<?php

	include('connect.php');

	// Get Quantities for all tables
	$adoption_query = mysqli_query($con,"SELECT item_name, stock_quantity FROM `adoption`");
	$eggKits_query = mysqli_query($con,"SELECT item_name, stock_quantity FROM `egg-kits`");
	$accessories_query = mysqli_query($con,"SELECT item_name, stock_quantity FROM `accessories`");
	$nutrition_query = mysqli_query($con,"SELECT item_name, stock_quantity FROM `nutrition`");
	$toys_query = mysqli_query($con,"SELECT item_name, stock_quantity FROM `toys`");
	$bedding_query = mysqli_query($con,"SELECT item_name, stock_quantity FROM `bedding`");

	// set up the giant hash map
	$result_hash = array();

	// get each of the tables rows
	while ($row = mysqli_fetch_array($adoption_query)) {
    $result_hash[$row['item_name']] = $row['stock_quantity'];
	}

		while ($row = mysqli_fetch_array($eggKits_query)) {
    $result_hash[$row['item_name']] = $row['stock_quantity'];
	}

		while ($row = mysqli_fetch_array($accessories_query)) {
    $result_hash[$row['item_name']] = $row['stock_quantity'];
	}

		while ($row = mysqli_fetch_array($nutrition_query)) {
    $result_hash[$row['item_name']] = $row['stock_quantity'];
	}

		while ($row = mysqli_fetch_array($toys_query)) {
    $result_hash[$row['item_name']] = $row['stock_quantity'];
	}

		while ($row = mysqli_fetch_array($bedding_query)) {
    $result_hash[$row['item_name']] = $row['stock_quantity'];
	}



	mysqli_close($con);

	print json_encode(array("success"=>true, "tables"=>$result_hash));

?>
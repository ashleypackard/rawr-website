<?php

	include('connect.php');
	
	
	$category=$_POST['category'];
	$item_name=$_POST['item_name'];
	$quantity=$_POST['quantity'];
	$quantityNum_query=mysqli_query($con,"SELECT stock_quantity FROM `$category` WHERE item_name='$item_name';");
	$row = mysqli_fetch_array($quantityNum_query);
	$quantityNum=$row['stock_quantity'];
	$quantityCalc=$quantityNum - $quantity;
	mysqli_query($con,"UPDATE `$category` SET stock_quantity=$quantityCalc WHERE item_name='$item_name';");
	

	mysqli_close($con);
	
?>
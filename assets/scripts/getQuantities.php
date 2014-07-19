<?php

$con=mysqli_connect("localhost","root","","donutshop");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  print json_encode(array("success"=>false));
  exit();
}

// Variables for donut_shop
$donutshopID = (int)$_POST['donutShopID'];
$street = mysqli_real_escape_string($con, $_POST['street']);
$city = mysqli_real_escape_string($con, $_POST['city']);
$state = mysqli_real_escape_string($con, $_POST['state']);
$zip = (int)$_POST['zip'];
$telephone = mysqli_real_escape_string($con, $_POST['telephone']);
$ownRented = mysqli_real_escape_string($con, $_POST['ownedOrRented']);
$bakery = mysqli_real_escape_string($con, $_POST['bakery']);

// variables for donut
$donutID = (int)$_POST['donutID'];
$desc = mysqli_real_escape_string($con, $_POST['description']);
$cal = (int)$_POST['calories'];
$fat = (int)$_POST['fatGrams'];
$yearInvent = (int)$_POST['yearInvented'];
$yearInInven = (int)$_POST['yearsInInventory'];

mysqli_query($con,"INSERT INTO donut_shop (DonutShopID, Street, City, State, Zip, Telephone, OwnedOrRented, Bakery)
VALUES ('$donutshopID', '$street', '$city', '$state', '$zip', '$telephone', '$ownRented', '$bakery')");

mysqli_query($con,"INSERT INTO donut (DonutShopID, DonutID, Description, Calories, FatGrams, YearInvented, YearsInInventory) 
VALUES ('$donutshopID', '$donutID', '$desc', '$cal', '$fat', '$yearInvent', '$yearInInven')");

mysqli_close($con);

print json_encode(array("success"=>true));

?>
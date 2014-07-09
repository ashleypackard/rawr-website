<!DOCTYPE html>
<html>
	<head>
		<title>R.A.W.R.</title>

		<link href='http://fonts.googleapis.com/css?family=Coming+Soon|Amatic+SC' rel='stylesheet' type='text/css'>
		
		<script language = "Javascript" type="text/Javascript" src="http://code.jquery.com/jquery-2.1.1.min.js"></script>

		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
		<!-- Optional theme -->
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
		<!-- Latest compiled and minified JavaScript -->
		<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

		<!--our scrips/stylesheets-->
		<link type="text/css" rel="stylesheet" href="../assets/stylesheets/layoutstyle.css"/>
		<link type="text/css" rel="stylesheet" href="../assets/stylesheets/home_text_style.css"/>
		<link type="text/css" rel="stylesheet" href="../assets/stylesheets/philosophy_style.css"/>
		<link type="text/css" rel="stylesheet" href="../assets/stylesheets/our_dinos_style.css"/>
		<script language = "Javascript" type="text/Javascript" src="../assets/scripts/home_script.js"></script>

	</head>
	<body>
		<div id = "containerDiv" class="container">
			<div id = "header" class="row">	
				<img src="../assets/images/mascot.png" alt="Dinosaur" height= 10% width= 10%  class="col-md-2"/>		
				<h1 class="col-md-10">R.A.W.R. - Re-established Archetypical Wiped-out Reptiles </h1>
			</div>
			
			<div id = "navBar" class="row">

				<ul id="noBullets" class="col-md-12">
					<a href="#" class="reloadDiv" id="home_text"><li>Home</li></a>
					<a href="#" class="reloadDiv" id="about"><li>About</li></a>
					<a href="#" class="reloadDiv" id="ourDinosaurs"><li>Our Dinosaurs</li></a>
					<a href="#" class="reloadDiv" id="ourPhilosophy"><li>Our Philosophy</li></a>
					<a href="#" class="reloadDiv" id="caring"><li>Caring for your Dinosaur</li></a>
					<a href="#" class="reloadDiv" id="purchase"><li>Dinosaur Store</li></a>
				</ul>

			</div>

			<div id = "mainSection">
			
				<?php include 'home_text.php';?>
			
			</div>

			<div id = "footer" class="row">
				<div class="col-md-12">
					<p id="footerp">&copy; Comp 553 | Ashley Packard &amp; Rob Nordberg &amp; James Astbury &amp; Janelle Flaherty | 2014 | <a href="#" id="credit" class="reloadDiv">Resources</a></p>
				</div>
			</div>

		</div>
	</body>
</html>
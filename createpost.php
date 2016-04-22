<!DOCTYPE html>

<html lang="en">

<head>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="description" content="">
	<meta name="author" content="">

	<!--Let browser know website is optimized for mobile-->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	

	<title>Curience</title>

	<!-- Bootstrap Core CSS (flatly theme- http://www.bootswatch.com/flatly/)-->
	<link href="css/bootstrap.min.css" rel="stylesheet">

	<!-- custom css -->
	<link href="css/freelancer.css" rel="stylesheet">
	<link href="css/animate.css" rel="stylesheet">

	<!-- Custom Fonts -->
	<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<link href="http://fonts.googleapis.com/css?family=Montserrat:400, 700" rel="stylesheet" type="text/css">
	<link href="http://fonts.googleapis.com/css?family=Lato:400,700,400italic, 700italic" rel="stylesheet" type="text/css">

	<!-- HTML5Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respong.js doesn't work if you view the page via file:// -->
	<!--[if lt IE9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->
	<link rel="stylesheet" href="medium-editor-master/dist/css/medium-editor.css">
   	<link rel="stylesheet" href="medium-editor-master/dist/css/themes/default.css" id="medium-editor-theme">
   	<link rel="stylesheet" type="text/css" href="">

	<style>
   		body {
   			display: flex;
   			min-height: 100vh;
   			flex-direction: column;
   		}

   		main {
   			flex: 1 0 auto;
   		}
   	</style>


</head>

<body id="page-top" class="index">

	<!-- Navigation -->
	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header page-scroll">					
				<button type="button" class="navbar-toggle" data-toggle="colapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand animated rubberBand" href="#page-top">CURIENCE</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right">
					<li class="hidden">
						<a href="#page-top"></a>
					</li>
					<li>
						<a class="page-scroll animated bounceInRight" href="sass.html">Channels</a>
					</li>
					<li>
						<a class="page-scroll animated bounceInRight" href="badges.html">About Us</a>
					</li>
					<li class="active">
						<a class="page-scroll animated bounceInRight" href="../fb/index.php">Login</a>
					</li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</nav>




	<section id="savepost">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2 class="animated infinite bounce">Save Post</h2>
					<hr class="star-primary animated infinite flip">
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2">
					<form name="sentMessage" id="contactForm" class="col s12" action="savepost.php" method="post" enctype="multipart/form-data" novalidate>
						<div class="row control-group">
							<div class="form-group col-xs-12 floating-label-form-group controls">
								<label>Title/Topic of Post</label>
								<input type="text" class="form-control" placeholder="What is your 'Post' about?" id="name" required data-validation-required-message="Please enter your Title.">
								<p class="help-block text-danger"></p>
							</div>
						</div>




						<div class="col-lg-8 col-lg-offset-2 text-center">
							<button type="file" name="uploaded" id="uploaded" class="btn btn-lg btn outline">
								<i class="fa fa-upload"></i> Upload an Image
							</button>
						</div>








						<div class="row control-group">
							<div class="form-group col-xs-12 floating-label-form-group controls">
								<label>Email Address</label>
								<input type="email" class="form-control" placeholder="Your spamming address" id="email" required data-validation-required-message="Please enter your email address.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control-group">
							<div class="form-group col-xs-12 floating-label-form-group controls">
								<label>Phone Number</label>
								<input type="tel" class="form-control" placeholder="tring~tring" id="phone" required data-validation-required-message="Please enter your phone number.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control=group">
							<div class="form-group col-xs-12 floating-label-form-group controls">
								<label>Message</label>
								<textarea rows="2" class="form-control" placeholder="Tell Me something." id="message" required data-validation-required-message="Please enter a message."></textarea>
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<br>
						<div id="success"></div>
						<div class="row">
							<div class="form-group col-xs-12">
								<button type="submit" class="btn btn-success btn-lg">Send</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
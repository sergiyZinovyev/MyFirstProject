<?php


	require_once("../database.php");
	require_once("../models/articles.php");

	$link = db_connect();

	if(isset($_GET['action'])){
		$action = $_GET['action'];
	}
	else
		$action = "";

	if ($action == "add") {
		if (!empty($_POST)) {
			articles_new($link, $_POST['title'], $_POST['date'], $_POST['content'], $_FILES['picture']['tmp_name']);

			header("Location: index.php");
		}
		/*$full_path = '..img/img-article-4.jpg';
   		copy($_FILES['picture']['tmp_name'], $full_path);*/
		$article = 0;
		include("../views/add.php");
	}
	else if($action == "edit") {
		if(!isset($_GET['id'])){
			header("Location: index.php");}

		$id = (int)($_GET['id']);
		//$id = 8;
	
		if (!empty($_POST) && $id > 0){
			articles_edit($link, $id, $_POST['title'], $_POST['date'], $_POST['content'], $_FILES['picture']['tmp_name']);
			header("Location: index.php");
		}

		$article = articles_get($link, $_GET['id']);

		include("../views/add.php");
	}
	else if($action == "delete"){
		$id = $_GET['id'];
		$article = articles_delete($link, $id);
		header("Location: index.php");
	}
	else if($action == "add_photo") {
		
		photo_new($link, $_POST['title'], $_POST['picture_new']);
		header("Location: index.php");
		$article = 0;
		include("../views/articles_admin.php");
	}
	else if($action == "edit_photo") {
		photo_edit($link, $_POST['id'], $_POST['title']);
		header("Location: index.php");
		include("../views/articles_admin.php");
	}
	else if($action == "delete_photo"){
		$id = $_GET['id'];
		$article = photo_delete($link, $id);
		header("Location: index.php");
	}
	else{
		$articles = articles_all($link);
		$photo = photo_all($link);
		
		include("../views/articles_admin.php");
	}

	

?>

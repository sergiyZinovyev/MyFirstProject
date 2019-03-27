<?php
	require_once("database.php");
	require_once("models/articles.php");

	$link = db_connect();
	$photo = photo_all($link);

	include("views/Photo_galery.php");

?>
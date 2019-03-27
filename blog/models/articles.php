<?php

function articles_all($link){
	// Запрос
	$query = "SELECT * FROM articles ORDER BY id DESC";
	$result = mysqli_query($link, $query);

	if (!$result)
		die(mysqli_error($link));

	// Извлечение из БД
	$n = mysqli_num_rows($result);
	$articles = array();

	for ($i = 0; $i < $n; $i++){
		$row = mysqli_fetch_assoc($result);
		$articles[] = $row;
	}

	return $articles;
}

function photo_all($link){
	// Запрос
	$query = "SELECT * FROM photo ORDER BY id DESC";
	$result = mysqli_query($link, $query);

	if (!$result)
		die(mysqli_error($link));

	// Извлечение из БД
	$n = mysqli_num_rows($result);
	$photo = array();

	for ($i = 0; $i < $n; $i++){
		$row = mysqli_fetch_assoc($result);
		$photo[] = $row;
	}

	return $photo;
}




function articles_get($link, $id_article){
	//Запрос
	$query = sprintf("SELECT * FROM articles WHERE id=%d", (int)$id_article);
	$result = mysqli_query($link, $query);

	if (!$result)
		die(mysqli_error($link));
	$article = mysqli_fetch_assoc($result);

	return $article;
	
}

function picture_get($id_article){
	//Запрос
	$query = sprintf("SELECT picture FROM articles WHERE id=%d", (int)$id_article);
	$result = mysqli_query(db_connect(), $query);

	if (!$result)
		die(mysqli_error($link));

	//$result = addslashes($result);
	//header("Content-type: image/jpeg");
	echo $result;
	return;
}






function articles_new($link, $title, $date, $content, $picture){
	
	/*$path = 'path_to_dir/'; // директория для загрузки
	$ext = array_pop(explode('.',$_FILES['myfile']['name'])); // расширение
	$new_name = time().'.'.$ext; // новое имя с расширением
	$full_path = $path.$new_name; // полный путь с новым именем и расширением*/
	




	//подготовка
	$title = trim($title); //удаляет пробелы слева и справа
	$content = trim($content); //---------

	//проверка
	if ($title == '') {
		return false;
	}

	// вычисление следующего id
	$query = "SELECT MAX(id) FROM articles"; //текст запроса на извлечение максимального id
	$result = mysqli_query($link, $query); //присвоение результата запроса

	if (!$result)
		die(mysqli_error($link));

	$n = mysqli_fetch_array($result); //заносит результат запроса в масив
	$id = array_shift($n)+1; //выбирает первый (и единственный) елемент масива и увеличивает его на один
	
	$f=fopen($picture,"rb"); // имя файла или картинки -- открыли файл на чтение

   	$upload=fread($f,filesize($picture)); // считали файл в переменную
   	//экранируем переменные для запроса SQL
   	$upload=addslashes($upload);
   	$upload=base64_encode($upload);
   	$id=addslashes($id);
   	$title=addslashes($title);
   	$date=addslashes($date);
   	$content=addslashes($content);

   	// полный путь к файлу с именем нового файла:
	$uploadfile = '../img/img-article-'.$id.'.jpg';
	// Копируем файл из каталога для временного хранения файлов:
	copy($_FILES['picture']['tmp_name'], $uploadfile);


	$query = "INSERT INTO articles (id, title, date, content, picture) VALUES ('$id', '$title', '$date', '$content', '$upload')"; //текст запроса на добавление новой записи
	
	$result = mysqli_query($link, $query);

	if (!$result) {
		die(mysqli_error($link));
	}
	return true;
}

function articles_edit($link, $id, $title, $date, $content, $picture){
	//подготовка
	$title = trim($title); //удаляет пробелы слева и справа
	$content = trim($content); //---------
	$date = trim($date);
	$id = (int)$id;

	$f=fopen($picture,"rb"); // имя файла или картинки -- открыли файл на чтение

   	$upload=fread($f,filesize($picture)); // считали файл в переменную
   	//экранируем переменные для запроса SQL
   	$upload=addslashes($upload);
   	$upload=base64_encode($upload);
   	$title=addslashes($title);
   	$date=addslashes($date);
   	$content=addslashes($content);
	//проверка
	if ($title == '') {
		return false;
	}
	// полный путь к файлу с именем нового файла:
	$uploadfile = '../img/img-article-'.$id.'.jpg';
	// Копируем файл из каталога для временного хранения файлов:
	copy($_FILES['picture']['tmp_name'], $uploadfile);

	//запрос
	$query = "UPDATE articles SET title = '$title', content = '$content', date = '$date', picture = '$upload' WHERE id='$id'";
	
		
	$result = mysqli_query($link, $query);

	if (!$result) {
		die(mysqli_error($link));
	}
	return mysqli_affected_rows($link);
}

function articles_delete($link, $id){
	$id = (int)$id;
	// проверка
	if ($id == 0){
		return false;
	}
	// запрос
	$query = sprintf("DELETE FROM articles WHERE id='%d'", $id);
	$result = mysqli_query($link, $query);

	if (!$result)
		die(mysqli_error($link));

	// полный путь к удаляемому файлу(с картинкой) с именем файла:
	$deletefile = '../img/img-article-'.$id.'.jpg';
	// удаляем файл:
	unlink($deletefile);

	return mysqli_affected_rows($link);
}

function articles_intro ($text, $len = 160){
	return mb_substr($text, 0, $len);	
}
function photo_new($link, $title, $picture){
	
	//подготовка
	$title = trim($title); //удаляет пробелы слева и справа
	
	//проверка
	if ($title == '') {
		return false;
	}

	// вычисление следующего id
	$query = "SELECT MAX(id) FROM photo"; //текст запроса на извлечение максимального id
	$result = mysqli_query($link, $query); //присвоение результата запроса

	if (!$result)
		die(mysqli_error($link));

	$n = mysqli_fetch_array($result); //заносит результат запроса в масив
	$id = array_shift($n)+1; //выбирает первый (и единственный) елемент масива и увеличивает его на один
	
	
   	$id=addslashes($id);
   	$title=addslashes($title);
   	
   	// полный путь к файлу с именем нового файла:
	$uploadfile = '../img/originals/img-'.$id.'.jpg';
	// Копируем файл из каталога для временного хранения файлов:
	copy($_FILES['picture_new']['tmp_name'], $uploadfile);


	$query = "INSERT INTO photo (id, title) VALUES ('$id', '$title')"; //текст запроса на добавление новой записи
	
	$result = mysqli_query($link, $query);

	if (!$result) {
		die(mysqli_error($link));
	}
	return true;
}

function photo_edit($link, $id, $title){
	//подготовка
	$title = trim($title); //удаляет пробелы слева и справа
	$id = (int)$id;

	//проверка
	if ($title == '') {
		return false;
	}

	$title=addslashes($title);

	// полный путь к файлу с именем нового файла:
	$uploadfile = '../img/originals/img-'.$id.'.jpg';
	// Копируем файл из каталога для временного хранения файлов:
	copy($_FILES['picture'.$id]['tmp_name'], $uploadfile);

	//запрос
	$query = "UPDATE photo SET title = '$title' WHERE id='$id'";
	
		
	$result = mysqli_query($link, $query);

	if (!$result) {
		die(mysqli_error($link));
	}
	return mysqli_affected_rows($link);
}

function photo_delete($link, $id){
	$id = (int)$id;
	// проверка
	if ($id == 0){
		return false;
	}
	// запрос
	$query = sprintf("DELETE FROM photo WHERE id='%d'", $id);
	$result = mysqli_query($link, $query);

	if (!$result)
		die(mysqli_error($link));

	// полный путь к удаляемому файлу(с картинкой) с именем файла:
	$deletefile = '../img/originals/img-'.$id.'.jpg';
	// удаляем файл:
	unlink($deletefile);
	// полный путь к удаляемому файлу(с картинкой) с именем файла:
	$deletefile = '../img/originals/crop/crop-img-'.$id.'.jpg';
	// удаляем файл:
	unlink($deletefile);

	return mysqli_affected_rows($link);
}
function crop_square($picture, $id){
	$im = imagecreatefromjpeg($picture);
	$size = min(imagesx($im), imagesy($im));
	$im2 = imagecrop($im, ['x' => (imagesx($im)-$size)/2, 'y' => (imagesy($im)-$size)/2, 'width' => $size, 'height' => $size]);
	if ($im2 !== FALSE) {
	
    	$res=imagejpeg($im2, '../img/originals/crop/crop-img-'.$id.'.jpg');
    	imagedestroy($im2);
	}
	imagedestroy($im);
	
}

?>
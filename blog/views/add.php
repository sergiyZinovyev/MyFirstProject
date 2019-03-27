<!DOCTYPE html>
<html>
    
	<head>
		<title>Admin panel</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
        <link href="../css/reset.css" rel="stylesheet">
        <link href="../lightbox/css/lightbox.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
		<link href="../css/style.css" rel="stylesheet">
        <link rel="shortcut icon" href="..img/icons/Hollys.png" type="image/png">
	</head>
    
    <body>
        <div class="menu2">
            <a href="../index.php#" class="button">Home</a>
            <a href="../index.php#a2" class="button">Blog</a>
            <a href="../Photo_galery.php" class="button">Photo galery</a>
            <a href="../index.php#a4" class="button">Contact</a>
            <a href="https://www.facebook.com/holly.novos" class="button">About Me</a>
            <a href="../admin" class="button">Admin</a>
            <H1>Admin panel</H1>
        </div>
        
        <form method="post" action="index.php?action=<?=$_GET['action']?>&id=<?=$_GET['id']?>" enctype="multipart/form-data">
            <table class="add_articles_form">
                <tr>
                    <td>
                        <label for="title">Headliner</label>
                    </td>
                    <td>
                        <input type="text" id="title" name="title" value="<?=$article['title']?>" class="form-item" autofocus required>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="date">Date</label>
                    </td>
                    <td>
                        <input type="date" id="date" name="date" value="<?=$article['date']?>" class="form-item" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="content">Content</label>
                    </td>
                    <td>
                        <textarea id="content" name="content" class="add_text" required><?=$article['content']?></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="picture">Picture</label>
                    </td>
                    <td>
                        <label for="picture" class="button">Сменить картинку</label><br><br>
                        <img src="../img/img-article-<?=$article['id']?>.jpg" width="40%" alt="picture">
                        <input style="opacity: 0; z-index: -1;" type="file" id="picture" name="picture" accept="image/*" value="" >
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="submit"></label>
                    </td>
                    <td>
                        <input type="submit" value="save" class="button">
                    </td>
                </tr>
            </table>
        </form>
            

        <div class="grid-container"> <!-- это grid-контейнер -->
            <div class="grid-item-header"></div>
            
            <div class="grid-item-jumbotron"></div>

            <div class="grid-item-blog"></div>

            <div class="grid-item-photo"></div>

            <div class="grid-item-footer">
                <div id="a4" class="container2"> 
                    <a href="https://www.facebook.com/holly.novos" class="facebook"></a>
                    <a href="#" class="twitter"></a>
                    <a href="#" class="youtube"></a>
                    <a href="https://www.instagram.com/olya__novos/" class="instagram"></a>
                    <h2 style="color: #ffffff">© Holly | Design by Serg</h2>
                </div> 
            </div>
        </div>
    </body>
</html>
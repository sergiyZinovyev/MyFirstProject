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
        <link rel="shortcut icon" href="../img/icons/Hollys.png" type="image/png">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script> 
        <script type="text/javascript">
            (function($){
                $(function() {
                    $('.menu__icon').on('click', function() {
                        $(this).closest('.menu').toggleClass('menu_state_open');
                    });
                    $('.menu__links').on('click', function() {
                        $(this).closest('.menu').toggleClass('menu_state_open');
                    });
                });
            })(jQuery);
        </script>
	</head>
    
    <body>
        <div class="grid-container"> 

            <div class="grid-item-header">
                <div class="menu">
                    <div class="menu__icon">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="menu__links">
                        <a href="../index.php#" class="button b1 menu__links-item">Home</a>
                        <a href="../index.php#a2" class="button b1 menu__links-item">Blog</a>
                        <a href="../Photo_galery.php" class="button b1 menu__links-item">Photo galery</a>
                        <a href="../index.php#a4" class="button b1 menu__links-item">Contact</a>
                        <a href="https://www.facebook.com/holly.novos" class="button b1 menu__links-item">About Me</a>
                        <a href="index.php?action=add" class="button b1 menu__links-item">Add articles</a>
                    </div>
                </div>
                <div class="header">Admin panel</div>
            </div>

            <div class="grid-item-jumbotron">
            </div>

            <div class="grid-item-blog">
                <div class="blog">
                <table class="admin_panel">
                    <tr>
                        <th width="2%"><h2>ID</h2></th>
                        <th width="13%"><h2>Date</h2></th>
                        <th width="45%"><h2>Headline</h2></th>
                        <th width="15%"><h2>Picture</h2></th>
                        <th width="10%"><h2></h2></th>
                        <th width="10%"><h2></h2></th>
                    </tr>
                    <?php foreach ($articles as $a): ?>
                        <tr>
                            <td><h2><?=$a['id']?></h2></td>
                            <td><h6><?=$a['date']?></h6></td>
                            <td><h2><?=$a['title']?></h2></td>
                            <td><img src="../img/img-article-<?=$a['id']?>.jpg" width="100%" alt="picture"></td>
                            <td><a href="index.php?action=edit&id=<?=$a['id']?>" class="button">Edit</a></td>
                            <td><a href="index.php?action=delete&id=<?=$a['id']?>"class="button">Delete</a></td>
                        </tr>   
                    <?php endforeach ?>
                </table>
<br><br><br><br><br><br><br><br>

                <table class="admin_panel">
                    <tr>
                        <th width="2%"><h2></h2></th>
                        <th width="40%"><h2>Headline</h2></th>
                        <th width="25%"><h2>Photo</h2></th>
                        <th width="10%"><h2></h2></th>
                        <th width="10%"><h2></h2></th>
                    </tr>
                    
                    <?php foreach ($photo as $a): ?>
                        <?=crop_square('../img/originals/img-'.$a['id'].'.jpg', $a['id'])?>
                        <tr>
                            <form method="post" action="index.php?action=edit_photo" enctype="multipart/form-data">
                                <td><h2><input type="hidden" id="id" name="id" value="<?=$a['id']?>" class="form-add-photo" required></h2></td>
                                <td><h2><input type="text" id="title" name="title" value="<?=$a['title']?>" class="form-add-photo" required></h2></td>
                                <td>
                                    <input style="opacity: 0; z-index: -1;" type="file" id="picture<?=$a['id']?>" name="picture<?=$a['id']?>" accept="image/*" value="" >
                                    <label for="picture<?=$a['id']?>"><img src="../img/originals/crop/crop-img-<?=$a['id']?>.jpg" width="40%" alt="picture"></label>
                                </td>
                                <td><input type="submit" value="edit" class="button"></td>
                                <td><a href="index.php?action=delete_photo&id=<?=$a['id']?>"class="button">Delete</a></td>
                            </form>
                        </tr>   
                    <?php endforeach ?>
                        <tr>
                            <form method="post" action="index.php?action=add_photo" enctype="multipart/form-data">
                                <td><h2>--</h2></td>
                                <td><h2><input type="text" id="title" name="title" value="Подпись к фото" class="form-add-photo" required></h2></td>
                                <td>
                                    <input style="opacity: 0; z-index: -1;" type="file" id="picture_new" name="picture_new" accept="image/*" value="" >
                                    <label for="picture_new"><img src="../img/originals/no_image.png" width="40%" alt="picture"></label>
                                </td>
                                <td><input type="submit" value="add" class="button"></td>
                                
                            </form>
                        </tr>    
                    </table>
                </div>
            </div>
            </div>

            <div class="grid-item-photo">
                <div class="container">
                    
                </div>
            </div>

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
<!DOCTYPE html>
<html>
    
	<head>
		<title>Blog by Holly</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
        <link href="css/reset.css" rel="stylesheet">
        <link href="lightbox/css/lightbox.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">
        <link rel="shortcut icon" href="img/icons/Hollys.png" type="image/png">
        <link href="../models/articles.php" type="php">
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
        

        <div class="grid-container"> <!-- grid-контейнер -->

            <div class="grid-item-header">
                <div class="menu">
                    <div class="menu__icon">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="menu__links">
                        <a href="index.php#" class="button b1 menu__links-item">Home</a>
                        <a href="index.php#a2" class="button b1 menu__links-item">Blog</a>
                        <a href="Photo_galery.php" class="button b1 menu__links-item">Photo galery</a>
                        <a href="index.php#a4" class="button b1 menu__links-item">Contact</a>
                        <a href="https://www.facebook.com/holly.novos" class="button b1 menu__links-item">About Me</a>
                    </div>
                </div>
                <div class="header">Твой путеводитель к себе | Blog by Holly</div>
            </div>

            <div class="grid-item-jumbotron">
                <div class="jumbotron">
                    <h1>Happiness Freedom Life</h1>
                    <a href="https://www.instagram.com/happiness_freedom_life/" class="button">Instagram</a>
                </div>
            </div>

            <div class="grid-item-blog">
                <a id="a2">
                <div class="blog">
                    <?php foreach ($articles as $a): ?>
                        <div class="content_blog">
                            <a href="article.php?id=<?=$a['id']?>">
                               <img src="img/img-article-<?=$a['id']?>.jpg" alt="article">
                                <H1><?=$a['title']?></H1>          
                                <H2><?=$a['date']?></H2>
                                <hr>
                                <p><?=articles_intro($a['content'])?>...</p>
                            </a>
                        </div>
                    <?php endforeach ?>
                </div>
            </div>
        
            <div class="grid-item-footer">
                <div style="text-align: right; "><a href="admin" style="color: #004d66">Admin</a></div> 
                <div id="a4" class="container2">  
                    <a href="https://www.facebook.com/holly.novos" class="facebook"></a>
                    <a href="#" class="twitter"></a>
                    <a href="#" class="youtube"></a>
                    <a href="https://www.instagram.com/olya__novos/" class="instagram"></a>

                    <h2>© Holly | Design by Serg</h2>
                </div>    
            </div> 
        </div> 
    </body>
</html>
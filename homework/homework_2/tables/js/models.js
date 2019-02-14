function addElemetDiv (id1, id2, class1, class2, contentArray){
	//id1 - id першого контейнера
	//id2 - id другого контейнера
	//class1 - стиль елемента для першого контейнера
	//class2 - стиль елемента для друго контейнера
	//contentArray - контент для доданих елементів у вигляді масива
	var container = document.getElementById(id1);
	var container2 = document.getElementById(id2);
	for (var i = 0; i < 13; i++) {
		var text = contentArray[i];
		if (i < 4 ) {
	   		container.innerHTML += '<div class="'+class1+'">'+text+'</div>';
		}
		else {
			container2.innerHTML += '<div class="'+class2+'">'+text+'</div>';
		}
	}
}

function visibleElementByClass(name, item){
	//відображує або приховує вказаний елемент заданого класу
	//name - назва класу контейнера
	//item - порядковий номер контейнера (рахується від 0)
	//по замовчуванню item=0 (перший елемент)
	if (item == undefined) {item = 0;}
	element = document.getElementsByClassName(name)[item]; 
	var prop = window.getComputedStyle(element).display;
	if (prop == 'none') {
		 element.style.display = 'block';
		setTimeout ( function( ) {
			element.style.transition = '0.5s';
			element.style.opacity = '1';
			}, 100);
	}
	else {
		element.style.transition = '0.5s';
		element.style.opacity = '0';
		setTimeout ("element.style.display = 'none'", 500);
	}
}

var a = new Array (1, 2, 3, 4, 5, 6, 7, 8, '', '', '', '', '',);
		addElemetDiv('gen_block1', 'gen_block2', 'block', 'block2', a);

var url_img = new Array (
	'https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg',
	'http://edemposvetu.ru/wp-content/uploads/2015/11/samye-krasivye-ozera-Evropy-annecy-750x500.jpg', 
	'http://www.forumdaily.com/wp-content/uploads/2017/03/Depositphotos_31031331_m-2015.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiapud7PhC-pbej3upOcT-8LI553kcxmcwddPq50GCunKCa9Ox',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGadSpIp9E639-xEc5FCBJIk1e1L6BIftJuVE4SJFL6DOMn2V',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAEAdsqhA4WoA3kEA7Tn2N7COK15LNH-uH40DI9sGc8c9lzM-',
 	'https://zabavnik.club/wp-content/uploads/2018/07/krasivye_kartinki_1_20122015.jpg"',
  	'https://tobefresh.ru/800/600/http/el.kz/storage/bf/bf13aa80095448a043e015913c27e251.jpg',
   	'https://kazakh-tv.kz/upload/anounces/big_d62dc2a7983a7e435d4ad7bd6fbf9b71.jpg',
    'https://st2.depositphotos.com/1006362/12263/i/950/depositphotos_122633314-stock-photo-beautiful-alpine-lake-usa.jpg',
    'https://img.tsn.ua/cached/1518092914/tsn-e596772b039de3f9cc99cecfb6e26c38/thumbs/1200x630/51/cb/bd1e802ac5517081490519481e97cb51.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWndOt2kL67P4sA1AjCBPr4KADSg0ESXw8FftZVJ9akNEk6KZ4',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQriWJST1RXgP1xbpEUS9qJIveDA__z4LvXPOX0sTVBnDUsSdkk',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSet1e_NQMgOPC4KbonevYViXAqCv8b2oP7TvlcbSRiR0QXVwkd',
);
	var b = new Array();
	for (var i = url_img.length - 1; i >= 0; i--) {
		if (i > 3) {
			b[i] = '<img class="block2 picture" src="'+url_img[i]+'" align="no img">';
		}
		else {
			b[i] = '<img class="block picture" src="'+url_img[i]+'" align="no img">'
		}
	}
	addElemetDiv('gen_block3', 'gen_block4', 'block picture', 'block2 picture', b);
		
			
			
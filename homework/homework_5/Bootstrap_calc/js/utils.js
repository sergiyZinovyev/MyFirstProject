function getParsing(sent) {
// розбирає математичний вираз поелементно та повертає масив елементів
// sent - математичний вираз в строковому вигляді
var db = new Array();
var n = 0;
var item = 0;
for (var i = item; i<String(sent).length; i++){
	var current = String(sent)[i];
	var next = String(sent)[i+1];
	if (/[\+\-\*\/]/.test(current)) {
	  	if (i == 0 && current == '-'){
			db[n] = String(sent)[i];
			continue;
		}
		db[n] = String(sent)[i];
		n = n + 1;
		continue;
	}
	if (db[n] == undefined){
		db[n] = String(sent)[i];
		}
	else {db[n] += String(sent)[i];}
	if (next == 'e') {
		db[n] += String(sent)[i+1]+String(sent)[i+2];
		i = i + 2;
		continue;
	}
	if (/[\+\-\*\/]/.test(next) || next == undefined){
    n = n + 1;
    }
}
return db;
}

function getResult (totalprod, act) {
	if (act == 'plus'){
	    var operator1 = '+';
	    var operator2 = '-';
	}
	else {
		var operator1 = '*';
	    var operator2 = '/';
	}
	var db2 = getParsing(totalprod);
	totalcalc = new Array();
	var n = 0;
	var x = 0; 
	for (var i = 0; i<db2.length; i++){
		var current2 = db2[i];
		var next2 = db2[i+1];
		var afternext2 = db2[i+2];
		if (x == 0 && (next2 == operator1 || next2 == operator2)){
		  	switch (next2){
			    case operator1:
			        switch (operator1){
						case '+':
							var fix = Number(current2)+Number(afternext2);
							break;
						case '*':
							var fix = Number(current2)*Number(afternext2);
							break;
			        }
			    break;
			    case operator2:
			        switch (operator2){
				        case '-':
				            var fix = Number(current2)-Number(afternext2);
				            break;
				        case '/':
				            var fix = Number(current2)/Number(afternext2);
				            break;
				    }
				break;
			}
			totalcalc[n] = +fix.toFixed(16);
		  	n = n + 1;
	  		i = i + 2;
	  		x = 1;
		  	continue;
		}
		totalcalc[n] = current2;
		n = n + 1;
	}
	if (totalcalc.length > 1){
		for (var a=0; a<totalcalc.length; a++){	
		  	if(totalcalc[a] == operator1 || totalcalc[a] == operator2){
			  	totalcalc = totalcalc.join('');
			  	getResult (totalcalc, act);
			  	break;
			}
		}
	}
	else {return totalcalc;}
	if (Array.isArray(totalcalc)){totalcalc = totalcalc.join('');}
	if (/[\+\-]/.test(totalcalc)){
		getResult (totalcalc, 'plus');
	}
	return totalcalc;
}

/*function getResalt (dd){
	// обраховує математичний вираз записаний в строковому форматі
	totalcalc = getSumm(getSumm(dd), 'plus');
	return totalcalc;
}*/

function getValidLast(ex) {
	var last = String(ex)[String(ex).length - 1];
	if (!/[0-9]/.test(last)){
		return false;
	}
	if (!isFinite(getResult(ex))) {
		return false;
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

function ifErrorId(id){
	document.getElementById(id).style.color = 'red';
	setTimeout(function(){document.getElementById(id).style.color = 'black';},200);
}	

function textWidth(text, fontSize, fontFamily) {
    var tag = document.createElement("div");
    tag.style.position = "absolute";
    //tag.style.left = "-999em";
    tag.style.whiteSpace = "nowrap";
    tag.style.fontFamily = fontFamily;
    tag.style.fontSize = fontSize+"px";
    tag.innerHTML = text;

    document.body.appendChild(tag);

    var result = tag.clientWidth;

    document.body.removeChild(tag);

    return result;
}

function setSizeId(id, val){
	// зменшує розмір шрифта
	// id елемента
	// val - значення яке потрібно вивести на екран
	var element = document.getElementById(id);

	//var size = parseInt(getComputedStyle(element).fontSize);
	var size = 50;
	var font = getComputedStyle(element).fontFamily;
	var width = element.clientWidth;

		for (var i = 1; i < 50; i++) {
			if(textWidth(val+'9', size, font) < width){
			var size_id = size + 'px';
			break;
			}
			else {size = size - 1;}
		}

    return document.getElementById(id).style.fontSize = size_id;
}

// отримання поточного розміру шрифта
//var elementDisplay = document.getElementById('display1');
//var sizeF = getComputedStyle(elementDisplay).fontSize;
//alert (parseInt(sizeF)); /*отримати лише цифри*/
//alert (String(exp)[String(exp).length - 1]); /*отримати останній символ строки*/
//test
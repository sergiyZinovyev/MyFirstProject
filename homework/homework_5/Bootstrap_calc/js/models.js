function getParsing(sent) {
	// розбирає вираз поелементно та повертає масив елементів
	// sent - математичний вираз в строковому вигляді
	var db = new Array();
	var n = 0;
	var item = 0;
	for (var i = item; i<String(sent).length; i++){
		var current = String(sent)[i];
		var next = String(sent)[i+1];
		if (current == '+' || current == '-' || current == '*' || current == '/') {
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
		if (next == '+' || next == '-' || next == '/' || next == '*' || next == undefined){
	    n = n + 1;
	    }
	}
	//alert ('db='+db);
	return db;
}
function getProd (sentarr){
	// виконує тільки операції множення/ділення та повертає вираз в строковому вигляді
	// sentarr - математичний вираз в строковому вигляді
	var db2 = getParsing(sentarr);
	prod = new Array();
	var n = 0;
	var x = 0; 
	for (var i = 0; i<db2.length; i++){
		var current2 = db2[i];
		var next2 = db2[i+1];
		var afternext2 = db2[i+2];
		if (x == 0 && (next2 == '*' || next2 == '/')){
		  	if (next2 == '*' ){
		  		var fix = current2*afternext2;
		  		prod[n] = +fix.toFixed(16);
		  		n = n + 1;
	  			i = i + 2;
	  			x = 1;
		  		continue;
		  	}
		  	if (next2 == '/' ){
		  		var fix = current2/afternext2;
		  		prod[n] = +fix.toFixed(16);
		  		n = n + 1;
		  		i = i + 2;
		  		x = 1;
		  		continue;
		  	}
		}
		prod[n] = current2;
		n = n + 1;
	}
	for (var a=0; a<prod.length; a++){	
	    if(prod[a] == '*' || prod[a] == '/'){
			prod = prod.join('');
			getProd (prod);
			break;
		}
	}
	if (Array.isArray(prod)){prod = prod.join('');}
	return prod;
}
function getSumm (totalprod) {
	// виконує тільки операції додавання/віднімання та повертає вираз в строковому вигляді
	// математичний вираз в строковому вигляді (має містити тільки операції додавання/віднімання)
	var db2 = getParsing(totalprod);
	totalcalc = new Array();
	var n = 0;
	var x = 0; 
	for (var i = 0; i<db2.length; i++){
		var current2 = db2[i];
		var next2 = db2[i+1];
		var afternext2 = db2[i+2];
		if (x == 0 && (next2 == '+' || next2 == '-')){
		  	if (next2 == '+' ){
		  		var fix = Number(current2)+Number(afternext2);
		  		totalcalc[n] = +fix.toFixed(16);
		  		n = n + 1;
	  			i = i + 2;
	  			x = 1;
		  		continue;
		  	}
		  	if (next2 == '-' ){
		  		var fix = Number(current2)-Number(afternext2);
		  		totalcalc[n] = +fix.toFixed(16);
			  	n = n + 1;
		  		i = i + 2;
		  		x = 1;
		  		continue;
		  	}
		}
		totalcalc[n] = current2;
		n = n + 1;
	}
	for (var a=0; a<totalcalc.length; a++){	
	  if(totalcalc[a] == '+' || totalcalc[a] == '-'){
		  totalcalc = totalcalc.join('');
		  getSumm (totalcalc);
		  break;
		}
	}
	if (Array.isArray(totalcalc)){totalcalc = totalcalc.join('');}
	return totalcalc;
}
function getResalt (dd){
	// обраховує математичний вираз записаний в строковому форматі
	//var dd = document.getElementById('display1').value;
	totalcalc = getSumm(getProd(dd));
	//alert ('res3: '+totalcalc);
	return totalcalc;
}

function setSizeId(id, val){
	// зменшує розмір шрифта, якщо кількість символів більша 11
	// id елемента
	// val - значення яке потрібно вивести на екран
	document.getElementById(id).style.fontSize = '50px';
	if (String(val).length > 9){
		document.getElementById(id).style.fontSize = '24px';
    }
  	if (String(val).length > 20){
		document.getElementById(id).style.fontSize = '12px';
    }
}

function getNum (num){
	//додає ще один символ на екран, якщо він відповідає вимогам
	//num - символ який потрібно додати
	var res = document.getElementById('display1').value;
	if (String(res).length > 42) {
	  	ifError();
		return;
	}
	var last = String(res)[String(res).length - 1];
	var before = String(res)[String(res).length - 2];
	var none = undefined;
	var reg_num = /[0-9]/;
	var reg_simb = /[\+\-\*\/]/;
	var reg_simb2 = /[\+\-\*\/\.]/;
  	if (last == '0' && (before == none || reg_simb.test(before)) && reg_num.test(num)){
		ifError();
		return;
  	}	
  	if ((last == none || reg_simb2.test(last)) && reg_simb2.test(num)){
		ifError();
		return;
	}
  	if (num == '.'){
    	var current_db = getParsing(res);
    	var last_item = current_db[current_db.length - 1];
    	if (/\./.test(last_item)/* && /\./.test(num)*/){
	  		ifError();
	  		return;
  		}
	}
	setSizeId('display1', res);
	document.getElementById('display1').value += num;
}	

function getSquareRoot () {
	var exp = document.getElementById('display1').value;
	var last = String(exp)[String(exp).length - 1];
	var reg_simb2 = /[\+\-\*\/\.]/;
	if (reg_simb2.test(last)){
		ifError();
		return;
	}
	if (getResalt(exp)<0){
		ifError();
		return;
	}
	var sqrr = Math.sqrt(getResalt(exp));
	setSizeId('display1', sqrr);
	document.getElementById('display1').value = sqrr;
	document.getElementById('display2').value = "√(" + exp + ")";
}

function getSquare () {
	var exp = document.getElementById('display1').value;
	var last = String(exp)[String(exp).length - 1];
	var reg_simb2 = /[\+\-\*\/\.]/;
	if (reg_simb2.test(last)){
		ifError();
		return;
	}
	var sqr = getResalt(exp)*getResalt(exp);
	setSizeId('display1', sqr);
	document.getElementById('display1').value = sqr;
	document.getElementById('display2').value = "(" + exp + ")^2";
}

function getDivByX() {
	var exp = document.getElementById('display1').value;
	var last = String(exp)[String(exp).length - 1];
	var reg_simb2 = /[\+\-\*\/\.]/;
	if (reg_simb2.test(last)){
		ifError();
		return;
	}
	var dbx = 1/getResalt(exp);
	setSizeId('display1', dbx);
	document.getElementById('display1').value = dbx;
	document.getElementById('display2').value = "1/(" + exp + ")";
}

function getPercent() {
	var exp = document.getElementById('display1').value;
	var perc = 'Я ще не знаю як це рахувати :)';
	setSizeId('display1', perc);
	document.getElementById('display1').value = '';
	document.getElementById('display2').value = perc;
}

function getCalc () {
	var exp = document.getElementById('display1').value;
	var last = String(exp)[String(exp).length - 1];
	var reg_simb2 = /[\+\-\*\/\.]/;
	if (reg_simb2.test(last)){
		ifError();
		return;
	}
	var res = getResalt(exp);
	setSizeId('display1', res);
	document.getElementById('display1').value = res;
	document.getElementById('display2').value = exp + "=";
}

function addMinus (){
	var res = document.getElementById('display1').value;
	var first = String(res)[0];
	if (first == undefined) {return;}
	if (first != '-') {
	document.getElementById('display1').value = "-" + res;
	return;
	}
	res = res.substring(1);
	document.getElementById('display1').value = res;
}

function insertExp() {
	var exp = document.getElementById('display1').value;
	exp = exp.substring(0, exp.length - 1);
	document.getElementById('display1').value = exp;
}

function getOff() {
	document.getElementById('display1').value = "";
	document.getElementById('display2').value = "";			
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


function onCalc(){
	//visibleElementByClass('ico');
	visibleElementByClass('calc');
}
function offCalc(){
	visibleElementByClass('calc');
	//visibleElementByClass('ico');
}
function ifError(){
	//document.getElementById('display1').style.background = 'red';
	document.getElementById('display1').style.color = 'red';
  	//val_disp = document.getElementById('display1').value;
	//document.getElementById('display1').value = 'Error !';
	//document.getElementById('display1').style.textAlign = 'left';
	setTimeout(function(){
	  	//document.getElementById('display1').style.background = 'none';
	  	document.getElementById('display1').style.color = 'black';
	  	//document.getElementById('display1').style.transition = '0.5s';
		//document.getElementById('display1').style.opacity = '1';
		//document.getElementById('display1').style.textAlign = 'right';
	  	/*document.getElementById('display1').value = val_disp;*/},200);
}

// отримання поточного розміру шрифта
//var elementDisplay = document.getElementById('display1');
//var sizeF = getComputedStyle(elementDisplay).fontSize;
//alert (parseInt(sizeF)); /*отримати лише цифри*/
//alert (String(exp)[String(exp).length - 1]); /*отримати останній символ строки*/
//test

	
			
		
			
			
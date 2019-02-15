var memory;
var none = undefined;
var reg_num = /[0-9]/;
var reg_simb = /[\+\-\*\/]/;
var reg_simb2 = /[\+\-\*\/\.]/;

function getNum (num){
	//додає ще один символ на екран, якщо він відповідає вимогам
	//num - символ який потрібно додати
	var exp = document.getElementById('display1').value;
	if (String(exp).length > 42) {
	  	ifError();
		return;
	}
	if(reg_num.test(exp)){}
	else if (!isFinite(exp)) {
		ifError();
		return;
	}
	var last = String(exp)[String(exp).length - 1];
	var before = String(exp)[String(exp).length - 2];
  	if (last == '0' && (before == none || reg_simb.test(before)) && reg_num.test(num)){
		ifError();
		return;
  	}	
  	if ((last == none || reg_simb2.test(last)) && reg_simb2.test(num)){
		ifError();
		return;
	}
  	if (num == '.'){
    	var current_db = getParsing(exp);
    	var last_item = current_db[current_db.length - 1];
    	if (/\./.test(last_item)){
	  		ifError();
	  		return;
  		}
	}
	setSizeId('display1', exp);
	document.getElementById('display1').value += num;
}	

function getSquareRoot () {
	var exp = document.getElementById('display1').value;
	var last = String(exp)[String(exp).length - 1];
	//var reg_simb2 = /[\+\-\*\/\.]/;
	if (reg_simb2.test(last)){
		ifError();
		return;
	}
	if(/[0-9]/.test(exp)){}
	else if (!isFinite(exp)) {
		ifError();
		return;
	}
	if (getResalt(exp)<0){
		ifError();
		return;
	}
	var sqrr = Math.sqrt(getResalt(exp));
	sqrr = +sqrr.toFixed(16);
	setSizeId('display1', sqrr);
	document.getElementById('display1').value = sqrr;
	document.getElementById('display2').value = "√(" + exp + ")";
}

function getSquare () {
	var exp = document.getElementById('display1').value;
	var last = String(exp)[String(exp).length - 1];
	//var reg_simb2 = /[\+\-\*\/\.]/;
	if (reg_simb2.test(last)){
		ifError();
		return;
	}
	if(/[0-9]/.test(exp)){}
	else if (!isFinite(exp)) {
		ifError();
		return;
	}
	var sqr = getResalt(exp)*getResalt(exp);
	sqr = +sqr.toFixed(16);
	setSizeId('display1', sqr);
	document.getElementById('display1').value = sqr;
	document.getElementById('display2').value = "(" + exp + ")^2";
}

function getDivByX() {
	var exp = document.getElementById('display1').value;
	var last = String(exp)[String(exp).length - 1];
	//var reg_simb2 = /[\+\-\*\/\.]/;
	if (reg_simb2.test(last)){
		ifError();
		return;
	}
	if(/[0-9]/.test(exp)){}
	else if (!isFinite(exp)) {
		ifError();
		return;
	}
	var dbx = 1/getResalt(exp);
	dbx = +dbx.toFixed(16);
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
	if(/[0-9]/.test(exp)){}
	else if (!isFinite(exp)) {
		document.getElementById('display1').value = '';
		return;
	}
	exp = exp.substring(0, exp.length - 1);
	document.getElementById('display1').value = exp;
}

function getMPlus(){
	val=document.getElementById('display1').value;
		if (reg_simb2.test(String(val)[String(val).length - 1])){
		ifError();
		return;
	}
	val = Number(getResalt(val));
	if (memory == undefined){memory = 0;}
	memory += val;
}

function getMMinus(){
	val=document.getElementById('display1').value;
		if (reg_simb2.test(String(val)[String(val).length - 1])){
		ifError();
		return;
	}
	val = Number(getResalt(val));
	if (memory == undefined){memory = 0;}
	memory -= val;
}

function getMemory(){
	if (memory == undefined){memory = 0;}
	setSizeId('display1', memory);
	document.getElementById('display1').value+= memory;
}

function getMClear(){
	memory = 0;
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

function isBigCalc(){
	//збільшує/зменшує розмір калькулятора
	  var element = document.getElementsByClassName('calc')[0]; 
		var prop = window.getComputedStyle(element).width;
	if (prop == '320px') {
		element.style.width = '600px';
		setTimeout ( function( ) {
			element.style.transition = '0.5s';
			}, 100);
	}
	else {
		element.style.transition = '0.5s';
		setTimeout (function(){
		element.style.width = '320px';
		}, 200);
	}
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

	
			
		
			
			
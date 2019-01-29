function setSizeId(id, val){
	// id елемента
	// val - значення яке потрібно вивести на екран
	document.getElementById(id).style.fontSize = '50px';
	  if (String(val).length > 9){
	    document.getElementById(id).style.fontSize = '24px';
     }
}
function getNum (num){
	var res = document.getElementById('display1').value;
	var last = String(res)[String(res).length - 1];
	var before = String(res)[String(res).length - 2];
	//alert (before);
	var none = undefined;
	if (last == '0' && (before == none || before == '+' || before == '-' || before == '*' || before == '/') && num != '.') {
		return;
		}	
	setSizeId('display1', res);
	document.getElementById('display1').value += num;
}	
function getSquareRoot () {
	var exp = document.getElementById('display1').value;
	var sqrr = Math.sqrt(eval(exp));
	setSizeId('display1', sqrr);
	document.getElementById('display1').value = sqrr;
	document.getElementById('display2').value = "√(" + exp + ")";
}
function getSquare () {
	var exp = document.getElementById('display1').value;
	var sqr = eval(exp)*eval(exp);
	setSizeId('display1', sqr);
	document.getElementById('display1').value = sqr;
	document.getElementById('display2').value = "(" + exp + ")^2";
}
function getDivByX() {
	var exp = document.getElementById('display1').value;
	var dbx = 1/eval(exp);
	setSizeId('display1', dbx);
	document.getElementById('display1').value = dbx;
	document.getElementById('display2').value = "1/(" + exp + ")";
}
function getCalc () {
	var exp = document.getElementById('display1').value;
	var res = eval(exp);
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
  // отримання поточного розміру шрифта
	//var elementDisplay = document.getElementById('display1');
	//var sizeF = getComputedStyle(elementDisplay).fontSize;
	//alert (parseInt(sizeF)); /*отримати лише цифри*/
	//alert (String(exp)[String(exp).length - 1]); /*отримати останній символ строки*/
	//test
	
	
			
		
			
			
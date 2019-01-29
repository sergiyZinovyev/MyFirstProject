
function getNum (num){
	var dig = document.getElementById('display1').value;
	document.getElementById('display1').value = dig + num;
}	
function getSquareRoot () {
	var exp = document.getElementById('display1').value;
	var sqrr = Math.sqrt(eval(exp));
	document.getElementById('display1').value = sqrr;
	document.getElementById('display2').value = "V(" + exp + ")";
}

function getSquare () {
	var exp = document.getElementById('display1').value;
	var sqr = eval(exp)*eval(exp);
	document.getElementById('display1').value = sqr;
	document.getElementById('display2').value = "(" + exp + ")^2";
}
function getDivByX() {
	var exp = document.getElementById('display1').value;
	var dbx = 1/eval(exp);
	document.getElementById('display1').value = dbx;
	document.getElementById('display2').value = "1/(" + exp + ")";
}
function getCalc () {
	var exp = document.getElementById('display1').value;
	document.getElementById('display1').value = eval(exp);
	document.getElementById('display2').value = exp + "=";
}
function getOff() {
	document.getElementById('display1').value = "";
	document.getElementById('display2').value = "";			
}	
	
			
		
			
			
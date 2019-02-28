var memory;
var none = undefined;
var reg_num = /[0-9]/;
var reg_simb = /[\+\-\*\/]/;
var reg_simb2 = /[\+\-\*\/\.]/;
var display1 = document.getElementById('display1');


//-----------------------------------------------------------//
//            операції введення/видалення даних              
//-----------------------------------------------------------//
/*function getNum (num){
	//додає ще один символ на екран, якщо він відповідає вимогам
	//num - символ який потрібно додати
	var exp = display1.value;
	if (String(exp).length > 200) {
		return ifErrorId('display1');
	}
	if(reg_num.test(exp)){}
	else if (!isFinite(exp)) {
		return ifErrorId('display1');
	}
	var last = String(exp)[String(exp).length - 1];
	var before = String(exp)[String(exp).length - 2];
  	if (last == '0' && (before == none || reg_simb.test(before)) && reg_num.test(num)){
		return ifErrorId('display1');
  	}	
  	if ((last == none || reg_simb2.test(last)) && reg_simb2.test(num)){
		return ifErrorId('display1');
	}
  	if (num == '.'){
    	var current_db = getParsing(exp);
    	var last_item = current_db[current_db.length - 1];
    	if (/\./.test(last_item)){
	  		return ifErrorId('display1');
  		}
	}
	setSizeId('display1', exp);
	display1.value += num;
	
}*/

/*function addMinus (){
	var res = display1.value;
	var first = String(res)[0];
	if (first == undefined) {return;}
	if (first != '-') {
		display1.value = "-" + res;
	}
	else {
		res = res.substring(1);
		display1.value = res;
	}
}
*/
/*function insertExp() {
	var exp = display1.value;
	if (/[0-9]/.test(exp)) {
		exp = exp.substring(0, exp.length - 1);
	}
	else {
		exp = '';
	}
	return display1.value = exp;
}*/	

/*function getOff() {
	display1.value = "";
	document.getElementById('display2').value = "";			
}*/

//-----------------------------------------------------------//
//                 математичні операції                      
//-----------------------------------------------------------//

/*function doMathOper(oper) {
	var exp = display1.value;
	if (getValidLast(exp) == false){
		return ifErrorId('display1');
	}
	switch (oper) {
		case 'root':
			if (Number(getResult(exp))<0){return ifErrorId('display1');}
			var display2_text = "√(" + exp + ")";
			exp = Math.sqrt(Number(getResult(exp)));
			break;
		case 'square':
			var display2_text = "(" + exp + ")^2";
			var exp = Number(getResult(exp))**2;
			break;
		case 'div':
			var display2_text = "1/(" + exp + ")";
			var exp = 1/Number(getResult(exp));
			break;
		case 'pers':
			var display2_text = 'Я ще не знаю як це рахувати :)';
			var exp = 0;
			break;
		case 'calc':
			var display2_text = exp + "=";
			var exp = Number(getResult(exp));
			break;
	}
	exp = +exp.toFixed(16);
	setSizeId('display1', exp);
	display1.value = exp;
	document.getElementById('display2').value = display2_text;
}*/

//-----------------------------------------------------------//
//                  операції з пам'ттю                       
//-----------------------------------------------------------//

/*function getMPluMinus(sign){
	val=display1.value;
		if (reg_simb2.test(String(val)[String(val).length - 1])){
		ifError();
		return;
	}
	val = Number(getResult(val));
	if (memory == undefined){memory = 0;}
	switch (sign){
		case '+':
			memory += val;
			break;
		case '-':
			memory -= val;
			break;
	}
	return memory;
}*/

/*function getMemory(){
	if (memory == undefined){memory = 0;}
	setSizeId('display1', memory);
	display1.value+= memory;
}*/

function getMClear(){
	memory = 0;
}

//-----------------------------------------------------------//
//                    функції візуалізації                   
//-----------------------------------------------------------//


function onCalc(){
	//visibleElementByClass('ico');
	visibleElementByClass('calc');
}
function offCalc(){
	visibleElementByClass('calc');
	//visibleElementByClass('ico');
}

function mem(){
	var item = document.getElementById('memory_menu');
	var prop = window.getComputedStyle(item).display;
	if (prop == 'block'){
		item.style.display = "none";
		}
	else {item.style.display = "block";}
}

function isBigCalc(){
	//збільшує/зменшує розмір калькулятора
	  var element = document.getElementsByClassName('calc')[0]; 
		var prop = window.getComputedStyle(element).width;
	if (prop == '320px') {
		element.style.width = '600px';
		setTimeout ( function( ) {
			element.style.transition = '0.5s';
			}, 200);
	}
	else {
		element.style.transition = '0.5s';
		setTimeout (function(){
		element.style.width = '320px';
		}, 200);
	}
}





	
		
			
			
var calc = new Calculator('calc');
Object.defineProperty (calc.display1, 'expression', {get: function() {return calc.expression;}});	
Object.defineProperty (calc.display2, 'expression', {get: function() {return calc.history;}});	
//Object.defineProperty (calc.style, 'idCalc', {get: function() {return calc.idHTML;}});	


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

function isBigCalc(){
	//збільшує/зменшує розмір калькулятора
	  var element = $('.calc')[0]; 
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

/*function isBigCalc(){
	alert(calc.style.width);
	if (calc.style.width == '320px'){
		calc.style.width = '600px';
	}
	else {
		calc.style.width = '320px';
	}
	alert(calc.style.width);	
}*/



	
		
			
			
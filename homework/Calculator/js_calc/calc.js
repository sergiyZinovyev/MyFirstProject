var calc = new Calculator('calc');
Object.defineProperty (calc.display1, 'expression', {get: function() {return calc.expression;}});	
Object.defineProperty (calc.display2, 'expression', {get: function() {return calc.history;}});	
//Object.defineProperty (calc.style, 'idCalc', {get: function() {return calc.idHTML;}});	


//-----------------------------------------------------------//
//                    функції візуалізації                   
//-----------------------------------------------------------//


function onCalc(){
	visibleElementByClass('calc');
}
function offCalc(){
	visibleElementByClass('calc');
}

function isBigCalc(size){
	//збільшує/зменшує розмір калькулятора
	var element = $('.calc').eq(0); 
	var prop = $(element).css('width');
	if (prop == '320px') {
		$(element).css({
			'width': size + 'px',
			'transition': '0.5s'
		});
	}
	else {
		$(element).css({
			'width': '320px',
			'transition': '0.5s'
		});
	}
}





	
		
			
			
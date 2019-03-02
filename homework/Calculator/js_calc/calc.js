

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





	
		
			
			
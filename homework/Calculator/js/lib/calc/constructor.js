function Calculator(id) {

	//this.idHTML = id;

	this.expression = '';

	this.history = '';

	this.reg = [undefined, /[0-9]/, /[\+\-\*\/]/, /[\+\-\*\/\.]/];

//-----------------------set expression---------------------------//

	Object.defineProperty (this, 'btn', {
	    set: function(num) {
			var exp = this.expression;
			if (String(exp).length > 200) {
				return this.display1.error();
			}
			if(this.reg[1].test(exp)){}
			else if (!isFinite(exp)) {
				return this.display1.error();
			}
			var last = String(exp)[String(exp).length - 1];
			var before = String(exp)[String(exp).length - 2];
		  	if (last == '0' && (before == this.reg[0] || this.reg[2].test(before)) && this.reg[1].test(num)){
				return this.display1.error();
		  	}	
		  	if ((last == this.reg[0] || this.reg[3].test(last)) && this.reg[3].test(num)){
				return this.display1.error();
			}
		  	if (num == '.'){
		    	var current_db = getParsing(exp);
		    	var last_item = current_db[current_db.length - 1];
		    	if (/\./.test(last_item)){
			  		return this.display1.error();
		  		}
			}
			this.expression += num;
	    }
	});

//-------------------------displays------------------------------//	

	this.display1 = new Display('display1', input1_c);

	this.display2 = new Display('display2', input2_c);	

//----------------------calculator functions---------------------//

	this.doMathOper =  function (oper) {
		var exp = this.expression;
		if (getValidLast(exp) == false){
			return this.display1.error();
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
		this.expression = String(exp);
		this.history = String(display2_text);
	};

	this.insertExp = function () {
	   var exp = this.expression;
	    if (/[0-9]/.test(exp)) {
		    exp = exp.substring(0, exp.length - 1);
	    }
	    else { exp = ''; }
	    return this.expression = exp;
	};

	this.getClear = function () {
		this.expression = '';
		this.history = '';		
	};

	this.addMinus = function () {
		var exp = this.expression;
		var first = String(exp)[0];
		if (first == undefined) {return;}
		if (first != '-') {
			exp = "-" + exp;
		}
		else {
			exp = exp.substring(1);
		}
		return this.expression = exp;
	};

//-------------------------memory------------------------------//

	this.memory = new Array();

	this.getMPluMinus = function(sign){
		var memory;
		val = this.expression;
			if (this.reg[3].test(String(val)[String(val).length - 1])){
			return this.display1.error();
			}
		val = Number(getResult(val));
		if (this.memory[0] == undefined){
			this.memory[0] = 0;
			this.createMemoryElement();
		}
		switch (sign){
			case 'P':
				memory = Number(this.memory[0]) + Number(val);
				break;
			case 'M':
				memory = Number(this.memory[0]) - Number(val);
				break;
			}
		memory = +memory.toFixed(16);
		this.memory[0] = memory;
		var id = 'memory'+(memory_menu.children.length);
  		document.getElementById(id).innerHTML = this.memory[0];
	};

	this.getMemory = function (item){
		if (item < 0){return;}
		var revMem = this.memory.reverse()[item];
		this.memory.reverse();
		this.expression += revMem;	
	};
	
	this.clearMemory = function (){
		memory_menu.innerHTML = '';
		return this.memory = [];
	};

	this.visibleMemoryMenu = function (){
		return visibleElementById('memory_menu');
	};

	this.setMemory = function(){
		if (this.expression == ''){return}
		if (getValidLast(this.expression) == false){
			return this.display1.error();
		}
		this.memory.unshift(getResult(this.expression));
		this.createMemoryElement();
	};

	this.createMemoryElement = function(){
		var len = memory_menu.children.length;
		var div = document.createElement('div');
	  		div.id = "memory"+(len+1);
	  		div.style.width = '100%';
	  		div.style.height = '10%';
	  		div.style.background = '#f4f4f4';
	  		div.style.fontSize = '16px';
	  		div.style.marginBottom = '2px';
	  		div.style.textAlign = 'right';
	  		div.onclick = function(){
				var arg = String(len)+'MR';
	  			calc.getBtn(arg);
		    }
	  		div.innerHTML = this.memory[0];
		memory_menu.insertBefore(div, memory_menu.firstChild);
	};

//-------------------------buttons-----------------------------//

	this.getBtn = function (val){
		switch (true){
			case val == 'MS': this.setMemory(); break;
			case val == 'MV': this.visibleMemoryMenu(); break;
			case val == 'MC': this.clearMemory(); break;
			case val == 'minus': this.addMinus(); break;
			case val == 'clear': this.getClear(); break;
			case val == 'insexp': this.insertExp(); break;
			case /MR/.test(val): this.getMemory(parseInt(val)); break;
			case /[PM]/.test(val): this.getMPluMinus(val); break;
			case /[a-z]/.test(val): this.doMathOper(val); break;
			default: calc.btn = val;
		}
		this.display1.outputDisplay;
		this.display2.outputDisplay;
	};

	/*this.style = {
		display: "block",
		width: "320px"
	}

	document.getElementById(this.idHTML).style.display = this.style.display;
	document.getElementById(this.idHTML).style.width = this.style.width;*/

	//this.style = StyleCalulator();

}

//-------------------------------end calculator----------------------------------//
	
function Display(idElem, idParent) {
	var myInput = $(idParent).append('<input id='+idElem+'>');
	$(myInput).attr({
		'type': "text",
		'readonly': "readonly"
	});
	Object.defineProperty (this, 'outputDisplay', {
	    get: function() {
	    	element = document.getElementById(idElem);
    		setSizeId(idElem, this.expression);
    		$('#' + idElem).val(this.expression);
	    }
	});
	this.error = function(){ifErrorId(idElem);};
}		


			
/*function StyleCalulator() {
		this.display = "block";
		this.width = "320px";
		//idCalc
		document.getElementById(this.idCalc).style.display = this.display;
		document.getElementById(this.idCalc).style.width = this.width;			
}*/
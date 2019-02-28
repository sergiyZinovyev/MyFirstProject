var calc = {

	expression: '',

	history: '',

	memory: '',

	set btn (num) { 
		var exp = this.expression;
		if (String(exp).length > 200) {
			return this.display1.error();
		}
		if(reg_num.test(exp)){}
		else if (!isFinite(exp)) {
			return this.display1.error();
		}
		var last = String(exp)[String(exp).length - 1];
		var before = String(exp)[String(exp).length - 2];
	  	if (last == '0' && (before == none || reg_simb.test(before)) && reg_num.test(num)){
			return this.display1.error();
	  	}	
	  	if ((last == none || reg_simb2.test(last)) && reg_simb2.test(num)){
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
	},

	display1: new Display('display1'),

	display2: new Display('display2'),	

	doMathOper: function (oper) {
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
	},

	insertExp: function () {
	   var exp = this.expression;
	    if (/[0-9]/.test(exp)) {
		    exp = exp.substring(0, exp.length - 1);
	    }
	    else { exp = ''; }
	    return this.expression = exp;
	},

	getClear: function () {
		this.expression = '';
		this.history = '';		
	},

	addMinus: function () {
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
	},

	getMPluMinus: function(sign){
		var memory;
		val = this.expression;
			if (reg_simb2.test(String(val)[String(val).length - 1])){
			return this.display1.error();
			}
		val = Number(getResult(val));
		if (Number(this.memory) == undefined){this.memory = 0;}
		switch (sign){
			case 'P':
				memory = Number(this.memory) + val;
				break;
			case 'M':
				memory = Number(this.memory) - val;
				break;
			}
		return this.memory = memory;
	},

	getMemory: function (){
		if (Number(this.memory) == undefined){this.memory = 0;}
		return this.expression += this.memory;
	},
	
  clearMemory: function (){
	return this.memory = '';
  },

	buttons: function (val){
		switch (true){
			case val == 'MC': this.clearMemory(); break;
			case val == 'MR': this.getMemory(val); break;
			case /[PM]/.test(val): this.getMPluMinus(val); break;
			case val == 'minus': this.addMinus(); break;
			case val == 'clear': this.getClear(); break;
			case val == 'insexp': this.insertExp(); break;
			case /[a-z]/.test(val): this.doMathOper(val); break;
			default: calc.btn = val;
		}
		this.display1.outputDisplay;
		this.display2.outputDisplay;
	}
}

function Display(idElem,) {
	this.idElement = idElem;
	Object.defineProperty (this, 'outputDisplay', {
	    get: function() {
	    	element = document.getElementById(this.idElement);
    		setSizeId(this.idElement, this.expression);
    		element.value = this.expression;
	    }
	});
	this.error = function(){ifErrorId(this.idElement);};
}

Object.defineProperty (calc.display1, 'expression', {get: function() {return calc.expression;}});	
Object.defineProperty (calc.display2, 'expression', {get: function() {return calc.history;}});		
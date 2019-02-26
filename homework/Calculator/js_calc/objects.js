var calc = {
	expression: '',
	history: '',
	set btn (num) { 
		var exp = this.expression;
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
		  		//return ifErrorId('display1');
		  		return this.display.error();
	  		}
		}
		this.expression += num;
	},
	display: new Display('display1'),
	/*display: {
		idElement: 'display2',
		idElement1: 'display1',
		get expression() {return calc.expression;},
		get history() {return calc.history;},
		outputDisplay: function(){
			element = document.getElementById(this.idElement);
			setSizeId('display1', this.expression);
			element.value = this.history;
			display1.value = this.expression;
		},
		error: function(){ifErrorId(this.idElement1)}
	},*/
	doMathOper: function (oper) {
		var exp = this.expression;
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
	buttons: function (val){
		switch (true){
			case val == 'minus': this.addMinus(); break;
			case val == 'clear': this.getClear(); break;
			case val == 'insexp': this.insertExp(); break;
			case /[a-z]/.test(val): this.doMathOper(val); break;
			default: calc.btn = val;
		}
		this.display.outputDisplay();
	}
}

function Display(idElem) {
		this.idElement = idElem;
		//this.expr = calc.expression;
		Object.defineProperty (this, 'expression', {get: function() {return calc.expression;}});
		//Object.defineProperty (this, 'history', {get: function() {return calc.history;}}),
		this.outputDisplay = function(){
			element = document.getElementById(this.idElement);
			setSizeId(this.idElement, this.expression);
			element.value = this.expression;
		};
		this.error = function(){ifErrorId(this.idElement)};
	}
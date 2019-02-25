var calc = {
	expression: '',
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
		  		return ifErrorId('display1');
	  		}
		}
		setSizeId('display1', exp);
		this.expression += num;
	},
	display: function(){display1.value = this.expression;},
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
		setSizeId('display1', exp);
		this.expression = exp;
		document.getElementById('display2').value = display2_text;
	},
	buttons: function (val){
		if (/[a-z]/.test(val)){this.doMathOper(val);}
		else {calc.btn = val;}
		this.display();
	}
}


function getOff() {
	display1.value = "";
	document.getElementById('display2').value = "";
	calc.expression = '';			
}

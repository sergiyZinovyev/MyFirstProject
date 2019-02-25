
var processor = {
	doMathOper: function (oper) {
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
		}
}

function Button(val){
	this.value = val;
}
var btn = new Button(5);
//alert (btn.value);

var buttons = {}
var display = {}

var calc = {
	expression: 'exp',
	processor: processor,
  set btn (value) { 
      this.expression = value; 
  },
	display: function(){display1.value += this.expression;}
}

//calc.btn = 6;
//alert (calc.expression);
//alert(calc.processor);
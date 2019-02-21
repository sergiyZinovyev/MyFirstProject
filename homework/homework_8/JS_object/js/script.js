
var matrix = [[1,2,3], [4,5,6],[7,8,9]];
var sum = 0;
for (var i = matrix.length - 1; i>=0; i--){
	for(var n = matrix[i].length - 1; n>=0; n--){
		sum +=matrix[i][n];
	}
}
alert(sum);

/*var calculator = {
number1: 2,
number2: 3, 
sum: function(){return this.number1 + this.number2;},
mul: function(){return this.number1 * this.number2;}
};
alert( calculator.sum() );
alert( calculator.mul() );*/

function Calculator(num1, num2) {
    this.number1=num1;
    this.number2=num2;
    this.sum=function(){
	    var s = this.number1 + this.number2;
        return alert('Сума='+s);
    };
    this.mul=function(){
	    var s = this.number1 * this.number2;
        return alert('Добуток='+s);
    };
}

var calc = new Calculator(2, 3);
calc.sum();
calc.mul();
console.log(calc[0]);


















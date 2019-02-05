function script(){
	alert ("Hello");
	var a = 6;  
	var b = 3;
	console.log(a > b);

	var a2 = 3;
	var b2 = 3;
	console.log(a2 == b2);

	var a3 = 3;
	var b3 = 6;
	console.log(a3 != b3);

	var a4 = 1;
	var b4 = "";
	console.log(a4 === b4);

	console.log('B' > 'A', 'a' > 'Z');

	alert (
		'a = 6; b = 3; a > b:     '+(a > b)+'\n'+
		'a = 3; b = 3; a == b:   '+(a2 == b2)+'\n'+
		'a = 3; b = 6; a != b:    '+(a3 != b3)+'\n'+
		'a = 1; b=””; a === b:  '+(a4 === b4)+'\n'+
		'a = 1; b=””; a === b:  '+(a4 === b4)+'\n'


		);
	

}

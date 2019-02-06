function script(){
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
	
	var expression1 = 'B' > 'A';
	var expressinn2 = 'a' > 'Z';
	console.log('B' > 'A', 'a' > 'Z');
	
	var a5 = false;
	var b5 = 0;
	console.log(a5>b5);
	
	var term = ('2' === 2) ? 'ok' : 'not';
	console.log(term);
	
	var a6 = 5; 
	var b6 = 3;
  var term2 = (a>b) && (a===b);
  var term3 = true && '0' && ('a' < 'Z');
  var term4 = (a>b) || true || ('2'==2) || (false == '');
  var term5 = (a<b) && (0 == false);
  var term6 = !(2==2) || (true && '');
  console.log(term2, term3, term4, term5, term6);

	alert (
		'a = 6; b = 3; a > b:\t\t\t\t\t'+(a > b)+'\n'+
		'a = 3; b = 3; a == b:\t\t\t\t'+(a2 == b2)+'\n'+
		'a = 3; b = 6; a != b:\t\t\t\t\t'+(a3 != b3)+'\n'+
		'a = 1; b=””; a === b:\t\t\t\t'+(a4 === b4)+'\n'+
		'a = 1; b=””; a === b:\t\t\t\t'+(a4 === b4)+'\n'+
	  '\'B\' > \'A\', \'a\' > \'Z\':\t\t\t\t\t\t\t\t'+expression1+', '+expressinn2+'\n'+
    'a = false; b = 0; a>=b:\t'+(a5>b5)+'\n'+
    '(\'2\' === 2) ? \'ok\' : \'not\':\t'+term+'\n\n'+
    '(a>b) && (a===b):\t\t\t\t\t'+term2+'\n'+
    'true && 0 && (\'a\' < \'Z\'):\t'+term3+'\n'+
    '(a>b) || true || (\'2\'==2) || (false == \'\'):\t'+term4+'\n'+
    '(a<b) && (0 == false):\t'+term5+'\n'+
    '!(2==2) || (true && \'\'):\t\t'+term2
		);
}

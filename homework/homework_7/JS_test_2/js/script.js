function getSquare(x, y){
	var res = new Array();
	var item = 0;
	x = Number(x);
	y = Number(y);
	for(var i=0; i<=(y-x); i++){
		res[item] = (x+i)*(x+i);
		item +=1;
	}
	return res;
}
function getFuncFor(){
	//alert('test');
	var inp1 = document.getElementById('input1_for').value;
	//alert('inp1='+inp1);
	var inp2 = document.getElementById('input2_for').value;
	//alert('inp2='+inp2);
	res = getSquare(inp1, inp2);
	//alert('res='+res);
	document.getElementById('output_for').value = res;
	}
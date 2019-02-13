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
function getSquare2(x, y){
	var res = new Array();
	var item = 0;
	x = Number(x);
	y = Number(y);
	var i=0;
	while(i<=(y-x)){
		res[item] = (x+i)*(x+i);
		item +=1;
		i++;
	}
	return res;
}
function defineEvenInRandomRange(min, max){
	var random = Math.floor(Math.random() * (max - min + 1) ) + min;
	if(random == 0){
		console.log(random, ' - zero');
		return 0;
	}
	if(random%2 == 0){
		console.log(random, ' - even');
		return true;
	}
	else {
		console.log(random, ' - odd');
		return false;
	}
}
/*function getJoin(m){
	alert('test');
	for (var i off m) {
		var new_arr = string(m[i]);
		var text = '';
		for(var n=0; n<=new_arr.length; n++){
			if (n==0){
				new_arr[n] = new_arr[n].toUpperCase();
			}
			text = text.concat('', new_arr[n]);
		}
		var new_text = new_text.concat(' ', text);
	}
	alert(new_text);
}


var mas = ['lorem', 'ipsum', 'is', 'simply', 'dummy'];
getJoin(mas);*/


function getCountRepeat(){
	var min2 = Number(document.getElementById('input1_random').value);
	var max2 = Number(document.getElementById('input2_random').value);
	var res = 1;
	while(defineEvenInRandomRange(min2, max2) == false){
		res +=1;
	}
	document.getElementById('output_random').value = res;
	console.log('------------');
}
function getFuncFor(){
	var inp1 = document.getElementById('input1_for').value;
	var inp2 = document.getElementById('input2_for').value;
	res = getSquare(inp1, inp2);
	document.getElementById('output_for').value = res;
}
function getFuncWhile(){
	var inp1 = document.getElementById('input1_while').value;
	var inp2 = document.getElementById('input2_while').value;
	res = getSquare2(inp1, inp2);
	document.getElementById('output_while').value = res;
}

	
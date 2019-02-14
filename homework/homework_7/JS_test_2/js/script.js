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
function getJoinArr(m){
	var new_text;
	for(var i=0;  i<m.length; i++) {
		var new_arr = m[i];
		var text;
	  new_arr = String(new_arr);
		for(var n = 0; n<new_arr.length; n++){
			if(n == 0){
				text = new_arr[n].toUpperCase();
				continue;
				}
			text = text.concat('', new_arr[n]);
		}
		if (new_text == undefined) {
			var new_text = text;
			continue;
			}
		var new_text = new_text.concat(' ', text);
	}
	return new_text;
}

function getScript4(){
var mas = ['lorem', 'ipsum', 'is', 'simply', 'dummy'];
document.getElementById('output_join').value = getJoinArr(mas);
}

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

	
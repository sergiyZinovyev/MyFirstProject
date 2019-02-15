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
function getScript4(){
	var mas = new Array();
	var len = document.getElementsByClassName('inp_word').length;
	for (var i = 0; i < len; i++){
		mas[i] = document.getElementsByClassName('inp_word')[i].value;
	}
	document.getElementById('output_join').value = getJoinArr(mas);
}
function addInput(){
	var input = document.getElementsByClassName('inp_word')[0].cloneNode(true);
	input.value = '';
	inp_2.insertBefore(input, button2);
}

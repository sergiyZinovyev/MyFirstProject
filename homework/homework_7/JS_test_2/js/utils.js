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
	if (Math.abs(max - min) <= 1) {
		console.log('задайте діапазон');
		return;
	}
	if (Math.abs(max) == 1 && Math.abs(min) == 1){
		console.log('діапазон не містить парних значень');
		return;
	}
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
		if (m[i] == '') {continue;}
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
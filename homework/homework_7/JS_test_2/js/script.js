function getSquare(x, y){
	var res = new Array();
	var item = 0;
	for(var i=x; i<=y; i++){
		res[item] = i*i;
		item +=1;
	}
	alert (res);
}

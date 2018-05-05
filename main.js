var turn = 0;
var scoreX = 0;
var scoreO = 0;
function test(){
	
	document.getElementById("gc").innerHTML = check();
	var  r = document.getElementById("gc").innerHTML;
	if (r == "O wins!" || r == "X wins!"){
		setTimeout(res, 1000);
	}
		
	document.getElementById("sb").innerHTML = "[X]" + scoreX +" - "+scoreO+ "[O]";
}
function move() {
	
	turn++;
	if (turn % 2 == 0) {
		return "X";
	} else {
		
		
		return "O";
	}
}

function res() {
	var x = document.getElementsByClassName("el");
	document.getElementById("gc").innerHTML = "The O begins";
	for (i = 0; i < 9; i++) {
		x[i].innerHTML = "";
	}
}
function check(){
	
	var values = document.getElementsByClassName("el");
	
	if ( (values[0].innerHTML == "O" && values[1].innerHTML == "O" && values[2].innerHTML == "O") || (values[3].innerHTML == "O" && values[4].innerHTML == "O" && values[5].innerHTML == "O") || (values[6].innerHTML == "O" && values[7].innerHTML == "O" && values[8].innerHTML == "O") || (values[0].innerHTML == "O" && values[3].innerHTML == "O" && values[6].innerHTML == "O") || (values[1].innerHTML == "O" && values[4].innerHTML == "O" && values[7].innerHTML == "O") || (values[2].innerHTML == "O" && values[5].innerHTML == "O" && values[8].innerHTML == "O") || (values[0].innerHTML == "O" && values[4].innerHTML == "O" && values[8].innerHTML == "O") || (values[2].innerHTML == "O" && values[4].innerHTML == "O" && values[6].innerHTML == "O")){
		scoreO++;
		
		return "O wins!";
	}
	else if ((values[0].innerHTML == "X" && values[1].innerHTML == "X" && values[2].innerHTML == "X") || (values[3].innerHTML == "X" && values[4].innerHTML == "X" && values[5].innerHTML == "X") || (values[6].innerHTML == "X" && values[7].innerHTML == "X" && values[8].innerHTML == "X") || (values[0].innerHTML == "X" && values[3].innerHTML == "X" && values[6].innerHTML == "X") || (values[1].innerHTML == "X" && values[4].innerHTML == "X" && values[7].innerHTML == "X") || (values[2].innerHTML == "X" && values[5].innerHTML == "X" && values[8].innerHTML == "X") || (values[0].innerHTML == "X" && values[4].innerHTML == "X" && values[8].innerHTML == "X") || (values[2].innerHTML == "X" && values[4].innerHTML == "X" && values[6].innerHTML == "X")){
		scoreX++;
		
		return "X wins!";
		
	}
	else{
		if (turn % 2 == 0)
			return "O's turn...";
		else
			return "X's turn";
	}
	

}
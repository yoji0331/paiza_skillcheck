process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';
var ts;

process.stdin.on('data', function(chunk) {
  input_string += chunk;
});

process.stdin.on('end', function() {
  var lines = input_string.split('\n');
  var HWN = lines[0].split(' ');
  var H = Number(HWN[0]);
  var W = Number(HWN[1]);
  var N = Number(HWN[2]);
  var t=new Array(H);
  ts=new Array(H);
	var len =[];  
  var L=lines[1+H];
  var reverse=[];
  var tf = false;
	var num=0
	var answer = new Array(N).fill(0);

  for(var i=0;i<H;i++){
  	t[i] = lines[1+i];
  	len=t[i].split(' ');
  	ts[i] = new Array(len.length).fill(0);
  	for(var j=0;j<len.length;j++){
	  	len[j] = Number(len[j]);
	  	ts[i][j] = len[j];
  	}
  }
   for(var i=0;i<L;i++){
  	reverse[i] = lines[2+H+i];
  	if(num >= N){
  		num = 0;
  	}
  	tf = check(reverse[i]);
  	if(tf == false){
  		num ++;
  	} else{
  		answer[num] = answer[num] + 2;
  	}
  }
  for(var n=0;n<answer.length;n++){
	  console.log(answer[n]);	
  }
});

function check(reverse){
	var a_1,b_1,A_1,B_1;
	var temp = reverse.split(' ');
	a_1 = Number(temp[0]) -1;
	b_1 = Number(temp[1]) -1;
	A_1 = Number(temp[2]) -1;
	B_1 = Number(temp[3]) -1;
	if(ts[a_1][b_1] == ts[A_1][B_1]){
		return true;
	} else {
		return false;
	}
}
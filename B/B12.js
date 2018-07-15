process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
  input_string += chunk;
});

process.stdin.on('end', function() {
  var lines = input_string.split('\n');
  var count = lines[0];
  var i;
  var answers = [];
  for(i=0; i<count; i++){
  	answers[i] = check(i,lines[i+1]);
  }
  for(i=0; i<answers.length; i++){
  	console.log(answers[i]);
  }
});

function check(n,numbers){
	var even=0;
	var odd=0;
	var hoge,fuga;
	var j;
	for(j=0; j<15;j++){
		hoge = Number(numbers.substr(j,1));
		if(j%2 == 0){
			fuga = 2 * hoge;
			if(fuga > 9){
				fuga = Number(String(fuga).substr(0,1))+ Number(String(fuga).substr(1,1));
				even += fuga;
			} else {
				even += fuga;
			}
		} else {

			odd += hoge;
		}
	}
	var temp = (even + odd) % 10;
	if(temp == 0){
		return temp;
	}else{
		return 10 - temp;		
	}
};
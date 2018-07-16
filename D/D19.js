process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
  input_string = chunk;
});

process.stdin.on('end', function() {
	var line = input_string.split('\n');
	var str = line[0].split(' ');
	var num = Number(str[1]) - 1;
	console.log(str[0].substr(num ,1));
});
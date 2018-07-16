process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
  input_string = chunk;
});

process.stdin.on('end', function() {
	var lines = input_string.split('\n');
	var line_1 = lines[0];
	var line_2 = lines[1];
	var content_1 = line_1.split(' ');
	var content_2 = line_2.split(' ');
	var a = content_1[0];
	var b = content_1[1];
	var c = content_2[0];
	var d = content_2[1];


	var value = a * d - b * c ;
	console.log(value);

});
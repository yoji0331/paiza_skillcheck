process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
  input_string = chunk;
});

process.stdin.on('end', function() {
  var lines = input_string.split('\n');
  for(var i=0;i<lines.length-1;i++){
  	console.log(Number(lines[i+1]) - Number(lines[i]));
  }
 
});
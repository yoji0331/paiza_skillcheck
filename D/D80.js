process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
  input_string = chunk;
});

process.stdin.on('end', function() {
  var lines = input_string.split(' ');
  var value = Number(lines[0]) * 6000 + Number(lines[1]) * 4000;
  console.log(value); 
});
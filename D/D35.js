process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
  input_string = chunk;
});

process.stdin.on('end', function() {
  input_string = input_string.replace(/ /g, '/');
  console.log(input_string); 
});
process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
  input_string = chunk;
});

process.stdin.on('end', function() {
  var count = Number(input_string);
  var round = count * (count - 1) / 2
  console.log(round); 
});
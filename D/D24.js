process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
  input_string = chunk;
});

process.stdin.on('end', function() {
  var angle = input_string.split('\n');

  a1 = Number(angle[0]);
  a2 = Number(angle[1]);

  value = 180 - a1 - a2;
  console.log(value);
});
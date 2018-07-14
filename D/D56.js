process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
  input_string = chunk;
});

process.stdin.on('end', function() {
  var r = input_string.split(' ');

  r1 = Number(r[0]);
  r2 = Number(r[1]);

  value = Math.pow(r1, 3) - Math.pow(r2, 3);
  console.log(value);
});
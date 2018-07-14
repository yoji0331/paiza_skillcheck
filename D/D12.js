process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
  input_string = chunk;
});

process.stdin.on('end', function() {
  var value = Number(input_string);

  if(value<0){
  	value = -1 * value;
  }

  console.log(value);
});
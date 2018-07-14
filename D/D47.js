process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
  input_string = chunk;
});

process.stdin.on('end', function() {
  var countries = input_string.split('\n');
  console.log("Gold " + countries[0]);
  console.log("Silver " + countries[1]);
  console.log("Bronze " + countries[2]);
});
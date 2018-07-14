process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
  input_string = chunk;
});

process.stdin.on('end', function() {

	if('i' !== 'I'.toLowerCase()){
		input_string = manualUppercase(input_string);
	} else{
		input_string = input_string.toUpperCase();
	}
  console.log(input_string);
});

function manualUppercase(s){
  return s.replace(/[a-z]/g, function(ch) {return String.fromCharCode(ch.charCodeAt(0) & ~32);});	
};
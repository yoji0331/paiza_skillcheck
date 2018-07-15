process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';
var L,n,m,lines;

process.stdin.on('data', function(chunk) {
  input_string += chunk;
});

process.stdin.on('end', function() {
  var strings=input_string.split('\n');
  var Lnm = strings[0].split(' ');
  L = Number(Lnm[0]);
  n = Number(Lnm[1]);
  m = Number(Lnm[2]);
  for(var i=0;i<m;i++){
    lines[i] = strings[i+1];
  }
  console.log(lines);

});

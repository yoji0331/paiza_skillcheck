process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';
var jikoku;
var a,b,c,N;
var minutes;

process.stdin.on('data', function(chunk) {
  input_string += chunk;
});

process.stdin.on('end', function() {
  var lines=input_string.split('\n');
  var abc = lines[0].split(' ');
  a = Number(abc[0]);
  b = Number(abc[1]);
  c = Number(abc[2]);
  N = Number(lines[1]);
  jikoku = new Array(N);
  var ok = 0;
  for (var i=0;i<N;i++){
    minutes = 0;
    var temp=lines[i+2];
    var hoge=temp.split(' ');
    jikoku[i] = {hh: Number(hoge[0]),mm:Number(hoge[1])};
    console.log(jikoku[i]);
    var eki = jikoku[i].hh * 60 + jikoku[i].mm;
    console.log(eki);
    minutes = eki;
    minutes += b;
    minutes += c;
    if(minutes < 540){
      ok = eki - a;
    } else {
      break;
    }

  }
  if(minutes % 60 == 0){
    console.log("0"+Math.floor(minutes/60) + ":0" + minutes % 60);
  } else{
    console.log("0"+Math.floor(minutes/60) + ":" + minutes % 60);
  }    
});

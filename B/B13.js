process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';
var eki;
var a,b,c,N;

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
  eki = new Array(N);
  var ok = 0;
  for (var i=0;i<N;i++){
    var temp=lines[i+2];
    var hoge=temp.split(' ');
    eki[i] = {hh: Number(hoge[0]),mm:Number(hoge[1])};
    if(b+c+eki[i].hh*60+eki[i].mm < 540){
      ok = i;
    }

  }
  var ok_minutes=eki[ok].hh*60 + eki[ok].mm - a;
  console.log(ok);
  console.log(ok_minutes);
  if(ok_minutes < 0){
    ok_minutes = ok_minutes + 1440;
  }

  if(Math.floor(ok_minutes/60)> 10){
    console.log(Math.floor(ok_minutes/60) + ":" + ok_minutes % 60);
  } else{
    console.log("0"+ Math.floor(ok_minutes/60) + ":" + ok_minutes % 60);
  }    
});

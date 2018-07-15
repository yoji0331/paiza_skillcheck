process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';
var route=[];
var score=[];
var yuukennsya;

process.stdin.on('data', function(chunk) {
  input_string += chunk;
});

process.stdin.on('end', function() {
  var lines=input_string.split('\n');
  var MNK = lines[0].split(' ');
  var M = Number(MNK[0]);
  var N = Number(MNK[1]);
  var K = Number(MNK[2]);
  route = new Array(K).fill(0);
  score = new Array(M).fill(0);
  yuukennsya = N;

  for(var i=0;i<K;i++){
    route[i] = Number(lines[i+1]);
  }

  for(var i=0;i<K;i++){
    check(route[i]-1);
  }
  var top=[];
  var max=0;
  for(var i=0;i<M;i++){
    max = Math.max(max,score[i]);
  }
  for(var i=0;i<M;i++){
    if(max == score[i]){
      top.push(i);
    }
  }
  for(var i=0;i<top.length;i++){
    console.log(top[i] + 1);
  }
});

function check(m){
  if(yuukennsya > 0){
    score[m] = score[m] +1;
    yuukennsya = yuukennsya -1;
  }
  for(var i=0;i<score.length;i++){
    if(i == m){
    }
    else {
      if(score[i] > 0){
        score[i] = score[i] - 1;
        score[m] = score[m] + 1;
      }
    }
  } 
}
process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';
var route;
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
  route = new Array(N);
  for (var i=0;i<N;i++){
    var temp=lines[i+2];
    var hoge=temp.split(' ');
    route[i] = {hh: Number(hoge[0]),mm:Number(hoge[1])};
  }
  var temp=0;
  for(var i=0;i<route.length;i++){
    var tf = check(route[i]);
    if(tf == true){
      temp = i;
    }
  }
  console.log(getup(route[temp]));
});

var hoge = new Date('2018/07/16 09:00:00');
var huga;

function check(time){
  var dt = new Date('2018/07/16 00:00:00');
  dt.setHours(dt.getHours() + time.hh);
  dt.setMinutes(dt.getMinutes() + time.mm);
  var hassya = dt;
  hassya.setMinutes(hassya.getMinutes() + b);
  var toutyaku = hassya;
  toutyaku.setMinutes(toutyaku.getMinutes()+ c);
  var syussya= toutyaku;
  if(syussya.getTime()<hoge.getTime()){
    huga = syussya;
    return true;
  }
}
function getup(time){
  var h,m;
  var dt = new Date('2018/07/16 00:00:00');
  dt.setHours(dt.getHours() + time.hh);
  dt.setMinutes(dt.getMinutes() + time.mm);
  var getup = dt;
  getup.setMinutes(getup.getMinutes() - a);
  h = getup.getHours();
  m = getup.getMinutes();
  if(h<10){
    h = "0"+ h;
  }
  return "" + h + ":" + m;
}
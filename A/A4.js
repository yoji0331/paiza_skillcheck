process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';
var L,n,m,lines;
var connections;

process.stdin.on('data', function(chunk) {
  input_string += chunk;
});

process.stdin.on('end', function() {
  var strings=input_string.split('\n');
  var Lnm = strings[0].split(' ');
  L = Number(Lnm[0]);
  n = Number(Lnm[1]);
  m = Number(Lnm[2]);
  var temp = new Array(m);
  lines = new Array(m);
  connections = new Array(m);
  for(var i=0;i<m;i++){
    temp[i] = strings[i+1];
    var hoge=temp[i].split(' ');
    lines[i] = {a: Number(hoge[0]),
                b: Number(hoge[1]),
                c: Number(hoge[2])};
    connections[i] = {x: lines[i].a,
                      y: lines[i].b,
                      pear_x: lines[i].a +1,
                      pear_y: lines[i].c,
                    };
  }

  var tmp=L;
  var x=1;
  while(tmp > 0){
    for(var i=0;i<m;i++){
      if(x == connections[i].x && tmp == connections[i].y){
        x = connections[i].pear_x;
        tmp = connections[i].pear_y;
      } else if(x == connections[i].pear_x && tmp == connections[i].pear_y){
        x = connections[i].x;
        tmp = connections[i].y;
      }
    }
    tmp = tmp - 1;
  }
  console.log(x);

});

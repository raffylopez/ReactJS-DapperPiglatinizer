var nt = 100;
var fs = require('fs');

var lineReader = require("readline").createInterface({
  input: fs.createReadStream("inputfile.txt")
});

var lnum = 1;
var arr = [];
var results = [];

lineReader.on("line", function(line) {
  if (lnum === 1) console.log(parseInt(line) + " case/s");
  else {
    arr.push(parseInt(line));
  }
  lnum++;
});

var countMultiples = (from, to, num) => {
  var count = 0;
  for (var i = from; i <= to; i++) {
    if (i % num == 0) count++;
  }
  return count;
};

lineReader.on("close", () => {
  var a;
  var b;
  var n;
  for (var i = 0; i < arr.length; i++) {
    if (i % 3 == 0) {
      a = arr[i];
    } else if (i % 3 == 1) {
      b = arr[i];
    } else if (i % 3 == 2) {
      n = arr[i];
      var res = countMultiples(a, b, n);
      results.push(res);
    }
  }
  var c = 0
  var mapped = results.map((item)=>{
    return `Case ${++c}: ${item}`
  })
  var out = mapped.join('\n')
var fs = require('fs');
fs.writeFile("output.txt", out, (err)=> {
    if(err) {
        return console.log(err);
    }
    console.log("Done. Check 'output.txt'");
}); 
}); 

var fs = require('fs');

fs.readFile('WDI_Data.csv', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var txt = String(data);
  var rec=txt.split(/\r\n|\n/);
  var colHeader=rec[0].split(',');
  var x=[], y=[], z=[];
  for (var i = 1; i < rec.length; i++) {

    var mStr=rec[i].split(',');
    if (mStr.length == colHeader.length) {
      var record = [];
      for (var j = 0; j < colHeader.length; j++) {
          record.push(mStr[j]);
      }
      if (record[3]=='AG.LND.ARBL.ZS') {
          x.push(record);
        } else if (record[3]=='AG.LND.ARBL.HA.PC') {
          y.push(record);
        } else if (record[3]=='AG.LND.ARBL.HA') {
          z.push(record);
        }
    }
  }
  fs.writeFile('x.json', JSON.stringify(x), function (err) {
    if (err) throw err;
  });
  fs.writeFile('y.json', JSON.stringify(y), function (err) {
    if (err) throw err;
  });
  fs.writeFile('z.json', JSON.stringify(z), function (err) {
    if (err) throw err;
  });
});

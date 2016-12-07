var path = require('path');
var fs = require('fs');
var loopback = require('loopback')
var ds = loopback.createDataSource('mysql',{
  "host":"ubuntu.estebanf.com",
  "port":3306,
  "database":"bpmsdb",
  "username":"root",
  "password":"everteam"
});

ds.discoverSchema('BTS_CUSTOMER',{},function(err,schema){
  var outputPath = path.resolve(__dirname,'../common/models');
  var outputName = outputPath + '/' + schema.name + '.json';
  console.log(outputName);
  fs.writeFile(outputName,JSON.stringify(schema,null,2),function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Done");
    }
    return;
  })
});

  module.exports.function = function findFestivals (location) {
  const fakeData = require("StoreData.js");
  const console = require("console");
  
  var fesinfo = [];
  for(let i  =0; i<fakeData.length;i++)
  {
    if(fakeData[i].location == String(location))
    {
      fesinfo.push(fakeData[i]);
    }
  }
  
  return fesinfo;
}

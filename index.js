const proj4 = require('proj4');

proj4.defs('EPSG:5179',"+proj=tmerc+lat_0=38+lon_0=127.5+k=0.9996+x_0=1000000+y_0=2000000+ellps=GRS80+units=m+no_defs");

var grs80 = proj4.Proj(proj4.defs["EPSG:5179"]) 
var wgs84 = proj4.Proj(proj4.defs["EPSG:4326"]);

var p = proj4.Point(962897.2200992669, 1945598.5091623338);
p = proj4.transform( grs80, wgs84, p); 

console.log(`long : ${p.x}`);
console.log(`lat : ${p.y}`);

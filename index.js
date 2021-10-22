const thaipost = require('./lib/thaipost.js');

var thaiposttoken = 'Token Here'
var trackingcode = 'Tracking Nimber Here'

thaipost.getPackage(thaiposttoken, trackingcode).then((package) => {
  console.log(package);
})
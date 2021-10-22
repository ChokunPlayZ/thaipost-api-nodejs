const axios = require('axios');
const thaipost = require('./lib/thaipost.js');

var thaiposttoken = 'sssZ1QwC5NIRIW?S7WRMGIDPWXcL#S*JJOUAVAtCHR2BMH9WRJnK*SRQ8AOB;ZvFGVsQ$M#WsFEOwP=Z2PCCYK+PxO+CSAVIIHEMkKV'
var trackingcode = 'Tracking Nimber Here'

thaipost.getPackage(thaiposttoken, trackingcode).then((package) => {
  console.log(package);
})
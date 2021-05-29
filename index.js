const axios = require('axios')

var thaiposttoken = 'Z1QwC5NIRIW?S7WRMGIDPWXcL#S*JJOUAVAtCHR2BMH9WRJnK*SRQ8AOB;ZvFGVsQ$M#WsFEOwP=Z2PCCYK+PxO+CSAVIIHEMkKV'
var trackingcode = '6789OB073054764TH'

axios
  .post('https://trackapi.thailandpost.co.th/post/api/v1/authenticate/token', {} , {
      headers: {
          'Authorization': 'Token ' + thaiposttoken,
          'Content-Type': 'application/json'
      }
    })
  .then(res => {
      //start second axios instense
    axios.post('https://trackapi.thailandpost.co.th/post/api/v1/track', {
        "status": "all",
        "language": "TH",
        "barcode": [trackingcode]
    } , {
        headers: {
            'Authorization': 'Token ' + res.data.token,
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
    console.log(res.data.response.items[trackingcode])
    })
    .catch(error => {
    console.error(error)
    })
    // end new axios instence
  })
  .catch(error => {
    console.error(error)
  })


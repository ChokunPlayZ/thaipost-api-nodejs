const axios = require('axios')

var thaiposttoken = 'Token Here'
var trackingcode = 'Tracking Nimber Here'

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


const axios = require('axios');

// Made By ChokunPlayZ
// TikTok: @realchokunplayz
// YouTube: ChokunPlayZ
// Twitter: @chokuntweets
// GitHub: ChokunPlayZ

module.exports = {
    async getPackage (token, trackingcode){

        const authen_token = await axios.post('https://trackapi.thailandpost.co.th/post/api/v1/authenticate/token', {} , {
            headers: {
                'Authorization': 'Token ' + token,
                'Content-Type': 'application/json'
            }
        }).catch((err) => {
            Promise.reject(new Error("\n----------------------------------\nError Generating Token \nHTTP Error: "+err.response.status+"\nError Code: https://track.thailandpost.co.th/developerGuide \n----------------------------------\n\n"));
        });

        const track = await axios.post('https://trackapi.thailandpost.co.th/post/api/v1/track', {
          "status": "all",
          "language": "TH",
          "barcode": [trackingcode]
        } , {
          headers: {
              'Authorization': 'Token ' + authen_token.data.token,
              'Content-Type': 'application/json'
          }
        }).catch((err) => {
            Promise.reject(new Error("\n----------------------------------\nError Getting Package Data \nHTTP Error: "+err.response.status+"\nError Code: https://track.thailandpost.co.th/developerGuide \n----------------------------------\n\n"));
        });
        return Promise.resolve(track.data);
    }
};

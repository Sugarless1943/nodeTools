const axios = require("axios")

const Axios = axios.create({
    //release
    // headers: {
    //     corpId: '3403c1dd180a000',
    //     access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiYWRtaW4iLCJleHAiOjI1MzM3MDczNjAwMCwidXQiOiJTWVNfQURNSU4iLCJkdCI6IlBDIn0.ChD-lFH8h1oPMC-FSzd9mfl5Ocdy40jDnt08SetQNbg'
    // }
    
    //cloud
    headers: {
        corpId: '3403c1dd180a000',
        access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiYWRtaW4iLCJleHAiOjI1MzM3MDczNjAwMCwidXQiOiJTWVNfQURNSU4iLCJkdCI6IlBDIn0.ChD-lFH8h1oPMC-FSzd9mfl5Ocdy40jDnt08SetQNbg'
    }
})

module.exports = Axios
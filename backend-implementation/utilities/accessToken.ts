import axios from 'axios';

const consumerKey = 'XJJd2Kw3YUGiJAMACVBFhZKThdweMrCXsPlEUsGrI7LOpUAQ'; // Replace with your app Consumer Key
const consumerSecret = '74jrFXRHMVv9h2M6cbhPAxLLsLxoVS6vGlzI7Nypf34Z9sKScnbAIfvuv10YHTyz'; // Replace with your app Consumer Secret
const accessTokenUrl = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

const headers = {
  'Content-Type': 'application/json; charset=utf8',
  Authorization: `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')}`,
};

axios.post(accessTokenUrl, {}, { headers })
  .then(response => {
    const access_token = response.data.access_token;
    console.log('Access Token:', access_token);
  })
  .catch(error => {
    console.error(error.message || 'An error occurred while fetching the access token.');
  });

import axios from 'axios';

const stimulateTransactionUrl = 'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate';
const businessShortCode = '';
const amount = '';
const phone = '';
const billRefNumber = '';

const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your actual access token

const requestData = {
  ShortCode: businessShortCode,
  CommandID: 'CustomerPayBillOnline',
  Amount: amount,
  Msisdn: phone,
  BillRefNumber: billRefNumber
};

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  }
};

// Make an HTTP POST request
axios.post(stimulateTransactionUrl, requestData, config)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

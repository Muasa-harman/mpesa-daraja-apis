import axios from 'axios';

const processrequestUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
const callbackurl = 'https://1c95-105-161-14-223.ngrok-free.app/MPEsa-Daraja-Api/callback.php';
const passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
const businessShortCode = '174379';
const timestamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0]; // Format timestamp
// ENCRYPT DATA TO GET PASSWORD
const password = Buffer.from(`${businessShortCode}${passkey}${timestamp}`).toString('base64');
const phone = '254784130692'; // phone number to receive the stk push
const money = '1';
const partyA = phone;
const partyB = '254708374149';
const accountReference = 'UMESKIA SOFTWARES';
const transactionDesc = 'stkpush test';
const amount = money;

const requestData = {
  BusinessShortCode: businessShortCode,
  Password: password,
  Timestamp: timestamp,
  TransactionType: 'CustomerPayBillOnline',
  Amount: amount,
  PartyA: partyA,
  PartyB: businessShortCode,
  PhoneNumber: partyA,
  CallBackURL: callbackurl,
  AccountReference: accountReference,
  TransactionDesc: transactionDesc
};

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer YOUR_ACCESS_TOKEN` // Replace with your actual access token
  }
};

// Make an HTTP POST request
axios.post(processrequestUrl, requestData, config)
  .then(response => {
    const data = response.data;
    const checkoutRequestID = data.CheckoutRequestID;
    const responseCode = data.ResponseCode;

    if (responseCode === "0") {
      console.log(`The CheckoutRequestID for this transaction is: ${checkoutRequestID}`);
    } else {
      console.error('Transaction failed:', data);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

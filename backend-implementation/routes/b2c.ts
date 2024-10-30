import axios from 'axios';

const b2cUrl = 'https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest';
const initiatorName = '';
const businessShortCode = '600983';
const phone = '';
const amountSend = '';
const commandID = 'SalaryPayment'; // SalaryPayment, BusinessPayment, PromotionPayment
const partyA = businessShortCode;
const partyB = phone;
const remarks = 'Umeskia Withdrawal';
const queueTimeOutURL = 'https://1c95-105-161-14-223.ngrok-free.app/MPEsa-Daraja-Api/b2cCallbackurl.php';
const resultURL = 'https://1c95-105-161-14-223.ngrok-free.app/MPEsa-Daraja-Api/dataMaxcallbackurl.php';
const occasion = 'Online Payment';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer your_access_token`, // Replace with your actual access token
};

const requestData = {
  InitiatorName: initiatorName,
  SecurityCredential: 'your_security_credential', // Replace with your actual security credential
  CommandID: commandID,
  Amount: amountSend,
  PartyA: partyA,
  PartyB: partyB,
  Remarks: remarks,
  QueueTimeOutURL: queueTimeOutURL,
  ResultURL: resultURL,
  Occasion: occasion,
};

axios.post(b2cUrl, requestData, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error.message || 'An error occurred. Please try again later.');
  });

import axios from 'axios';

const taxRemittanceUrl = 'https://sandbox.safaricom.co.ke/mpesa/b2b/v1/remittax';
const businessShortCode = 600426;
const kraShortCode = 572572;
const kraPin = '353353';

const request_data = {
  Initiator: 'testapi',
  SecurityCredential: 'your_security_credential', // Replace with your actual security credential
  CommandID: 'PayTaxToKRA',
  SenderIdentifierType: '4',
  ReceiverIdentifierType: '4',
  Amount: 239,
  PartyA: businessShortCode,
  PartyB: kraShortCode,
  AccountReference: kraPin,
  Remarks: 'OK',
  QueueTimeOutURL: 'https://1c95-105-161-14-223.ngrok-free.app/MPEsa-Daraja-Api/QueueTimeOutURL.php',
  ResultURL: 'https://1c95-105-161-14-223.ngrok-free.app/MPEsa-Daraja-Api/ResultURL.php',
};

axios.post(taxRemittanceUrl, request_data, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer your_access_token`, // Replace with your actual access token
  },
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error.message || 'An error occurred. Please try again later.');
  });

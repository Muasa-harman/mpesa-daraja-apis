import axios from 'axios';

const AccountBalanceUrl = 'https://sandbox.safaricom.co.ke/mpesa/accountbalance/v1/query';
const InitiatorName = '';
const SecurityCredential = ''; // Add your actual security credential
const BusinessShortCode = ''; // Add your actual business short code

const request_data = {
  Initiator: InitiatorName,
  SecurityCredential,
  CommandID: 'AccountBalance',
  PartyA: BusinessShortCode,
  IdentifierType: '4',
  Remarks: 'ok',
  QueueTimeOutURL: 'https://1c95-105-161-14-223.ngrok-free.app/MPEsa-Daraja-Api/QueueTimeOutURL.php',
  ResultURL: 'https://1c95-105-161-14-223.ngrok-free.app/MPEsa-Daraja-Api/ResultURL.php',
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${access_token}`, // Add your actual access token
};

axios.post(AccountBalanceUrl, request_data, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

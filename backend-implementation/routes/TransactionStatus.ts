import axios from 'axios';

const transactionStatusUrl = 'https://sandbox.safaricom.co.ke/mpesa/transactionstatus/v1/query';
const initiatorName = 'testapi';
const transactionId = 'NEF61H8J60';
const businessShortCode = '600782';
const originatorConversationId = 'AG_20230719_201016fd6d6977cbe285';

const request_data = {
  Initiator: initiatorName,
  SecurityCredential: 'your_security_credential', // Replace with your actual security credential
  CommandID: 'TransactionStatusQuery',
  TransactionID: transactionId,
  OriginatorConversationID: originatorConversationId,
  PartyA: businessShortCode,
  IdentifierType: '4',
  ResultURL: 'https://1c95-105-161-14-223.ngrok-free.app/MPEsa-Daraja-Api/ResultURL.php',
  QueueTimeOutURL: 'https://1c95-105-161-14-223.ngrok-free.app/MPEsa-Daraja-Api/QueueTimeOutURL.php',
  Remarks: 'OK',
  Occasion: 'OK',
};

axios.post(transactionStatusUrl, request_data, {
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

import axios from 'axios';

const apiUrl = 'https://sandbox.safaricom.co.ke/mpesa/b2b/v1/paymentrequest';
const initiator = 'testapi';
const amount = '1';
const partyA = '600991'; // Business short code
const partyB = '000000'; // Merchant's short code or till number
const accountReference = '353353'; // A unique reference number for the transaction
const requester = '254700000000'; // Phone number of the person making the request
const remarks = 'OK'; // Optional remarks for the transaction
const queueTimeOutURL = 'https://e876-105-161-99-82.ngrok-free.app/MPEsa-Daraja-Api/Paybiil_to_Paybill_Callback.php';
const resultURL = 'https://e876-105-161-99-82.ngrok-free.app/MPEsa-Daraja-Api/Paybiil_to_Paybill_Callback.php';

// Prepare the request body as an object
const requestBody = {
  Initiator: initiator,
  SecurityCredential: 'your_security_credential', // Replace with your actual security credential
  CommandID: 'BusinessPayBill',
  SenderIdentifierType: '4',
  ReceiverIdentifierType: '4',
  Amount: amount,
  PartyA: partyA,
  PartyB: partyB,
  AccountReference: accountReference,
  Requester: requester,
  Remarks: remarks,
  QueueTimeOutURL: queueTimeOutURL,
  ResultURL: resultURL,
};

axios.post(apiUrl, requestBody, {
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

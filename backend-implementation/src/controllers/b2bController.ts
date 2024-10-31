// paybill to paybill

import axios from 'axios';
import { Request, Response } from 'express';
import B2BPaymentRequest from '../models/B2BPaymentRequest';

const apiUrl = 'https://sandbox.safaricom.co.ke/mpesa/b2b/v1/paymentrequest';
const initiator = 'testapi';
const amount = '1';
const partyA = '600991'; // Business short code
const partyB = '000000'; // Merchant's short code or till number
const accountReference = '353353'; // A unique reference number for the transaction
const requester = '254700000000'; // Phone number of the person making the request
const remarks = 'OK'; // Optional remarks for the transaction
const queueTimeOutURL = 'https://your-callback-url.com/paybill_callback';
const resultURL = 'https://your-callback-url.com/paybill_callback';

export const b2bPaymentRequest = async (req: Request, res: Response) => {
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

  try {
     // Save the request to the database
     const b2bPaymentRequest = new B2BPaymentRequest(requestBody);
     await b2bPaymentRequest.save();

    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer your_access_token`, // Replace with your actual access token
      },
    });
    // Update the database entry with response data if necessary
    b2bPaymentRequest.responseCode = response.data.ResponseCode || '';
    b2bPaymentRequest.mpesaReceiptNumber = response.data.MpesaReceiptNumber || '';
    b2bPaymentRequest.transactionDate = new Date(); // Set current date as transaction date
    await b2bPaymentRequest.save();
    
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
};

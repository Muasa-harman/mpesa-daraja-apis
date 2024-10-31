// Paybiil_to_Paybill
import B2BPaymentRequest from '../models/B2BPaymentRequest';
import axios from 'axios';
import { Request, Response } from 'express';

const apiUrl = 'https://sandbox.safaricom.co.ke/mpesa/b2b/v1/paymentrequest';
const initiator = 'testapi'; // You may want to extract this from req.body in a real app
const partyA = '600991'; // Business short code
const partyB = '000000'; // Merchant's short code or till number
const accountReference = '353353'; // A unique reference number for the transaction
const requester = '254700000000'; // Phone number of the person making the request
const remarks = 'OK'; // Optional remarks for the transaction
const queueTimeOutURL = 'https://e876-105-161-99-82.ngrok-free.app/MPEsa-Daraja-Api/Paybiil_to_Paybill_Callback.php';
const resultURL = 'https://e876-105-161-99-82.ngrok-free.app/MPEsa-Daraja-Api/Paybiil_to_Paybill_Callback.php';

export const b2bPaymentRequest = async (req: Request, res: Response) => {
  const amount = req.body.amount; // Amount should be sent in the request body

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

    // Update the database entry with response data
    b2bPaymentRequest.responseCode = response.data.ResponseCode || '';
    b2bPaymentRequest.mpesaReceiptNumber = response.data.MpesaReceiptNumber || '';
    b2bPaymentRequest.transactionDate = new Date(); // Set current date as transaction date
    await b2bPaymentRequest.save();

    res.status(200).json(response.data);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message || 'An error occurred. Please try again later.' });
  }
};

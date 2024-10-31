import B2CPaymentRequest from '../models/B2CPaymentRequest';
import axios from 'axios';
import { Request, Response } from 'express';

const b2cUrl = 'https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest';
const initiatorName = ''; // Set your initiator name
const businessShortCode = '600983';
const phone = ''; // Set the recipient's phone number
const amountSend = ''; // Set the amount to send
const commandID = 'SalaryPayment'; // Command ID can be SalaryPayment, BusinessPayment, PromotionPayment
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

// B2C Payment Request Controller
export const b2cPaymentRequest = async (req: Request, res: Response) => {
    const amount = req.body.amount; // Amount should be sent in the request body
    const phone = req.body.phone; // Recipient's phone number should also be in the request body
  
    const requestData = {
      InitiatorName: initiatorName,
      SecurityCredential: 'your_security_credential', // Replace with your actual security credential
      CommandID: commandID,
      Amount: amount, // Use amount from req.body
      PartyA: partyA,
      PartyB: phone, // Use the phone from the request body
      Remarks: remarks,
      QueueTimeOutURL: queueTimeOutURL,
      ResultURL: resultURL,
      Occasion: occasion,
    };
  
    try {
      // Save the request to the database
      const b2cPaymentRequest = new B2CPaymentRequest(requestData);
      await b2cPaymentRequest.save();
  
      const response = await axios.post(b2cUrl, requestData, { headers });
      res.status(200).json(response.data);
  
      // Optionally update the database entry with response data if required
      b2cPaymentRequest.responseCode = response.data.ResponseCode || '';
      b2cPaymentRequest.mpesaReceiptNumber = response.data.MpesaReceiptNumber || '';
      b2cPaymentRequest.transactionDate = new Date(); // Set current date as transaction date
      await b2cPaymentRequest.save();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
  };
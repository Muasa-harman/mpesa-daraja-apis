// controllers/accountBalanceController.ts
import axios from 'axios';
import { Request, Response } from 'express';
import AccountBalanceInquiryModel from '../models/AccountBalanceInquiry'; // Import the model

const AccountBalanceUrl = 'https://sandbox.safaricom.co.ke/mpesa/accountbalance/v1/query';
const InitiatorName = ''; // Add your actual initiator name
const SecurityCredential = ''; // Add your actual security credential
const BusinessShortCode = ''; // Add your actual business short code
const accessToken = ''; // Add your actual access token

export const checkAccountBalance = async (req: Request, res: Response) => {
  try {
    const requestData = {
      Initiator: InitiatorName,
      SecurityCredential,
      CommandID: 'AccountBalance',
      PartyA: BusinessShortCode,
      IdentifierType: '4',
      Remarks: 'ok',
      QueueTimeOutURL: 'https://your-ngrok-url/MPEsa-Daraja-Api/QueueTimeOutURL.php',
      ResultURL: 'https://your-ngrok-url/MPEsa-Daraja-Api/ResultURL.php',
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    };

    const response = await axios.post(AccountBalanceUrl, requestData, { headers });

    // Create a new account balance inquiry record
    const accountBalanceInquiry = new AccountBalanceInquiryModel({
      initiatorName: InitiatorName,
      businessShortCode: BusinessShortCode,
      responseCode: response.data.ResponseCode || '',
      responseMessage: response.data.ResponseDescription || '',
    });

    // Save the inquiry to the database
    await accountBalanceInquiry.save();

    res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Error checking account balance:', error);
    res.status(500).json({ error: 'Failed to check account balance' });
  }
};

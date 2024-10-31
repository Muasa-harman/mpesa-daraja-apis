// Import necessary modules
import USSDExpressCheckout from '../models/USSDExpressCheckout';
import axios from 'axios';

const B2BExpressCheckOutUrl = 'https://sandbox.safaricom.co.ke/v1/ussdpush/get-msisdn';
const primaryShortCode = '7318002';
const receiverShortCode = '174379';

// Generate Request ID
const generateRandomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// B2B Express Checkout Controller
export const b2bExpressCheckout = async (req: any, res: any) => {
  const FirstCode = generateRandomString(5);
  const SecondCode = generateRandomString(8);
  const ThirdCode = generateRandomString(6);
  const FourthCode = generateRandomString(6);
  const RequestRefID = `${FirstCode}-${SecondCode}-${ThirdCode}-${FourthCode}`;

  const amount = 10;
  const accessToken = 'your_access_token'; // Replace with your actual access token

  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  const requestData = {
    primaryShortCode,
    receiverShortCode,
    amount,
    paymentRef: 'paymentRef',
    callbackUrl: 'http://your-callback-url.com/result',
    partnerName: 'Vendor',
    RequestRefID,
  };

  try {
    // Save the request to the database
    const ussdExpressCheckout = new USSDExpressCheckout(requestData);
    await ussdExpressCheckout.save();

    const response = await axios.post(B2BExpressCheckOutUrl, requestData, { headers });
    
    // Optionally update the database entry with response data
    ussdExpressCheckout.responseCode = response.data.ResponseCode || '';
    ussdExpressCheckout.transactionDate = new Date(); // Set current date as transaction date
    await ussdExpressCheckout.save();

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
};



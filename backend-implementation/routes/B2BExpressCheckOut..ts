import axios from 'axios';

const B2BExpressCheckOutUrl = 'https://sandbox.safaricom.co.ke/v1/ussdpush/get-msisdn';
const primaryShortCode = '7318002';
const receiverShortCode = '174379';

// Generate Request ID
const generateRandomString = (length: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

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

axios.post(B2BExpressCheckOutUrl, requestData, { headers })
  .then((response: { data: any; }) => {
    console.log(response.data);
  })
  .catch((error: any) => {
    console.error(error);
  });

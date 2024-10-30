import axios from 'axios';

// Include your access token file or define the access token here
const accessToken = 'your_access_token';

const queryUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query';
const businessShortCode = '174379';
const timestamp = new Date().toISOString().replace(/[^0-9]/g, '');
const passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';

// Encrypt data to get password
const password = Buffer.from(businessShortCode + passkey + timestamp).toString('base64');

// This is the unique ID that was generated when STK request initiated successfully
const checkoutRequestID = 'ws_CO_03072023054410314768168060';

const queryHeader = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + accessToken,
};

// Initiating the transaction
const queryData = {
  BusinessShortCode: businessShortCode,
  Password: password,
  Timestamp: timestamp,
  CheckoutRequestID: checkoutRequestID,
};

axios.post(queryUrl, queryData, { headers: queryHeader })
  .then((response) => {
    const dataTo = response.data;
    let message;

    if (dataTo.ResultCode) {
      const resultCode = dataTo.ResultCode;

      if (resultCode === '1037') {
        message = '1037 Timeout in completing transaction';
      } else if (resultCode === '1032') {
        message = '1032 Transaction has been cancelled by user';
      } else if (resultCode === '1') {
        message = '1 The balance is insufficient for the transaction';
      } else if (resultCode === '0') {
        message = '0 The transaction was successful';
      }
    }

    console.log(message);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

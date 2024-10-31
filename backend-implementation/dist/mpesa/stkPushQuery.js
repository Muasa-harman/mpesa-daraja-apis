// services/stkPushQuery.ts
import axios from 'axios';
// Include your access token file or define the access token here
const accessToken = 'your_access_token'; // Replace with your actual access token
const queryUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query';
const businessShortCode = '174379'; // Replace with your actual business short code
const passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'; // Replace with your actual passkey
export const queryStkPush = async (checkoutRequestID) => {
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '');
    const password = Buffer.from(businessShortCode + passkey + timestamp).toString('base64');
    const response = await axios.get(`your_api_url/${checkoutRequestID}`);
    return response.data;
    const queryHeader = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken,
    };
    // Prepare the request body
    const queryData = {
        BusinessShortCode: businessShortCode,
        Password: password,
        Timestamp: timestamp,
        CheckoutRequestID: checkoutRequestID,
    };
    try {
        const response = await axios.post(queryUrl, queryData, { headers: queryHeader });
        return handleQueryResponse(response.data);
    }
    catch (error) {
        console.error('Error querying STK Push:', error.message);
        throw new Error('Failed to query STK Push transaction');
    }
};
const handleQueryResponse = (data) => {
    if (data.ResultCode) {
        switch (data.ResultCode) {
            case '1037':
                return '1037: Timeout in completing transaction';
            case '1032':
                return '1032: Transaction has been cancelled by user';
            case '1':
                return '1: The balance is insufficient for the transaction';
            case '0':
                return '0: The transaction was successful';
            default:
                return 'Unknown Result Code: ' + data.ResultCode;
        }
    }
    return 'No Result Code in response';
};

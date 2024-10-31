// services/stkPushService.ts
import axios from 'axios';
const processRequestUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
const callbackUrl = 'https://1c95-105-161-14-223.ngrok-free.app/MPEsa-Daraja-Api/callback.php'; // Your callback URL
const passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919"; // Replace with your actual passkey
const businessShortCode = '174379'; // Replace with your business short code
// Function to generate the password
const generatePassword = (shortCode, passkey, timestamp) => {
    return Buffer.from(`${shortCode}${passkey}${timestamp}`).toString('base64');
};
// Function to process STK Push request
export const processSTKPush = async (phone, amount, accessToken) => {
    const timestamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0]; // Format timestamp
    const password = generatePassword(businessShortCode, passkey, timestamp);
    const requestData = {
        BusinessShortCode: businessShortCode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phone,
        PartyB: businessShortCode,
        PhoneNumber: phone,
        CallBackURL: callbackUrl,
        AccountReference: 'UMESKIA SOFTWARES',
        TransactionDesc: 'stkpush test'
    };
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}` // Replace with your actual access token
        }
    };
    try {
        const response = await axios.post(processRequestUrl, requestData, config);
        return response.data;
    }
    catch (error) {
        console.error('Error processing STK Push:', error.message);
        throw new Error('Failed to process STK Push request');
    }
};

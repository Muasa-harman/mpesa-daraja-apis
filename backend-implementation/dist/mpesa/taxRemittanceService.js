// services/taxRemittanceService.ts
import axios from 'axios';
const taxRemittanceUrl = 'https://sandbox.safaricom.co.ke/mpesa/b2b/v1/remittax';
const businessShortCode = 600426; // Replace with your business short code
const kraShortCode = 572572; // KRA short code
const kraPin = '353353'; // KRA pin
// Function to process tax remittance
export const remitTax = async (amount, accessToken) => {
    const requestData = {
        Initiator: 'testapi',
        SecurityCredential: 'your_security_credential',
        CommandID: 'PayTaxToKRA',
        SenderIdentifierType: '4',
        ReceiverIdentifierType: '4',
        Amount: amount,
        PartyA: businessShortCode,
        PartyB: kraShortCode,
        AccountReference: kraPin,
        Remarks: 'OK',
        QueueTimeOutURL: 'https://1c95-105-161-14-223.ngrok-free.app/MPEsa-Daraja-Api/QueueTimeOutURL.php',
        ResultURL: 'https://1c95-105-161-14-223.ngrok-free.app/MPEsa-Daraja-Api/ResultURL.php',
    };
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`, // Replace with your actual access token
        },
    };
    try {
        const response = await axios.post(taxRemittanceUrl, requestData, config);
        return response.data; // Return the response data for further processing
    }
    catch (error) {
        console.error('Error remitting tax:', error.message);
        throw new Error('Failed to remit tax');
    }
};

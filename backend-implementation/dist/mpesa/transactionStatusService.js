// services/transactionStatusService.ts
import axios from 'axios';
const transactionStatusUrl = 'https://sandbox.safaricom.co.ke/mpesa/transactionstatus/v1/query';
// Function to check the status of a transaction
export const checkTransactionStatus = async (initiatorName, transactionId, originatorConversationId, accessToken) => {
    const requestData = {
        Initiator: initiatorName,
        SecurityCredential: 'your_security_credential',
        CommandID: 'TransactionStatusQuery',
        TransactionID: transactionId,
        OriginatorConversationID: originatorConversationId,
        PartyA: '600782',
        IdentifierType: '4',
        ResultURL: 'https://1c95-105-161-14-223.ngrok-free.app/MPEsa-Daraja-Api/ResultURL.php',
        QueueTimeOutURL: 'https://1c95-105-161-14-223.ngrok-free.app/MPEsa-Daraja-Api/QueueTimeOutURL.php',
        Remarks: 'OK',
        Occasion: 'OK',
    };
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`, // Replace with your actual access token
        },
    };
    try {
        const response = await axios.post(transactionStatusUrl, requestData, config);
        return response.data; // Return the response data for further processing
    }
    catch (error) {
        console.error('Error checking transaction status:', error.message);
        throw new Error('Failed to check transaction status');
    }
};

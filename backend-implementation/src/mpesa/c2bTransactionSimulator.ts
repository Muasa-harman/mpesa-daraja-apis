// services/c2bTransactionSimulator.ts
import axios from 'axios';

const stimulateTransactionUrl = 'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate';

// Function to simulate a C2B transaction
export const simulateC2BTransaction = async (
  businessShortCode: string,
  amount: number,
  phone: string,
  billRefNumber: string,
  accessToken: string
) => {
  const requestData = {
    ShortCode: businessShortCode,
    CommandID: 'CustomerPayBillOnline',
    Amount: amount,
    Msisdn: phone,
    BillRefNumber: billRefNumber
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  };

  try {
    const response = await axios.post(stimulateTransactionUrl, requestData, config);
    return response.data; // Return the response data for further processing
  } catch (error:any) {
    console.error('Error simulating C2B transaction:', error.message);
    throw new Error('Failed to simulate C2B transaction');
  }
};

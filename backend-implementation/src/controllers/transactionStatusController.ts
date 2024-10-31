// controllers/transactionStatusController.ts
import { Request, Response } from 'express';
import { checkTransactionStatus } from '../mpesa/transactionStatusService';
import Transaction from '../models/Transaction'; // Import the Transaction model

// Controller for processing transaction status requests
export const transactionStatusController = async (req: Request, res: Response) => {
  const { initiatorName, transactionId, originatorConversationId, accessToken } = req.body;

  try {
    // Check the transaction status
    const responseData = await checkTransactionStatus(initiatorName, transactionId, originatorConversationId, accessToken);

    // Extract relevant data from the response
    const { MerchantRequestID, CheckoutRequestID, ResultCode, Amount, MpesaReceiptNumber, PhoneNumber } = responseData;

    // Save the transaction status to the database
    const transaction = new Transaction({
      MerchantRequestID,
      CheckoutRequestID,
      ResultCode,
      Amount: Amount || 0, // Default to 0 if Amount is not available
      MpesaReceiptNumber: MpesaReceiptNumber || '', // Default to an empty string if not available
      PhoneNumber: PhoneNumber || '' // Default to an empty string if not available
    });

    await transaction.save();

    // Send the response data back to the client
    res.status(200).json(responseData);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};






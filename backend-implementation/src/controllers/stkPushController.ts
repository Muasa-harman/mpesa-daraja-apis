// controllers/stkPushController.ts
import { Request, Response } from 'express';
import { processSTKPush } from '../mpesa/stkPushService';
import StkPushTransaction from '../models/StkPushTransaction'; // Import the model

// Controller for processing STK Push requests
export const stkPushController = async (req: Request, res: Response) => {
  const { phone, amount, accessToken } = req.body;

  try {
    const responseData = await processSTKPush(phone, amount, accessToken);
    const checkoutRequestID = responseData.CheckoutRequestID;
    const responseCode = responseData.ResponseCode;

    // Create a new STK Push transaction record
    const stkPushTransaction = new StkPushTransaction({
      phone,
      amount,
      checkoutRequestID,
      responseCode,
      transactionDate: new Date(), // Current date
    });

    // Save the transaction to the database
    await stkPushTransaction.save();

    if (responseCode === "0") {
      res.status(200).json({ message: `The CheckoutRequestID for this transaction is: ${checkoutRequestID}` });
    } else {
      res.status(400).json({ error: 'Transaction failed', details: responseData });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

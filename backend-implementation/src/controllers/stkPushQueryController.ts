// controllers/stkPushController.ts
import { Request, Response } from 'express';
import { queryStkPush } from '../mpesa/stkPushQuery';
import StkPushQuery from '../models/StkPushQuery'; // Import the model

export const stkPushQueryController = async (req: Request, res: Response) => {
  const checkoutRequestID = req.body.checkoutRequestID; // Get the CheckoutRequestID from the request body

  try {
    // Create a new STK Push query record
    const stkPushQuery = new StkPushQuery({
      checkoutRequestID,
    });

    // Save the request to the database
    await stkPushQuery.save();

    // Query the STK Push status
    const resultMessage = await queryStkPush(checkoutRequestID); // This should return an object matching the response interface

    // Update the database entry with response data
    stkPushQuery.resultCode = resultMessage.ResultCode || ''; // Access ResultCode properly
    stkPushQuery.resultMessage = resultMessage.ResultMessage || ''; // Access ResultMessage properly
    stkPushQuery.transactionDate = new Date(); // Set current date as transaction date
    await stkPushQuery.save();

    res.status(200).json({ message: resultMessage });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// controllers/taxRemittanceController.ts
import { Request, Response } from 'express';
import { remitTax } from '../mpesa/taxRemittanceService';
import TaxRemittance from '../models/TaxRemittance'; // Import the model

// Controller for processing tax remittance requests
export const taxRemittanceController = async (req: Request, res: Response) => {
  const { amount, accessToken } = req.body;

  try {
    // Create a new tax remittance record
    const taxRemittance = new TaxRemittance({
      amount,
      accessToken,
    });
    
    // Save the request to the database
    await taxRemittance.save();

    // Process the tax remittance
    const responseData = await remitTax(amount, accessToken);
    
    // Update the database entry with response data
    taxRemittance.responseCode = responseData.ResponseCode || '';
    taxRemittance.transactionDate = new Date(); // Set current date as transaction date
    await taxRemittance.save();

    res.status(200).json(responseData); // Send the response data back to the client
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

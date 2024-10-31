// controllers/callbackController.ts
import * as fs from 'fs';
import { Request, Response } from 'express';
import CallbackResponse from '../models/CallbackResponse'; // Import the model

const logFile = 'Paybill_To_Paybill.json';

// Function to handle logging the callback response to the database
const saveCallbackToDatabase = async (callbackResponse: object) => {
  const logEntry = new CallbackResponse({
    timestamp: new Date(),
    response: callbackResponse,
  });
  await logEntry.save();
};

export const callbackHandler = async (req: Request, res: Response) => {
  const callbackResponse = req.body; // Assuming the callback sends JSON in the body

  try {
    await saveCallbackToDatabase(callbackResponse); // Log the response to the database
    res.status(200).json({ message: 'Callback received' }); // Acknowledge receipt
  } catch (error) {
    console.error('Error saving callback response:', error);
    res.status(500).json({ error: 'Failed to save callback response' });
  }
};


// // controllers/callbackController.ts
// import * as fs from 'fs';
// import { Request, Response } from 'express';

// const logFile = 'Paybill_To_Paybill.json';

// const handleCallback = (callbackResponse: string) => {
//   fs.appendFile(logFile, callbackResponse, (err) => {
//     if (err) {
//       console.error(`Error writing to ${logFile}: ${err.message}`);
//     } else {
//       console.log(`Callback response logged to ${logFile}`);
//     }
//   });
// };

// export const callbackHandler = (req: Request, res: Response) => {
//   const callbackResponse = req.body; // Assuming the callback sends JSON in the body
//   handleCallback(JSON.stringify(callbackResponse)); // Convert to string for logging
//   res.status(200).json({ message: 'Callback received' }); // Acknowledge receipt
// };

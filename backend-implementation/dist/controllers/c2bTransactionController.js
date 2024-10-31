import { simulateC2BTransaction } from '../mpesa/c2bTransactionSimulator';
import C2BTransaction from '../models/C2BTransaction'; // Import the model
export const c2bTransactionController = async (req, res) => {
    const { businessShortCode, amount, phone, billRefNumber, accessToken } = req.body;
    try {
        const responseData = await simulateC2BTransaction(businessShortCode, amount, phone, billRefNumber, accessToken);
        // Save the transaction details to the database
        const transactionLog = new C2BTransaction({
            businessShortCode,
            amount,
            phone,
            billRefNumber,
            response: responseData,
        });
        await transactionLog.save(); // Save the transaction log
        res.status(200).json(responseData);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// // controllers/c2bTransactionController.ts
// import { Request, Response } from 'express';
// import { simulateC2BTransaction } from '../mpesa/c2bTransactionSimulator';
// export const c2bTransactionController = async (req: Request, res: Response) => {
//   const { businessShortCode, amount, phone, billRefNumber, accessToken } = req.body;
//   try {
//     const responseData = await simulateC2BTransaction(businessShortCode, amount, phone, billRefNumber, accessToken);
//     res.status(200).json(responseData);
//   } catch (error:any) {
//     res.status(500).json({ error: error.message });
//   }
// };

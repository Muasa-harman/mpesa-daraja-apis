// routes/transactionStatusRoutes.ts
import express from 'express';
import { transactionStatusController } from '../controllers/transactionStatusController';

const router = express.Router();

router.post('/transaction-status', transactionStatusController); // Route to check transaction status

export default router;

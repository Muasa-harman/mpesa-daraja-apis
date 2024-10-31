// routes/c2bTransactionRoutes.ts
import express from 'express';
import { c2bTransactionController } from '../controllers/c2bTransactionController';
const router = express.Router();
router.post('/simulate-c2b-transaction', c2bTransactionController);
export default router;

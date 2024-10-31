// routes/taxRemittanceRoutes.ts
import express from 'express';
import { taxRemittanceController } from '../controllers/taxRemittanceController';

const router = express.Router();

router.post('/tax-remittance', taxRemittanceController); // Route to process tax remittance

export default router;

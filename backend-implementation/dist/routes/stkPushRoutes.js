// routes/stkPushRoutes.ts
import express from 'express';
import { stkPushController } from '../controllers/stkPushController';
const router = express.Router();
router.post('/stk-push', stkPushController); // Route to process STK Push
export default router;

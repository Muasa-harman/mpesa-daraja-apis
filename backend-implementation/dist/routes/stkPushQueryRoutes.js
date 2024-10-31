// routes/stkPushRoutes.ts
import express from 'express';
import { stkPushQueryController } from '../controllers/stkPushQueryController';
const router = express.Router();
router.post('/stk-push-query', stkPushQueryController);
export default router;

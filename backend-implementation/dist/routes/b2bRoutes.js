import express from 'express';
import { b2bPaymentRequest } from '../controllers/b2bController';
const router = express.Router();
// Define the route for B2B payment requests
router.post('/b2b/payment', b2bPaymentRequest);
export default router;

import express from 'express';
import { b2cPaymentRequest } from '../controllers/b2cController';
const router = express.Router();
// Define the B2C route
router.post('/b2c-payment', b2cPaymentRequest);
export default router;

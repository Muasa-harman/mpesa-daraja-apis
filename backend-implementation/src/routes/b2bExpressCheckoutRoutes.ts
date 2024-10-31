import express from 'express';
import { b2bExpressCheckout } from '../controllers/b2bExpressCheckoutController';

const router = express.Router();

// // Define the route
router.post('/b2b/express-checkout', b2bExpressCheckout);

export default router;

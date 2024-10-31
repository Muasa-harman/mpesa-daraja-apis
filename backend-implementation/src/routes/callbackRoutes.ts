// routes/callbackRoutes.ts
import { Router } from 'express';
import { callbackHandler } from '../controllers/callbackController';
import { handleQueueTimeOutCallback } from '../utilities/queueTimeOutCallbackHandler';


const router = Router();

// Define the route for M-Pesa callbacks
router.post('/mpesa/callback', callbackHandler);
router.post('/queue-timeout-callback', (req, res) => {
    const callbackResponse = JSON.stringify(req.body); // Assuming the response is JSON
    handleQueueTimeOutCallback(callbackResponse);
    res.status(200).send('Callback processed');
  });

export default router;

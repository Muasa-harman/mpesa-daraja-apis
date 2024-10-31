import express from 'express';
import handleCallback from '../callbackHandler';
const router = express.Router();
// Your existing routes...
// Example callback route
router.post('/callback-url', (req, res) => {
    const callbackResponse = JSON.stringify(req.body); // Assuming the response is sent in the request body
    handleCallback(callbackResponse);
    res.status(200).send('Callback received');
});
export default router;

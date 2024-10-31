import { Router } from 'express';
import { checkAccountBalance } from '../controllers/mpesaController';

const router = Router();

router.post('/check-balance', checkAccountBalance);

export default router;

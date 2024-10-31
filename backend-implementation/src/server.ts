import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import b2bRoutes from './routes/b2bRoutes';
import mpesaRoutes from './routes/mpesaRoutes';
import b2cRoutes from './routes/b2cRoutes';
import b2bExpressCheckoutRoutes from './routes/b2bExpressCheckoutRoutes';
import callbackRoutes from './routes/callbackRoutes';
import stkPushQueryRoutes from './routes/stkPushQueryRoutes';
import c2bTransactionRoutes from './routes/c2bTransactionRoutes';
import stkPushRoutes from './routes/stkPushRoutes';
import taxRemittanceRoutes from './routes/taxRemittanceRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); 
  }
})();

// //  routes 
// app.use('/api/', mpesaRoutes)
app.use('/api/', b2bRoutes);
app.use('/api/',b2cRoutes);
app.use('/api/',b2bExpressCheckoutRoutes)
app.use('/api/',callbackRoutes)
app.use('/api', stkPushQueryRoutes);
app.use('/api', c2bTransactionRoutes);
app.use('/api', stkPushRoutes);
app.use('/api', taxRemittanceRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});





// models/StkPushTransaction.ts
import mongoose, { Document, Schema } from 'mongoose';
import { StkPushRequest } from '../types/StkPushRequest'; // Import the interface

// Create a schema for the STK Push transaction
const StkPushTransactionSchema: Schema = new Schema({
  phone: { type: String, required: true }, // Phone number for the STK Push
  amount: { type: Number, required: true }, // Transaction amount
  checkoutRequestID: { type: String }, // Optional CheckoutRequestID
  responseCode: { type: String }, // Optional response code
  transactionDate: { type: Date, default: Date.now }, // Optional transaction date, defaults to now
}, { timestamps: true });

// Create the model
const StkPushTransaction = mongoose.model<StkPushRequest & Document>('StkPushTransaction', StkPushTransactionSchema);

export default StkPushTransaction;

// models/StkPushQuery.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the STK Push Query
interface IStkPushQuery extends Document {
  checkoutRequestID: string; // The unique ID for the STK Push request
  resultCode?: string; // Optional result code from the STK Push query
  resultMessage?: string; // Optional message from the STK Push query
  transactionDate?: Date; // Optional transaction date
}

// Create a schema for the STK Push Query
const StkPushQuerySchema: Schema = new Schema({
  checkoutRequestID: { type: String, required: true, unique: true }, // Unique identifier
  resultCode: { type: String }, // Optional
  resultMessage: { type: String }, // Optional
  transactionDate: { type: Date }, // Optional
}, { timestamps: true });

// Create the model
const StkPushQuery = mongoose.model<IStkPushQuery>('StkPushQuery', StkPushQuerySchema);

export default StkPushQuery;

// models/C2BTransaction.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the C2B Transaction
interface IC2BTransaction extends Document {
  businessShortCode: string; // The business short code for the transaction
  amount: number; // The amount of money being transacted
  phone: string; // The phone number of the sender
  billRefNumber: string; // The bill reference number
  transactionDate: Date; // Date of the transaction
  response: object; // The response data from the transaction simulation
}

// Create a schema for the C2B Transaction
const C2BTransactionSchema: Schema = new Schema(
  {
    businessShortCode: { type: String, required: true }, // Required field for business short code
    amount: { type: Number, required: true }, // Required field for amount
    phone: { type: String, required: true }, // Required field for phone number
    billRefNumber: { type: String, required: true }, // Required field for bill reference number
    transactionDate: { type: Date, default: Date.now }, // Default to current date if not provided
    response: { type: Object, required: true }, // Required field for the transaction response
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Create the model
const C2BTransaction = mongoose.model<IC2BTransaction>('C2BTransaction', C2BTransactionSchema);

export default C2BTransaction;

import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Transaction document
export interface ITransaction extends Document {
  MerchantRequestID: string;
  CheckoutRequestID: string;
  ResultCode: string;
  Amount: number;
  MpesaReceiptNumber: string;
  PhoneNumber: string;
  TransactionDate?: Date; // Optional field for the transaction date
}

// Create a schema for the Transaction model
const transactionSchema: Schema = new Schema({
  MerchantRequestID: {
    type: String,
    required: true,
  },
  CheckoutRequestID: {
    type: String,
    required: true,
  },
  ResultCode: {
    type: String,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  MpesaReceiptNumber: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  TransactionDate: {
    type: Date,
    default: Date.now, // Automatically set the date when the transaction is created
  },
});

// Create the model
const Transaction = mongoose.model<ITransaction>('Transaction', transactionSchema);

export default Transaction;

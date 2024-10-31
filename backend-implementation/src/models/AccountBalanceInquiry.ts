// models/AccountBalanceInquiry.ts
import mongoose, { Document, Schema } from 'mongoose';
import { AccountBalanceInquiry } from '../types/AccountBalanceInquiry'; // Import the interface

// Create a schema for the Account Balance Inquiry
const AccountBalanceInquirySchema: Schema = new Schema({
  initiatorName: { type: String, required: true }, // Initiator name
  businessShortCode: { type: String, required: true }, // Business short code
  responseCode: { type: String }, // Optional response code
  responseMessage: { type: String }, // Optional response message
  transactionDate: { type: Date, default: Date.now }, // Optional transaction date, defaults to now
}, { timestamps: true });

// Create the model
const AccountBalanceInquiryModel = mongoose.model<AccountBalanceInquiry & Document>('AccountBalanceInquiry', AccountBalanceInquirySchema);

export default AccountBalanceInquiryModel;



// models/AccountBalanceInquiry.ts
import mongoose, { Schema } from 'mongoose';
// Create a schema for the Account Balance Inquiry
const AccountBalanceInquirySchema = new Schema({
    initiatorName: { type: String, required: true },
    businessShortCode: { type: String, required: true },
    responseCode: { type: String },
    responseMessage: { type: String },
    transactionDate: { type: Date, default: Date.now }, // Optional transaction date, defaults to now
}, { timestamps: true });
// Create the model
const AccountBalanceInquiryModel = mongoose.model('AccountBalanceInquiry', AccountBalanceInquirySchema);
export default AccountBalanceInquiryModel;

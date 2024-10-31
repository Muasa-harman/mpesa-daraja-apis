// models/StkPushTransaction.ts
import mongoose, { Schema } from 'mongoose';
// Create a schema for the STK Push transaction
const StkPushTransactionSchema = new Schema({
    phone: { type: String, required: true },
    amount: { type: Number, required: true },
    checkoutRequestID: { type: String },
    responseCode: { type: String },
    transactionDate: { type: Date, default: Date.now }, // Optional transaction date, defaults to now
}, { timestamps: true });
// Create the model
const StkPushTransaction = mongoose.model('StkPushTransaction', StkPushTransactionSchema);
export default StkPushTransaction;

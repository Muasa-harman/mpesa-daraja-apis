// models/StkPushQuery.ts
import mongoose, { Schema } from 'mongoose';
// Create a schema for the STK Push Query
const StkPushQuerySchema = new Schema({
    checkoutRequestID: { type: String, required: true, unique: true },
    resultCode: { type: String },
    resultMessage: { type: String },
    transactionDate: { type: Date }, // Optional
}, { timestamps: true });
// Create the model
const StkPushQuery = mongoose.model('StkPushQuery', StkPushQuerySchema);
export default StkPushQuery;

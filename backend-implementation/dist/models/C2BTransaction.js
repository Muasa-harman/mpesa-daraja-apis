// models/C2BTransaction.ts
import mongoose, { Schema } from 'mongoose';
// Create a schema for the C2B Transaction
const C2BTransactionSchema = new Schema({
    businessShortCode: { type: String, required: true },
    amount: { type: Number, required: true },
    phone: { type: String, required: true },
    billRefNumber: { type: String, required: true },
    transactionDate: { type: Date, default: Date.now },
    response: { type: Object, required: true }, // Required field for the transaction response
}, { timestamps: true } // Automatically manage createdAt and updatedAt fields
);
// Create the model
const C2BTransaction = mongoose.model('C2BTransaction', C2BTransactionSchema);
export default C2BTransaction;

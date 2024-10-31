import mongoose, { Schema } from 'mongoose';
// Create a schema for the Transaction model
const transactionSchema = new Schema({
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
const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;

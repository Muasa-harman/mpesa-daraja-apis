// models/USSDExpressCheckout.ts
import mongoose, { Schema } from 'mongoose';
// Create a schema for the USSD Express Checkout
const USSDExpressCheckoutSchema = new Schema({
    primaryShortCode: { type: String, required: true },
    receiverShortCode: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentRef: { type: String, required: true },
    callbackUrl: { type: String, required: true },
    partnerName: { type: String, required: true },
    requestRefID: { type: String, required: true },
    responseCode: { type: String },
    transactionDate: { type: Date }, // Optional field for transaction date
}, { timestamps: true } // Automatically manage createdAt and updatedAt fields
);
// Create the model
const USSDExpressCheckout = mongoose.model('USSDExpressCheckout', USSDExpressCheckoutSchema);
export default USSDExpressCheckout;

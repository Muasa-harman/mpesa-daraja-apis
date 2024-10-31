// models/USSDExpressCheckout.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the USSD Express Checkout
interface IUSSDExpressCheckout extends Document {
  primaryShortCode: string; // The primary short code for the checkout
  receiverShortCode: string; // The receiver's short code
  amount: number; // The amount for the checkout
  paymentRef: string; // A reference for the payment
  callbackUrl: string; // URL for callback
  partnerName: string; // Name of the partner/vendor
  requestRefID: string; // Unique request reference ID
  responseCode?: string; // Response code from the transaction
  transactionDate?: Date; // Date of the transaction
}

// Create a schema for the USSD Express Checkout
const USSDExpressCheckoutSchema: Schema = new Schema(
  {
    primaryShortCode: { type: String, required: true }, // Required field for primary short code
    receiverShortCode: { type: String, required: true }, // Required field for receiver short code
    amount: { type: Number, required: true }, // Required field for the amount
    paymentRef: { type: String, required: true }, // Required field for payment reference
    callbackUrl: { type: String, required: true }, // Required field for callback URL
    partnerName: { type: String, required: true }, // Required field for partner/vendor name
    requestRefID: { type: String, required: true }, // Required field for request reference ID
    responseCode: { type: String }, // Optional field for response code
    transactionDate: { type: Date }, // Optional field for transaction date
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Create the model
const USSDExpressCheckout = mongoose.model<IUSSDExpressCheckout>('USSDExpressCheckout', USSDExpressCheckoutSchema);

export default USSDExpressCheckout;

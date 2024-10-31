// models/B2CPaymentRequest.ts
import mongoose, { Schema } from 'mongoose';
// Create a schema for the B2C Payment Request
const B2CPaymentRequestSchema = new Schema({
    initiatorName: { type: String, required: true },
    securityCredential: { type: String, required: true },
    commandID: { type: String, required: true },
    amount: { type: Number, required: true },
    partyA: { type: String, required: true },
    partyB: { type: String, required: true },
    remarks: { type: String, required: true },
    queueTimeOutURL: { type: String, required: true },
    resultURL: { type: String, required: true },
    occasion: { type: String, required: true },
    responseCode: { type: String },
    mpesaReceiptNumber: { type: String },
    transactionDate: { type: Date }, // Optional field for transaction date
}, { timestamps: true } // Automatically manage createdAt and updatedAt fields
);
// Create the model
const B2CPaymentRequest = mongoose.model('B2CPaymentRequest', B2CPaymentRequestSchema);
export default B2CPaymentRequest;
// import mongoose, { Document, Schema } from 'mongoose';
// // Define the interface for the B2C Payment Request
// interface IB2CPaymentRequest extends Document {
//   InitiatorName: string;
//   SecurityCredential: string;
//   CommandID: string;
//   Amount: number; // The amount to be sent
//   PartyA: string; // Sender's short code
//   PartyB: string; // Recipient's phone number
//   Remarks: string; // Optional remarks
//   QueueTimeOutURL: string; // Callback URL for timeout
//   ResultURL: string; // Callback URL for the result
//   Occasion?: string; // Optional occasion for the transaction
//   ResponseCode?: string; // Optional response code from M-Pesa
//   MpesaReceiptNumber?: string; // Optional M-Pesa receipt number
//   TransactionDate?: Date; // Optional date for the transaction
// }
// // Create a schema for the B2C Payment Request
// const B2CPaymentRequestSchema: Schema = new Schema({
//   InitiatorName: { type: String, required: true },
//   SecurityCredential: { type: String, required: true },
//   CommandID: { type: String, required: true },
//   Amount: { type: Number, required: true },
//   PartyA: { type: String, required: true },
//   PartyB: { type: String, required: true },
//   Remarks: { type: String, required: true },
//   QueueTimeOutURL: { type: String, required: true },
//   ResultURL: { type: String, required: true },
//   Occasion: { type: String }, // Optional
//   ResponseCode: { type: String }, // Optional
//   MpesaReceiptNumber: { type: String }, // Optional
//   TransactionDate: { type: Date }, // Optional
// }, { timestamps: true });
// // Create the model
// const B2CPaymentRequest = mongoose.model<IB2CPaymentRequest>('B2CPaymentRequest', B2CPaymentRequestSchema);
// export default B2CPaymentRequest;

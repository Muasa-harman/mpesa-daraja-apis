// models/B2CPaymentRequest.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the B2C Payment Request
interface IB2CPaymentRequest extends Document {
  initiatorName: string; // The name of the initiator
  securityCredential: string; // Security credential for the request
  commandID: string; // Command ID for the payment request
  amount: number; // The amount to send
  partyA: string; // The short code of the sender
  partyB: string; // The recipient's phone number
  remarks: string; // Remarks for the transaction
  queueTimeOutURL: string; // URL for timeout callback
  resultURL: string; // URL for result callback
  occasion: string; // Occasion for the payment
  responseCode?: string; // Response code from the transaction
  mpesaReceiptNumber?: string; // M-Pesa receipt number for the transaction
  transactionDate?: Date; // Date of the transaction
}

// Create a schema for the B2C Payment Request
const B2CPaymentRequestSchema: Schema = new Schema(
  {
    initiatorName: { type: String, required: true }, // Required field for initiator name
    securityCredential: { type: String, required: true }, // Required field for security credential
    commandID: { type: String, required: true }, // Required field for command ID
    amount: { type: Number, required: true }, // Required field for the amount
    partyA: { type: String, required: true }, // Required field for Party A (business short code)
    partyB: { type: String, required: true }, // Required field for Party B (recipient phone number)
    remarks: { type: String, required: true }, // Required field for remarks
    queueTimeOutURL: { type: String, required: true }, // Required field for timeout URL
    resultURL: { type: String, required: true }, // Required field for result URL
    occasion: { type: String, required: true }, // Required field for occasion
    responseCode: { type: String }, // Optional field for response code
    mpesaReceiptNumber: { type: String }, // Optional field for M-Pesa receipt number
    transactionDate: { type: Date }, // Optional field for transaction date
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Create the model
const B2CPaymentRequest = mongoose.model<IB2CPaymentRequest>('B2CPaymentRequest', B2CPaymentRequestSchema);

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

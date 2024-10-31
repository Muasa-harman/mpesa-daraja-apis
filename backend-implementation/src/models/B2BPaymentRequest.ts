// models/B2BPaymentRequest.ts

import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the B2B Payment Request
export interface IB2BPaymentRequest extends Document {
  initiator: string;
  securityCredential: string;
  commandID: string;
  senderIdentifierType: string;
  receiverIdentifierType: string;
  amount: number;
  partyA: string;
  partyB: string;
  accountReference: string;
  requester: string;
  remarks: string;
  queueTimeOutURL: string;
  resultURL: string;
  responseCode?: string; // Optional
  mpesaReceiptNumber?: string; // Optional
  transactionDate?: Date; // Optional
}

// Create the schema for the B2B Payment Request
const B2BPaymentRequestSchema: Schema = new Schema(
  {
    initiator: { type: String, required: true },
    securityCredential: { type: String, required: true },
    commandID: { type: String, required: true },
    senderIdentifierType: { type: String, required: true },
    receiverIdentifierType: { type: String, required: true },
    amount: { type: Number, required: true },
    partyA: { type: String, required: true },
    partyB: { type: String, required: true },
    accountReference: { type: String, required: true },
    requester: { type: String, required: true },
    remarks: { type: String, required: true },
    queueTimeOutURL: { type: String, required: true },
    resultURL: { type: String, required: true },
    responseCode: { type: String }, // Optional
    mpesaReceiptNumber: { type: String }, // Optional
    transactionDate: { type: Date }, // Optional
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create the model
const B2BPaymentRequest = mongoose.model<IB2BPaymentRequest>('B2BPaymentRequest', B2BPaymentRequestSchema);

export default B2BPaymentRequest;


// // models/B2BPaymentRequest.ts
// import mongoose, { Document, Schema } from 'mongoose';

// // Define the interface for the B2B Payment Request
// interface IB2BPaymentRequest extends Document {
//   initiator: string; // The name of the initiator
//   securityCredential: string; // Security credential for the request
//   commandID: string; // Command ID for the payment request
//   senderIdentifierType: string; // Sender identifier type
//   receiverIdentifierType: string; // Receiver identifier type
//   amount: number; // The amount to send
//   partyA: string; // The short code of the sender
//   partyB: string; // The short code of the recipient
//   accountReference: string; // A unique reference number for the transaction
//   requester: string; // Phone number of the person making the request
//   remarks?: string; // Optional remarks for the transaction
//   queueTimeOutURL: string; // URL for timeout callback
//   resultURL: string; // URL for result callback
//   responseCode?: string; // Response code from the transaction
//   mpesaReceiptNumber?: string; // M-Pesa receipt number for the transaction
//   transactionDate?: Date; // Date of the transaction
// }

// // Create a schema for the B2B Payment Request
// const B2BPaymentRequestSchema: Schema = new Schema(
//   {
//     initiator: { type: String, required: true }, // Required field for initiator
//     securityCredential: { type: String, required: true }, // Required field for security credential
//     commandID: { type: String, required: true }, // Required field for command ID
//     senderIdentifierType: { type: String, required: true }, // Required field for sender identifier type
//     receiverIdentifierType: { type: String, required: true }, // Required field for receiver identifier type
//     amount: { type: Number, required: true }, // Required field for the amount
//     partyA: { type: String, required: true }, // Required field for Party A (business short code)
//     partyB: { type: String, required: true }, // Required field for Party B (merchant short code or till number)
//     accountReference: { type: String, required: true }, // Required field for account reference
//     requester: { type: String, required: true }, // Required field for the requester
//     remarks: { type: String }, // Optional field for remarks
//     queueTimeOutURL: { type: String, required: true }, // Required field for timeout URL
//     resultURL: { type: String, required: true }, // Required field for result URL
//     responseCode: { type: String }, // Optional field for response code
//     mpesaReceiptNumber: { type: String }, // Optional field for M-Pesa receipt number
//     transactionDate: { type: Date }, // Optional field for transaction date
//   },
//   { timestamps: true } // Automatically manage createdAt and updatedAt fields
// );

// // Create the model
// const B2BPaymentRequest = mongoose.model<IB2BPaymentRequest>('B2BPaymentRequest', B2BPaymentRequestSchema);

// export default B2BPaymentRequest;




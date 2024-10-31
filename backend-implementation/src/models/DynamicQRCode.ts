// models/DynamicQRCode.ts
import mongoose, { Document, Schema } from 'mongoose';
import { DynamicQRCode } from '../types/DynamicQRCode'; // Import the interface

// Create a schema for the Dynamic QR Code
const DynamicQRCodeSchema: Schema = new Schema({
  merchantName: { type: String, required: true }, // Merchant name
  accountNumber: { type: String, required: true }, // Account number
  amount: { type: Number, required: true }, // Amount associated with the QR code
  trxCode: { type: String, required: true }, // Transaction code
  businessShortCode: { type: String, required: true }, // Business short code
  qrCode: { type: String }, // Optional QR code in base64 format
}, { timestamps: true });

// Create the model
const DynamicQRCodeModel = mongoose.model<DynamicQRCode & Document>('DynamicQRCode', DynamicQRCodeSchema);

export default DynamicQRCodeModel;

// models/DynamicQRCode.ts
import mongoose, { Schema } from 'mongoose';
// Create a schema for the Dynamic QR Code
const DynamicQRCodeSchema = new Schema({
    merchantName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    amount: { type: Number, required: true },
    trxCode: { type: String, required: true },
    businessShortCode: { type: String, required: true },
    qrCode: { type: String }, // Optional QR code in base64 format
}, { timestamps: true });
// Create the model
const DynamicQRCodeModel = mongoose.model('DynamicQRCode', DynamicQRCodeSchema);
export default DynamicQRCodeModel;

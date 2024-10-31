import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Tax Remittance
interface ITaxRemittance extends Document {
  amount: number; // Amount for the tax remittance
  accessToken: string; // Access token for authorization
  responseCode?: string; // Optional response code from M-Pesa
  transactionDate?: Date; // Optional transaction date
}

// Create a schema for the Tax Remittance
const TaxRemittanceSchema: Schema = new Schema({
  amount: { type: Number, required: true },
  accessToken: { type: String, required: true },
  responseCode: { type: String }, // Optional
  transactionDate: { type: Date }, // Optional
}, { timestamps: true });

// Create the model
const TaxRemittance = mongoose.model<ITaxRemittance>('TaxRemittance', TaxRemittanceSchema);

export default TaxRemittance;

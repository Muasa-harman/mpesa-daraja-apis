import mongoose, { Schema } from 'mongoose';
// Create a schema for the Tax Remittance
const TaxRemittanceSchema = new Schema({
    amount: { type: Number, required: true },
    accessToken: { type: String, required: true },
    responseCode: { type: String },
    transactionDate: { type: Date }, // Optional
}, { timestamps: true });
// Create the model
const TaxRemittance = mongoose.model('TaxRemittance', TaxRemittanceSchema);
export default TaxRemittance;

// models/CallbackResponse.ts
import mongoose, { Schema } from 'mongoose';
// Create a schema for the Callback Response
const CallbackResponseSchema = new Schema({
    timestamp: { type: Date, required: true },
    response: { type: Object, required: true }, // The response object
}, { timestamps: true } // Automatically manage createdAt and updatedAt fields
);
// Create the model
const CallbackResponse = mongoose.model('CallbackResponse', CallbackResponseSchema);
export default CallbackResponse;

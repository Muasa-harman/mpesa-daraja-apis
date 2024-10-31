// models/CallbackResponse.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Callback Response
interface ICallbackResponse extends Document {
  timestamp: Date; // Timestamp of the callback
  response: object; // The callback response data
}

// Create a schema for the Callback Response
const CallbackResponseSchema: Schema = new Schema(
  {
    timestamp: { type: Date, required: true }, // Timestamp of the callback
    response: { type: Object, required: true }, // The response object
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Create the model
const CallbackResponse = mongoose.model<ICallbackResponse>('CallbackResponse', CallbackResponseSchema);

export default CallbackResponse;

// models/transaction.model.ts

export interface Transaction {
    MerchantRequestID: string;
    CheckoutRequestID: string;
    ResultCode: string;
    Amount: number;
    MpesaReceiptNumber?: string; // Optional, in case the transaction doesn't have one
    PhoneNumber: string;
  }
  
  // For database operations
  export interface InsertTransactionInput {
    MerchantRequestID: string;
    CheckoutRequestID: string;
    ResultCode: string;
    Amount: number;
    MpesaReceiptNumber?: string;
    PhoneNumber: string;
  }
  
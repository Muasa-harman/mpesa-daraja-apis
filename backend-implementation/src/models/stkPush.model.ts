// models/stkPush.model.ts

export interface StkPushRequest {
    BusinessShortCode: string;
    Password: string; // Base64 encoded
    Timestamp: string;
    TransactionType: 'CustomerPayBillOnline' | 'CustomerBuyGoods'; // Adjust as needed
    Amount: number;
    PartyA: string;
    PartyB: string;
    PhoneNumber: string;
    CallBackURL: string;
    AccountReference: string;
    TransactionDesc: string;
  }
  
  export interface StkPushResponse {
    CheckoutRequestID: string;
    ResponseCode: string;
    // Other properties as needed
  }
  
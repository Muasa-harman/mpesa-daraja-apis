// types/StkPushRequest.ts
export interface StkPushRequest {
    phone: string; // The phone number the STK Push is sent to
    amount: number; // The amount for the transaction
    checkoutRequestID?: string; // The CheckoutRequestID from the response
    responseCode?: string; // The response code from the STK Push service
    transactionDate?: Date; // Optional date of the transaction
  }
  
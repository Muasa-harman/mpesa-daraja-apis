// types/AccountBalanceInquiry.ts
export interface AccountBalanceInquiry {
    initiatorName: string; // The name of the initiator
    businessShortCode: string; // The business short code used for the inquiry
    responseCode?: string; // The response code from the account balance query
    responseMessage?: string; // The response message from the account balance query
    transactionDate?: Date; // Optional date of the transaction
  }
  
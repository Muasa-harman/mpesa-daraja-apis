// models/transactionStatus.model.ts

export interface TransactionStatusRequest {
    Initiator: string;
    SecurityCredential: string;
    CommandID: 'TransactionStatusQuery';
    TransactionID: string;
    OriginatorConversationID: string;
    PartyA: string;
    IdentifierType: '1' | '2' | '4'; // Adjust based on identifier types used
    ResultURL: string;
    QueueTimeOutURL: string;
    Remarks: string;
    Occasion: string;
  }
  
  export interface TransactionStatusResponse {
    ResponseCode: string;
    // Other properties as needed
  }
  
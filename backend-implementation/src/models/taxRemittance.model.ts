// models/taxRemittance.model.ts

export interface TaxRemittanceRequest {
    Initiator: string;
    SecurityCredential: string;
    CommandID: 'PayTaxToKRA';
    SenderIdentifierType: '4';
    ReceiverIdentifierType: '4';
    Amount: number;
    PartyA: string;
    PartyB: string;
    AccountReference: string;
    Remarks: string;
    QueueTimeOutURL: string;
    ResultURL: string;
  }
  
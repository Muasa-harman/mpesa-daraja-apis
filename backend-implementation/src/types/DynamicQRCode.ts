// types/DynamicQRCode.ts
export interface DynamicQRCode {
    merchantName: string; // The name of the merchant
    accountNumber: string; // The account number associated with the QR code
    amount: number; // The amount associated with the QR code
    trxCode: string; // Transaction code
    businessShortCode: string; // Business short code used for generating the QR code
    qrCode?: string; // Optional QR code image in base64 format
    createdAt?: Date; // Date of creation
  }
  
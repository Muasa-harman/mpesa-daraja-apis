import * as fs from 'fs';

// Assuming dbconnection.ts exports the 'db' variable
import { db } from './dbconnection';

interface StkCallbackResponse {
  Body: {
    stkCallback: {
      MerchantRequestID: string;
      CheckoutRequestID: string;
      ResultCode: number;
      ResultDesc: string;
      CallbackMetadata: {
        Item: {
          Name: string;
          Value: string;
        }[];
      };
    };
  };
}

// Assuming the incoming data is a valid StkCallbackResponse JSON
const stkCallbackResponse: StkCallbackResponse = JSON.parse(
  fs.readFileSync('php://input', 'utf-8')
);

const logFile = 'Mpesastkresponse.json';

fs.appendFileSync(logFile, JSON.stringify(stkCallbackResponse, null, 2));

const {
  MerchantRequestID,
  CheckoutRequestID,
  ResultCode,
  CallbackMetadata: { Item },
} = stkCallbackResponse.Body.stkCallback;

const Amount = Item.find((item) => item.Name === 'Amount')?.Value || '';
const TransactionId = Item.find((item) => item.Name === 'MpesaReceiptNumber')?.Value || '';
const UserPhoneNumber = Item.find((item) => item.Name === 'PhoneNumber')?.Value || '';

// CHECK IF THE TRANSACTION WAS SUCCESSFUL
if (ResultCode === 0) {
  // STORE THE TRANSACTION DETAILS IN THE DATABASE
  db.query(
    `INSERT INTO transactions (MerchantRequestID, CheckoutRequestID, ResultCode, Amount, MpesaReceiptNumber, PhoneNumber) 
     VALUES ('${MerchantRequestID}', '${CheckoutRequestID}', ${ResultCode}, '${Amount}', '${TransactionId}', '${UserPhoneNumber}')`
  );
}

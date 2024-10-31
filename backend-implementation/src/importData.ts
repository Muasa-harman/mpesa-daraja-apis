// importData.ts
import { importData } from './mpesa/databaseService'; // Adjust the import path as necessary

const filePath = 'path/to/your/sql/dump/file.sql'; // Specify the path to your SQL dump file

// Call the importData function
// importData(filePath);


// importData.ts
const rawData = `[
    {"Body": {"stkCallback": {"MerchantRequestID": "8350-54907831-1", "CheckoutRequestID": "ws_CO_25072023000743674723547186", "ResultCode": 1032, "ResultDesc": "Request cancelled by user"}}},
    {"Body": {"stkCallback": {"MerchantRequestID": "8350-54907831-1", "CheckoutRequestID": "ws_CO_25072023000743674723547186", "ResultCode": 1032, "ResultDesc": "Request cancelled by user"}}},
    {"Body": {"stkCallback": {"MerchantRequestID": "8352-54996773-1", "CheckoutRequestID": "ws_CO_25072023013319541723547186", "ResultCode": 0, "ResultDesc": "The service request is processed successfully.", "CallbackMetadata": {"Item": [{"Name": "Amount", "Value": 1.00}, {"Name": "MpesaReceiptNumber", "Value": "RGP6CZDYG6"}, {"Name": "TransactionDate", "Value": 20230725013147}, {"Name": "PhoneNumber", "Value": 0721456992}]}}}},
    {"Body": {"stkCallback": {"MerchantRequestID": "83273-136654192-2", "CheckoutRequestID": "ws_CO_25072023021649451723547186", "ResultCode": 1019, "ResultDesc": "Transaction has expired"}}},
    {"Body": {"stkCallback": {"MerchantRequestID": "10914-190156033-1", "CheckoutRequestID": "ws_CO_25072023022016869768168060", "ResultCode": 1032, "ResultDesc": "Request cancelled by user"}}}
    // ... Include all other responses here
  ]`;
  
  const parseCallbacks = (data: string) => {
    try {
      const callbacks = JSON.parse(data);
  
      callbacks.forEach((item: any) => {
        const callback = item.Body.stkCallback;
        const { MerchantRequestID, CheckoutRequestID, ResultCode, ResultDesc, CallbackMetadata } = callback;
  
        console.log(`MerchantRequestID: ${MerchantRequestID}`);
        console.log(`CheckoutRequestID: ${CheckoutRequestID}`);
        console.log(`ResultCode: ${ResultCode}`);
        console.log(`ResultDesc: ${ResultDesc}`);
  
        // Check if CallbackMetadata exists and log relevant details
        if (CallbackMetadata) {
          CallbackMetadata.Item.forEach((meta: any) => {
            console.log(`${meta.Name}: ${meta.Value}`);
          });
        }
        
        console.log('---'); // Separator for readability
      });
    } catch (error:any) {
      console.error('Error parsing JSON:', error.message);
    }
  };
  
  // Call the function with the raw data
  parseCallbacks(rawData);
  

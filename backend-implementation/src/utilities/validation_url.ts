import * as fs from 'fs';

const logFile = 'C2bValidationData.txt';

// Assuming you have the incoming M-Pesa response as a JSON string
const mpesaResponse: string = '{"ResultCode": 0, "ResultDesc": "Confirmation Received Successfully"}';

// Parse the JSON response
const jsonMpesaResponse = JSON.parse(mpesaResponse);

// Log the M-Pesa response to a file
fs.appendFileSync(logFile, JSON.stringify(jsonMpesaResponse) + '\n', 'utf-8');

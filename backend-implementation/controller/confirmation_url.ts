import * as fs from 'fs';

const response = {
  ResultCode: 0,
  ResultDesc: 'Confirmation Received Successfully',
};

const logFile = 'C2bPesaResponse.json';

// Assuming mpesaResponse is a valid JSON received from the PHP script
const mpesaResponse = JSON.stringify(response);

fs.appendFileSync(logFile, mpesaResponse);

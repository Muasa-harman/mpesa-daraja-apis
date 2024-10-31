import * as fs from 'fs';

const logFile = 'Paybill_To_Paybill.json';

const handleCallback = (callbackResponse: string) => {
  fs.appendFile(logFile, callbackResponse + '\n', (err) => {
    if (err) {
      console.error(`Error writing to ${logFile}: ${err.message}`);
    } else {
      console.log(`Callback response logged to ${logFile}`);
    }
  });
};

// Export the handleCallback function so it can be used elsewhere
export default handleCallback;

// Replace this with the actual callback response (for testing purposes)
const callbackResponse = process.argv[2] || '{"key": "value"}';
handleCallback(callbackResponse);

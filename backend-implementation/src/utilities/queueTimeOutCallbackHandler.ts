// handlers/queueTimeOutCallbackHandler.ts
import * as fs from 'fs';

const logFile = 'QueueTimeOutURL.json';

export const handleQueueTimeOutCallback = (callbackResponse: string) => {
  fs.appendFile(logFile, callbackResponse + '\n', (err) => {
    if (err) {
      console.error(`Error writing to ${logFile}: ${err.message}`);
    } else {
      console.log(`QueueTimeOutURL callback response logged to ${logFile}`);
    }
  });
};

// This function allows calling from other parts of your app
export const processQueueTimeOutCallback = (response: string) => {
  handleQueueTimeOutCallback(response);
};

// Optional: If you want to use this file as a script
if (require.main === module) {
  const callbackResponse = process.argv[2] || '{"key": "value"}';
  processQueueTimeOutCallback(callbackResponse);
}

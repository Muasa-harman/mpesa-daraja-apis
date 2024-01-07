import * as fs from 'fs';

const logFile = 'QueueTimeOutURL.json';

const handleQueueTimeOutCallback = (callbackResponse: string) => {
  fs.appendFile(logFile, callbackResponse, (err) => {
    if (err) {
      console.error(`Error writing to ${logFile}: ${err.message}`);
    } else {
      console.log(`QueueTimeOutURL callback response logged to ${logFile}`);
    }
  });
};

// Assuming the callback response is received as a command-line argument or from another source
// For example, if running this script from the command line: ts-node queueTimeOutCallbackHandler.ts '{"key": "value"}'

// Replace this with the actual callback response
const callbackResponse = process.argv[2] || '{"key": "value"}';

handleQueueTimeOutCallback(callbackResponse);

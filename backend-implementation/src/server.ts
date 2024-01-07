const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
 
  console.log(`Server is running on http://localhost:${port}`);
});
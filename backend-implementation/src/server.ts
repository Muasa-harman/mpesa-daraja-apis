const express = require("express");
require("dotenv").config();
// const stkRoutes = require("../routes/stk")
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();


const port = process.env.PORT || 3002
app.use(express.json());
// app.use(express.urlencoded({extends: true}));
app.use(cors());


(async () => {
  try {
    await mongoose.connect('mongodb+srv://harmanmuasa:donfiles.online@cluster0.5dwvyyo.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1); // Exit the process with a non-zero status code
  }
})();


// Start the server
app.listen(port, () => {
 
  console.log(`Server is running on http://localhost:${port}`);
});


 

export { };
// var unirest = require("unirest");
// var req = unirest("GET", "https://sandbox.safaricom.co.ke/oauth/v1/generate");
 
// req.query({
//  "grant_type": "client_credentials"
// });
 
// req.headers({
//  "Authorization": "Basic SWZPREdqdkdYM0FjWkFTcTdSa1RWZ2FTSklNY001RGQ6WUp4ZVcxMTZaV0dGNFIzaA=="
// });
 
// req.end((res: { error: string | undefined; body: any; }) => {
//  if (res.error) throw new Error(res.error);
//  console.log(res.body);
// });
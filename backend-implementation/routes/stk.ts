const express = require("express")
const stkpush = require("../controllers/stkpush")


// const app = express()

const router = express.Router();
router.post("/stk",stkpush)


// app.use('/api/stk', stkRoutes)
router.post("/stk", (req: any,res: any) =>{
    const phone = req.body.phone;
    const amount = req.body.amount;
  
    res.json({phone,amount})
  });

// Define a route
router.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Hello, World!');
  });
  
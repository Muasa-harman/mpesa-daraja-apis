export const stkpush = async(req: any,res: any) =>{
    const phone = req.body.phone;
    const amount = req.body.amount;

    res.json({phone,amount})
} 
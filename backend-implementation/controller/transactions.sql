import * as mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'harman',
  password: 'donfiles.online',
  database: 'mpesa',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function insertTransaction(transactionData: any) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute(
      'INSERT INTO transactions (MerchantRequestID, CheckoutRequestID, ResultCode, Amount, MpesaReceiptNumber, PhoneNumber) VALUES (?, ?, ?, ?, ?, ?)',
      [
        transactionData.MerchantRequestID,
        transactionData.CheckoutRequestID,
        transactionData.ResultCode,
        transactionData.Amount,
        transactionData.MpesaReceiptNumber,
        transactionData.PhoneNumber,
      ]
    );
    return rows;
  } finally {
    connection.release();
  }
}

// Example usage:
const exampleTransaction = {
  MerchantRequestID: 'sampleMerchantRequestID',
  CheckoutRequestID: 'sampleCheckoutRequestID',
  ResultCode: 'sampleResultCode',
  Amount: 100,
  MpesaReceiptNumber: 'sampleMpesaReceiptNumber',
  PhoneNumber: 'samplePhoneNumber',
};

insertTransaction(exampleTransaction)
  .then(() => console.log('Transaction inserted successfully'))
  .catch((error) => console.error('Error inserting transaction:', error));

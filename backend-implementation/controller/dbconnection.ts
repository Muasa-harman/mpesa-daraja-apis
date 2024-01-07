import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mpesa',
};

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to the database!');
    return connection;
  } catch (error:any) {
    console.error('Error connecting to the database:', error.message);
    throw error;
  }
}

export const db = connectToDatabase();

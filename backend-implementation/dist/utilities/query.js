import * as mysql from 'mysql2/promise';
import * as fs from 'fs/promises';
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'donfiles.online',
    database: 'mpesa',
};
async function importData() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        // Read SQL dump file content
        const sqlDump = await fs.readFile('path/to/your/sql/dump/file.sql', 'utf8');
        // Execute SQL statements
        await connection.query(sqlDump);
        console.log('Data imported successfully!');
        connection.end();
    }
    catch (error) {
        console.error('Error importing data:', error.message);
    }
}
importData();

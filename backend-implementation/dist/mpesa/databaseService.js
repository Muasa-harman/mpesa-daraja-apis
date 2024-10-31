// services/databaseService.ts
import * as mysql from 'mysql2/promise';
import * as fs from 'fs/promises';
import { dbConfig } from '../dbConfig'; // Adjust the import path as necessary
export const importData = async (filePath) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        // Read SQL dump file content
        const sqlDump = await fs.readFile(filePath, 'utf8');
        // Execute SQL statements
        await connection.query(sqlDump);
        console.log('Data imported successfully!');
        await connection.end(); // Close the connection
    }
    catch (error) {
        console.error('Error importing data:', error.message);
    }
};

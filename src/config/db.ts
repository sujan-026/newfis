import sql from 'mssql';

const dbConfig = {
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASSWORD || 'deane',
    server: process.env.DB_SERVER || "38.188.203.50",
    port: 1433,
    database: process.env.DB_NAME || 'aittest',
    options: {
        encrypt: true, // Use encryption for secure connection
        trustServerCertificate: true, // For self-signed certs
    },
};

export const connectToDatabase = async () => {
    try {
        const pool = await sql.connect(dbConfig);
        console.log('Connected to MSSQL');
        return pool;
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
};

const mysql = require('mysql2/promise');

const dbConfig = {
    host: "localhost",
    user: 'vn55t',
    password: '9r5[u5Wxo)M3ncbw',
    database: "jewelone",
};

async function testConnection() {
    console.log("----------------------------------------");
    console.log("Starting Database Connection Test");
    console.log(`Connecting to ${dbConfig.host} as ${dbConfig.user}...`);

    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log("✅ Successfully connected to database!");

        try {
            const [rows] = await connection.execute("SELECT * FROM metal_rates ORDER BY id DESC LIMIT 1");
            console.log("✅ Retrieved metal rates successfully.");
            console.log("Data:", JSON.stringify(rows, null, 2));
        } catch (queryError) {
            console.error("❌ Connection successful, but query failed:");
            console.error(queryError);
        }

        await connection.end();
        console.log("Connection closed.");
    } catch (error) {
        console.error("❌ Database connection failed.");
        console.error("Error Message:", error.message);
        console.error("Error Code:", error.code);
        console.error("Error Errno:", error.errno);
        console.error("Full Error Object:", error);
    }
    console.log("----------------------------------------");
}

testConnection();

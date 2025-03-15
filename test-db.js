import pool from "./db.js";

async function testConnection() {
    try {
        const [rows] = await pool.query("SELECT * FROM users");
        console.log("Conexión exitosa. Usuarios:", rows);
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    } finally {
        process.exit();
    }
}

testConnection();

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'angel',  // Cambia esto si tu usuario es diferente
    password: '2605',  // Si tienes contraseña, agrégala aquí
    database: 'portafolio'
});

export default pool;

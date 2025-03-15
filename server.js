// server.js

import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import router from './routes.js'; // Importa las rutas

// Crear la conexión con la base de datos MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'angel', // Ajusta esto a tu usuario de MySQL
  password: '2605', // Ajusta esto a tu contraseña de MySQL
  database: 'portafolio', // Nombre de la base de datos
});

// Middleware para habilitar CORS (Cross-Origin Resource Sharing)
const app = express();
app.use(cors());
app.use(express.json());

// Usar las rutas definidas en routes.js
app.use(router);

// Endpoint de prueba para asegurarse de que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor en ejecución');
});

// Configuración del servidor
const port = 3002;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

export { pool }; // Exporta el pool de la base de datos para usarlo en routes.js

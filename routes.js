import { Router } from 'express';
import { pool } from './server.js';

const router = Router();

// Obtener todos los proyectos
router.get('/projects', (req, res) => {
  pool.query('SELECT * FROM projects', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al obtener proyectos' });
    }
    res.json(results);
  });
});

// Obtener todos los enlaces sociales
router.get('/socials', (req, res) => {
  pool.query('SELECT * FROM socials', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al obtener enlaces sociales' });
    }
    res.json(results);
  });
});

// Obtener información del usuario
router.get('/user', (req, res) => {
  pool.query('SELECT * FROM user LIMIT 1', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al obtener información del usuario' });
    }
    res.json(results[0]); // Usamos el primer resultado, ya que solo debería haber uno
  });
});

// Agregar un nuevo proyecto (POST)
router.post('/projects', (req, res) => {
  const { logo, title, description, linkText, link } = req.body;
  const query = 'INSERT INTO projects (logo, title, description, linkText, link) VALUES (?, ?, ?, ?, ?)';
  pool.query(query, [logo, title, description, linkText, link], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al agregar el proyecto' });
    }
    res.status(201).json({ message: 'Proyecto agregado exitosamente' });
  });
});

// Agregar un enlace social (POST)
router.post('/socials', (req, res) => {
  const { instagram, stackoverflow, facebook } = req.body;
  const query = 'INSERT INTO socials (instagram, stackoverflow, facebook) VALUES (?, ?, ?)';
  pool.query(query, [instagram, stackoverflow, facebook], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al agregar el enlace social' });
    }
    res.status(201).json({ message: 'Enlace social agregado exitosamente' });
  });
});

// Agregar información del usuario (POST)
router.post('/user', (req, res) => {
  const { name, title, email, description } = req.body;
  const query = 'INSERT INTO user (name, title, email, description) VALUES (?, ?, ?, ?)';
  pool.query(query, [name, title, email, description], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al agregar la información del usuario' });
    }
    res.status(201).json({ message: 'Información del usuario agregada exitosamente' });
  });
});

export default router;

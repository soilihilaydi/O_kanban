// Le setup d'express
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT ? process.env.PORT : 3000;

const app = express();


// Dans le cadre d'une API, les donnée du corps d'une requête seront envoyé au format JSON
// Nous devons donc spécifier à express qu'il devra decoder le req.body au format JSON
app.use(bodyParser.json());



app.listen(PORT, () => {
  console.log(`oKanban API travaille sur  http://localhost:${PORT}`);
});
// Le setup d'express
require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT ? process.env.PORT : 3000;

const app = express();



app.listen(PORT, () => {
  console.log(`oKanban API travaille sur  http://localhost:${PORT}`);
});
// connection a la base de données

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB, 
  dialect: 'postgres',
  define: {
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  }
});

module.exports = sequelize;
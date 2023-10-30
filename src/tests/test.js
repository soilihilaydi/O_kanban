// J'importe en premier lieu dotenv pour charger le .env
require('dotenv').config();

const { List, Card } = require('../models');

const test = async () => {
  const list = await List.findAll();
  console.log(list);

  console.log(await Card.findOne());
}



test();

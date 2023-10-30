// J'importe en premier lieu dotenv pour charger le .env
require('dotenv').config();

const { List, Card } = require('../models');


const test = async () => {
  const lists = await List.findAll({ include: 'cards'});

  for(let list of lists) {
    console.log(list.name);
    console.log(list.cards.length);
  }

  console.log((await Card.findByPk(3,{
    include: 'tags'
  })).tags[0].name);
}

test();
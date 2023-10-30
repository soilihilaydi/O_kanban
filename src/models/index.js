const Card = require("./card");
const List = require("./list");
const Tag = require("./tag");

// OneToMany
// Liste à plusieurs Cartes;
List.hasMany(Card, {
  as: 'cards',
  foreignKey: 'list_id'
});
// Une carte appartient à une liste
Card.belongsTo(List, {
  as: 'list',
  foreignKey: 'list_id'
})

// ManyToMany
// Une carte appartient à plusieurs tags
Card.belongsToMany(Tag, {
  as: 'tags',
  through: 'card_has_tag',
  foreignKey: 'card_id',
  otherKey: 'tag_id',
  timestamps: false
});

// Un tag appartient à plusieurs cartes
Tag.belongsToMany(Card, {
  as: 'cards',
  through: 'card_has_tag',
  foreignKey: 'tag_id',
  otherKey: 'card_id',
  timestamps: false
});
// Cartes

module.exports = { List, Card, Tag }
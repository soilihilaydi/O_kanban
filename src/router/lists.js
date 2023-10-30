// Le setup des routes
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET ALL');
});

router.get('/:id', (req, res) => {
  res.send('GET ONE WITH ID :' +req.params.id);
});




router.post('/', (req,res) => {
  res.send('CREATE ON WITH DATA :' + JSON.stringify(req.body) );
});

module.exports = router;
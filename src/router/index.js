// Le setup des routes
const express = require('express');
const router = express.Router();
const listsRouter = require('./lists');

router.use('/lists', listsRouter);


module.exports = router;
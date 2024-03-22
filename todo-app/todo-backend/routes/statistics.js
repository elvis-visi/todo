const express = require('express');
const redis = require('../redis');
const router = express.Router();

/* GET statistics. */
router.get('/', async (req, res) => {
    const addedTodos = Number(await redis.getAsync('added_todos') || 0);
    res.json({ added_todos: addedTodos });
  });
  
  module.exports = router;
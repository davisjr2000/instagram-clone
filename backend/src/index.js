const express = require('express');

const app = express();

app.get('/', (req, res) => { //Middleware
  return res.send(`Hello ${req.query.name} C:`)
})

app.listen(3333);

const express = require('express');
const api = require('./routes/api');

const app = express();
const PORT = 5000;

app.use('/api', api)

app.get('/', (req, res) => {
  res.send('You are home')
});

app.listen(PORT, (req, res) =>{
  console.log('Server started on port ' + PORT)
});
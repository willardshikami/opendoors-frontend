const express = require('express');
const api = require('./routes/api');

const app = express();
const PORT = 5000;

app.use('/api', api)

app.get('/', (req, res) => {
  res.send('You are home')
});

app.listen(process.env.PORT || PORT, () => {
  console.log('Server started successfully');
});
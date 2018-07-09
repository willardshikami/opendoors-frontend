const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const db = "mongodb://od:shikami1@ds261540.mlab.com:61540/opendoorsjobs";

//mongoose connection string 
mongoose.connect(db, {useNewUrlParser: true }, err =>{
  if (err){
    console.error('Error ' + err);
  }else{
    console.log('Connected to DB')
  }
})

router.get('/', (req, res) => {
  res.send('API')
});

module.exports = router;
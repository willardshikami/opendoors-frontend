const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Job = require('../models/jobs');

//mlab connection string
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


//submit jobs
router.post('/submit', (req, res) => {
  let jobData = req.body;
  let job = new Job(jobData)
  job.save((error, submitedJob) => {
    if(error){
      console.log(error)
    }else{
      res.status(200).send(submitedJob);
    }
  });
})



module.exports = router;
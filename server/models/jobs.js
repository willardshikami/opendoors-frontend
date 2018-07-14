const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const jobSchema = new Schema({
  job_title: { type: String},
  company_name: { type: String},
  company_log: { type: String},
  about_company: { type: String},
  location: { type: String},
  tech_stack: [String],
  qualifications: [String],
  bonus_skills: [String],
  responsibilities: [String],
  benefits: [String], 
  apply: { type: String},
  date_posted: { type: String},
  deadline: { type: String}
})


module.exports = mongoose.model('job_list', jobSchema, 'jobs')
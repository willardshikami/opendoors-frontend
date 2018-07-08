const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  job_title: String,
  company_name: String,
  company_log: String,
  about_company: String,
  location: String,
  tech_stack: {
    type: [String]
  },
  qualifications: {
    type: [String]
  },
  bonus_skills: {
    type: [String]
  },
  responsibilities: {
    type: [String]
  },
  benefits: {
    type: [String]
  },
  apply: String,
  date_posted: String,
  deadline: String
})

module.exports = mongoose.model('job_list', jobSchema, 'jobs')
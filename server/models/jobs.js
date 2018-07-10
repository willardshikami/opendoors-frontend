const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TechStack = new Schema({
  name: String
});

const Qualifications = new Schema({
  name: String
})

const BonusSkills = new Schema({
  name: String
});

const Responsibilities = new Schema({
  name: String
})

const Benefits = new Schema({
  name: String
})

const jobSchema = new Schema({
  job_title: String,
  company_name: String,
  company_log: String,
  about_company: String,
  location: String,
  tech_stack: [TechStack],
  qualifications: [Qualifications],
  bonus_skills: [BonusSkills],
  responsibilities: [Responsibilities],
  benefits: [Benefits],
  apply: String,
  date_posted: String,
  deadline: String
})


module.exports = mongoose.model('job_list', jobSchema, 'jobs')
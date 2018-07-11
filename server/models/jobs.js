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
  job_title: { type: String},
  company_name: { type: String},
  company_log: { type: String},
  about_company: { type: String},
  location: { type: String},
  tech_stack: [TechStack],
  qualifications: [Qualifications],
  bonus_skills: [BonusSkills],
  responsibilities: [Responsibilities],
  benefits: [Benefits], 
  apply: { type: String},
  date_posted: { type: String},
  deadline: { type: String}
})


module.exports = mongoose.model('job_list', jobSchema, 'jobs')
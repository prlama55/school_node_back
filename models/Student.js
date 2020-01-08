const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
const StudentSchema = new Schema({
  name: {
    type: String,
    required: 'Enter name of student'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String
  },
  roleNumber: {
    type: Number
  },
  batch:{
    type: String
  },
  phoneNumber: {
    type: Number
  }
})
module.exports = mongoose.model('Student', StudentSchema)
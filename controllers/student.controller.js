const mongoose = require('mongoose')
require('../models/Student')
const Student = mongoose.model('Student');

exports.list_all_students = (req, res) => {
  console.log("===================")
  Student.find({}, function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};

exports.create_a_student = (req, res) => {
  const new_student = new Student(req.body);
  new_student.save(function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};


exports.read_a_student  = (req, res) => {
  Student.findById(req.params.studentId, function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};


exports.update_a_student = (req, res) => {
  Student.findOneAndUpdate({_id: req.params.studentId}, req.body, {new: true}, function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};


exports.delete_a_student = (req, res) => {


  Student.remove({
    _id: req.params.studentId
  }, function(err, student) {
    if (err)
      res.send(err);
    res.json({ message: 'Student successfully deleted' });
  });
};


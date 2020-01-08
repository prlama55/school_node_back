module.exports = (app) => {
  const studentController = require('../controllers/student.controller');
  // Student Routes
  app.route('/api/students')
    .get(studentController.list_all_students)
    .post(studentController.create_a_student);
  app.route('/api/students/:studentId')
    .get(studentController.read_a_student)
    .put(studentController.update_a_student)
    .delete(studentController.delete_a_student);
};
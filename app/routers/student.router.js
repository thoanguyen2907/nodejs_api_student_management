const express = require('express'); 
const studentRouter = express.Router(); 
const {getStudentList, getStudentDetail,addStudent, updateStudent, deleteStudent} = require("../controller/student.controller"); 
const {checkEmpty, checkNumberClass} = require("./../validations/student.validation")

studentRouter.use(express.json());


studentRouter.get('/',  getStudentList);
   
studentRouter.get('/:id', getStudentDetail)
  
studentRouter.post('/',checkEmpty,checkNumberClass,addStudent); 
  
studentRouter.put('/:id', updateStudent);
  
studentRouter.delete('/:id', deleteStudent); 

module.exports = studentRouter; 
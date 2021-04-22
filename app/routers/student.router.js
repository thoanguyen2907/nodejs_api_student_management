const express = require('express'); 
const studentRouter = express.Router(); 
const {getStudentList, getStudentDetail,addStudent, updateStudent, deleteStudent} = require("../controller/student.controller"); 
studentRouter.use(express.json());

let studentList = [
    {
        id: 1,
        "name" : "Thoa Nguyen", 
        "age" : 20,
        "classNumber" : "nodejs"
        },
    {
            id: 2,
            "name" : "Truc Nguyen", 
            "age" : 16,
            "classNumber" : "google analytics"
            }
]


studentRouter.get('/',  getStudentList);

    
studentRouter.get('/:id', getStudentDetail)
  
studentRouter.post('/', addStudent); 
  

  studentRouter.put('/:id', updateStudent);
  
  studentRouter.delete('/:id', deleteStudent); 

  module.exports = studentRouter; 
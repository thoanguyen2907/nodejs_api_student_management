const express = require('express'); 
const studentRouter = express.Router(); 

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


studentRouter.get('/', (req, res) => {
    res.status(200).send(studentList); 
    });

    
studentRouter.get('/:id', (req, res) => {
        const {params} = req; 
        const {id} = params; 
      const index = studentList.findIndex((item) => {return item.id == id});  
      if(index !== -1) {
          const student = studentList[index]; 
        
          res.status(200).send(student); 
  
      } else {
          res.status(404).send("Not Found !!"); 
      }
  
    })
  
    studentRouter.post('/', async(req, res) => {
      let student = await req.body; 
      student = {
          id: Math.floor(Math.random()), 
          ...student, 
      }
      let studentList = [...studentList,student ]; 
  
      res.status(200).send("Thêm học sinh"); 
  }); 
  

  
  studentRouter.put('/:id', (req, res) => {
      let {id} = req.params; 
      const {name, age,classNumber} = req.body; 
      let index = studentList.findIndex(item => item.id === id); 
      if(index !== -1) {
          let oldStudent = studentList[index]; 
          let updateStudent = {...oldStudent, name, age,classNumber}; 
          studentList[index] = updateStudent; 
          res.status(200).send(updateStudent);
      } else {
          res.status(404).send("Not Found");
      }
      
  });
  
  studentRouter.delete('/:id', async(req, res) => {
      const id = await req.params.id; 
      let index = studentList.findIndex(item => item.id == id); 
      if(index !== -1) {
          let studentListUpdate = [...studentList]; 
          studentListUpdate.splice(index, 1); 
          studentList = studentListUpdate;
          res.status(200).send("Delete student"); 
      } else {
          res.status(404).send("Not Found"); 
      }
      
  }); 

  module.exports = studentRouter; 
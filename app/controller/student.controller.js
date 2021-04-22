const {getList, getStudentIndex, addStudentToList, findStudentToDelete, 
    findOldStudent} = require("./../services/student.services"); 


const getStudentList = (req, res) => {
    const studentList = getList(); 
    if(studentList) {
        res.status(200).send(studentList); 
    } else {
        res.status(404).send("Not Found"); 
    }

}
const getStudentDetail = (req, res) => {
    const {params} = req; 
    const {id} = params; 
      const student = getStudentIndex(id); 
      if(student) {
          
          res.status(200).send(student); 
      } else {
          res.status(404).send("Not Found !!"); 
      }
}
const addStudent =  (req, res) => {
    let student = req.body; 
    let newStudent = addStudentToList(student); 
    res.status(201).send(newStudent); 
}
const updateStudent = (req, res) => {
    let {id} = req.params; 
      const {name, age,classNumber} = req.body; 
     let updateStudent =  findOldStudent(id, name, age,classNumber); 
     if(updateStudent){
      res.status(200).send(updateStudent);
    } else {
        res.status(404).send("Not Found");
    }
}

const deleteStudent = async (req, res) => {
    const id = await req.params.id; 
    let studentDeleted = findStudentToDelete(id); 
    if(studentDeleted) {
    res.status(200).send("Delete student: " , studentDeleted); 
} else {
    res.status(404).send("Not Found"); 
}
}

module.exports = {
    getStudentList, 
    getStudentDetail, 
    addStudent, 
    updateStudent, 
    deleteStudent

}
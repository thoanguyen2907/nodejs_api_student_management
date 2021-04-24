const { Student } = require("../model");
 

const getList = async () => {
    const studentList = await Student.findAll(); 

    if(studentList) {
        return studentList; 
    } else {
        return null; 
    }
}
getStudentIndex = async (id) => {
    const student = await Student.findOne({
        where: {
            id
        }
    })
    if(student) {
        return student; 
    }
    else {
        return false
    }
} 
addStudentToList  = async (student) => {
    //  student = await {
    //     id: Math.floor(Math.random()) * 100, 
    //     ...student, 
    // }
    // studentList =  [...studentList,student ]; 
    const newStudent = await Student.create(student); 

    return newStudent; 
}

findOldStudent = async (id, name, age,classNumber) => {
    let studentUpdate = await getStudentIndex(id); 
    if(studentUpdate){
        studentUpdate.name = name; 
        studentUpdate.age = age; 
        studentUpdate.classNumber = classNumber; 
      const studentUpdated =  await studentUpdate.save(); 
        return studentUpdated; 
    }
   
 else {
    return false; 
}
}
findStudentToDelete = async (id) => {
    let studentDelete = await getStudentIndex(id); 

    if(studentDelete) {
      await Student.destroy({
            where: {
                id
            }
        }); 
    return studentDelete; 
    }   
else {
    return false
}
}
module.exports = {
    getList, 
    getStudentIndex, 
    addStudentToList, 
    findStudentToDelete,
    findOldStudent
}
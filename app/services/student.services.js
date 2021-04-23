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
]; 

const getList = () => {
    if(studentList) {
        return studentList; 
    } else {
        return null; 
    }
}
getStudentIndex = (id) => {
    const index = studentList.findIndex((item) => {return item.id == id});  
    if(index !== -1) {
        const student = studentList[index]; 
        return student; 

    } else {
        return null; 
    }
} 
addStudentToList  = (student) => {
    student = {
        id: Math.floor(Math.random()), 
        ...student, 
    }
    studentList = [...studentList,student ]; 
    return student; 
}

findOldStudent = (id, name, age,classNumber) => {
    let index = studentList.findIndex(item => item.id === id); 
    if(index !== -1) {
        let oldStudent = studentList[index]; 
        let updateStudent = {...oldStudent, name, age,classNumber}; 
        studentList[index] = updateStudent; 
        return updateStudent; 
} else {
    return false; 
}
}
findStudentToDelete = (id) => {
    let index = studentList.findIndex(item => item.id == id); 
      if(index !== -1) {
          let studentListUpdate = [...studentList]; 
          studentListUpdate.splice(index, 1); 
          studentList = studentListUpdate;
         return studentList[index]; 
} else {
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
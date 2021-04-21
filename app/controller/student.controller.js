const getStudentList = (req, res) => {
    res.status(200).send(studentList); 
}

module.exports = {
    getStudentList
}
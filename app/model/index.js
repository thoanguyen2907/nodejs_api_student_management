const {Sequelize, DataTypes}  = require("sequelize"); 
const {DB, HOST, PASSWORD, USER, dialect} = require("./../configs/db.configs"); 
const { createStudentModel } = require("./student.model");
const sequelize =  new Sequelize(DB, USER, PASSWORD, {
    host: HOST, 
    dialect
}); 
const Student = createStudentModel(sequelize); 



module.exports = {
    sequelize,
    Student
}; 

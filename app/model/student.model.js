const { DataTypes } = require("sequelize")

const createStudentModel = (sequelize) => {
    return sequelize.define("Student", {
        name : {
            type: DataTypes.STRING, 
        },
        age: {
            type: DataTypes.INTEGER, 
        }, 
        className: {
            type: DataTypes.INTEGER, 
        },
    }, {
        tableName: "students", 
        timestamps: true,
    
    }
    )
}


module.exports = {
    createStudentModel
}
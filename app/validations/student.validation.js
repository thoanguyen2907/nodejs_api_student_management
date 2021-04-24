const checkEmpty = (req,res, next) => {
    const {name, age, className} = req.body; 
    if(name && age && className) {
        next(); 
    } else {
        res.status(500).send("Cannot be empty fullname, age, className"); 
    }
}
const checkNumberClass = (req,res, next) => {
    const {className} = req.body; 
if(className >= 1 && className <= 12) {
next()
} else {
    res.status(500).send("className must be greater than 1 and less than 12 !!!"); 
}
}

module.exports = {
    checkEmpty, 
    checkNumberClass
}
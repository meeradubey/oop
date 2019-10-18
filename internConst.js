Employee = require("./employeeConst")
class Intern extends Employee {
    constructor(id, name, email, school) {
        const role = "intern"

        super(id,name,role,email);
        this.school = school 
        
    }
}

var meera = new Intern (2, "meera", "meeraemail", "uci", "int")

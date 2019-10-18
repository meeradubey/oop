Employee = require("./employeeConst")

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        const role = "Manager"

        super(id,name,role,email);
        this.officenumber = officeNumber
        
    }
}
var meera = new Manager(4, "meera", "meeraemail", "meeradubey", 6)


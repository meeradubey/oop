const fs = require("fs");
const inquirer = require("inquirer");
const managerQuestions = require("./managerQuestions");
const internQuestions = require("./internQuestions");
const engineerQuestions = require("./engineerQuestions")
const Manager = require("./managerconst")
const Intern = require("./internConst")
const Engineer = require("./engineerConst")

async function askSomeQuestions () {
    var employees = []
    let managerAnswers = await managerQuestions();
    let i = 0;
    
    while ( i < parseInt(managerAnswers.employeenum)){
        console.log("Kitty cat")
        let employeetype = await inquirer.prompt([{
            type: "list",
            name: "Role",
            message: "whats your employee's role",
            choices: ["Intern", "Engineer"]
        }])
        
        switch(employeetype.Role) {
            case "Intern":
              employeeAnswers = await internQuestions(i);
              break;
            case "Engineer":
              employeeAnswers = await engineerQuestions(i);
              break;
             }
        i++;
    }
    
    
}
askSomeQuestions();







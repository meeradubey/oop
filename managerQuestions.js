const inquirer = require("inquirer")
const managerQuestions = () =>{
    
    return inquirer
  .prompt([
    {
      name: 'name',
      message: "What is your name?" ,
      
    },
    {
        name: 'email',
        message: "What is your email?" ,
        
      },
      {
        name: 'officenumber',
        message: "What is your office number?",
        
      },
      {
        name: 'employeenum',
        message: "How many employees do you have?"
      },
      
  ])
  
}
 
module.exports = managerQuestions;

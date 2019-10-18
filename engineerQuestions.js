const inquirer = require("inquirer")

const EngineerQuestions = (i) =>{
    let index = i+1;
    index = String(index)
    
    return inquirer
  .prompt([
    {
      name: 'name',
      message: "What is the name of Engineer #" + index,
      
    },
    {
        name: 'email',
        message: "What is the email of Engineer #" + index ,
        
      },
      {
        name: 'github',
        message: "What is the github username of Engineer #" + index,
        
      },
      
  ])
  
}
 
module.exports = EngineerQuestions;

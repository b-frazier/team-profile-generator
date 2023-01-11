const inquirer = require('inquirer');
const fs = require('fs');

// const managerQs = 

function addManager() {

 inquirer.prompt([
    {
        type: 'input',
        message: "Enter the team manager's name:",
        name: 'manName'
    },
    {
        type: 'input',
        message: 'Enter manager ID:',
        name: 'manId'
    },
    {
        type: 'input',
        message: 'Enter manager email:',
        name: 'manEmail'
    }
]);
}

addManager();

// function startApp(){
//     return inquirer.prompt(managerQs)
// }

// startApp();
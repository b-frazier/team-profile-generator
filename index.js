const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const team = [];

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
])
    .then(answers => {
        const manager = new Manager(answers.manName, answers.manId, answers.manEmail);
        team.push(manager);
        console.log('team: ', team)
    })
}

addManager();
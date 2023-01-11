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
    },
    {
        type: 'input',
        message: 'Enter manager office number:',
        name: 'manOffice'
    }
])
    .then(answers => {
        const manager = new Manager(answers.manName, answers.manId, answers.manEmail, answers.manOffice);
        team.push(manager);
    })
};

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter the engineer's name:",
            name: 'engName'
        },
        {
            type: 'input',
            message: 'Enter engineer ID:',
            name: 'engId'
        },
        {
            type: 'input',
            message: 'Enter engineer email:',
            name: 'engEmail'
        },
        {
            type: 'input',
            message: 'Enter engineer GitHub',
            name: 'engGit'
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGit);
        team.push(engineer);
        console.log(team)
    })
}

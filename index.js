const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const createHTML = require('./src/createHtml.js');
const { resolve } = require('path');

const team = [];

function init(){
    function startTeam(){
        inquirer.prompt([
            {
                type: 'list',
                message: 'What member would you like to add next?',
                choices: ['Manager', 'Engineer', 'Intern', 'None'],
                name: 'newEmp'
            }
        ])
        .then(function(input){
            switch(input.newEmp){
                case 'Manager':
                    addManager();
                break;
                case 'Engineer':
                    addEngineer();
                break;
                case 'Intern':
                    addIntern();
                break;
                case 'None':
                    writeToFile();
                break;
            }
        })
    };

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
            startTeam();
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
                message: 'Enter engineer GitHub:',
                name: 'engGit'
            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGit);
            team.push(engineer);
            startTeam();
        })
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: 'input', 
                message: "Enter the intern's name:",
                name: 'intName'
            },
            {
                type: 'input',
                message: 'Enter intern ID:',
                name: 'intId'
            },
            {
                type: 'input',
                message: 'Enter intern email:',
                name: 'intEmail'
            },
            {
                type: 'input',
                message: 'Enter intern school:',
                name: 'intSchool'
            }
        ])
        .then(answers => {
            const intern = new Intern(answers.intName, answers.intId, answers.intEmail, answers.intSchool);
            team.push(intern);
            startTeam();
        })
    };

    function writeToFile() {
        fs.writeFile('./dist/index.html', createHTML(team), (err) => err && console.error(err))
    };

    startTeam();

};

init();
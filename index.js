const inquirer = require('inquirer');
const fs = require('fs');

const personInfo = [
    {
        type: 'input',
        message: 'Team member name:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Team member ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Team member email:',
        name: 'email'
    }
]
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { fstat } = require('node:fs');

let team = [];

// initialize CLI app
const openingPrompts = () => {
    console.log("Welcome to Team Profile Generator!");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email?"
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?"
            }
        ]).then((managerAnswers) => {
            const manager = new Manager(managerAnswers.name, managerAnswers.email, managerAnswers.id, managerAnswers.officeNumber);
            employee.push(manager);
            teammateOptions();
        })
};

const teammateOptions = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "Which type of employee would you like to add next?",
                choices: ['Engineer', 'Intern', 'I am done!']
            }
        ]).then((teammateAnswer) => {
            if (teammateAnswer.role === 'Engineer') {
                EngineerPrompts();
            } else if (teammateAnswer.role === 'Intern') {
                InterPrompts();
            } else {
                writeHTML(employee);
            }
        })
}

// Engineer

// Intern

// complete team and write HTML
const writeHTML = () => {
    fstat.writeFileSync('./index.html', generatePage(employee), err => {
        if (err) throw err;
        console.log('Page complete.')
    })
}



// function call to initialize app
openingPrompts();
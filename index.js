const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { printManager, printEngineer, printIntern, createHelper } = require('./src/helper');


let team = [];

// initialize CLI app & ask for team manager info
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
            // push to team array of employees
            team.push(printManager(manager));

            // check if additional employees to add
            teammateOptions();
        })
};

//check if other employees to add
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
                InternPrompts();
            } else {
                writeHTML('./dist/index.html', createHelper(team.join('')))
            }
        })
};

// Engineer
const EngineerPrompts = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type: "input",
                name: 'id',
                message: "What is the engineer's Id number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email address?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?"
            }
        ])

        .then((engineerAnswers) => {
            const engineer = new Engineer(engineerAnswers.name, engineerAnswers.email, engineerAnswers.id, engineerAnswers.github);
            team.push(printEngineer(engineer));
            teammateOptions();
        })
};


// Intern
const InternPrompts = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?"
            },
            {
                type: "input",
                name: 'id',
                message: "What is the intern's Id number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email address?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?"
            }
        ])
        .then((internAnswers) => {
            const intern = new Intern(internAnswers.name, internAnswers.email, internAnswers.id, internAnswers.school);
            team.push(printIntern(intern));
            teammateOptions();
        })
};




// function to write HTML file
function writeHTML(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        } else
            console.log("Success! index.html file was created!");
    });
};

// function call to initialize app
openingPrompts();
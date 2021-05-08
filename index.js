// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide what needs to be installed for the project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide the usage of the project',
    },
    {
        type: 'confirm',
        name: 'contributers',
        message: 'Would you like to add other contributers to your project?',
        default: false
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(path.join(__dirname, fileName), data, err => {
       if (err){
           console.log(err);
       };
        
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            writeToFile("README.md", generatePage(answers));
        })
}

// Function call to initialize app
init();

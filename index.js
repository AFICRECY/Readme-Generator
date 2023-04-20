// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
        {
        type: 'input',
        message: 'What is your preferred Title for your Readme?',
        name: 'title',
        },
        {
        type: 'input',
        message: 'Write a description for your Readme:',
        name: 'description',
        },
        {
        type: 'input',
        message: 'What were your steps for installing your project?',
        name: 'installation',
        },
        {
            type: 'input',
            message: 'How can you application be used?',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Please enter your license:',
            name: 'license',
            choices: ['MIT', 'BSD','Apache','Apache_2', 'GPL','compliant', 'none'],
        },
        {
            type: 'input',
            message: 'What contributions have others made to your project?',
            name: 'contributions',
        },
        ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    fs.writeFile(fileName, data, function(err){
        return console.log(err);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const markdownPage = generateMarkdown(response)
        writeToFile("ReadmeTest.md", markdownPage) 
    })
}

// Function call to initialize app
init();


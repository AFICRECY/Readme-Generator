// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require
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
            type: 'input',
            message: 'What lisence applies for your application?',
            name: 'license',
          },
          {
            type: 'input',
            message: 'What badges do you have?',
            name: 'badges',
          },
          {
            type: 'input',
            message: 'What contributions have others made to your project?',
            name: 'contributions',
          },
      ]
      .then((response) => {
        console.log(response)
        response.confirm === response.password
          ? console.log('Success!')
          : console.log('You forgot your password already?!')
      }
      );
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


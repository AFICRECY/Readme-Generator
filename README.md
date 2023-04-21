# README.md Generator


## Technology Used:
| Technology Used         | Resource URL           |
| ------------- |:-------------:|
| Git | [https://git-scm.com/](https://git-scm.com/)     |
| JavaScript  | [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://developer.mozilla.org/en-US/docs/Web/JavaScript)      |
| Node.js | [https://nodejs.org/en](https://nodejs.org/en)      |



## Description:

Watch Functionality Video:

The README.md file is essential for deployed GitHub web applications because it serves as the first point of contact for anyone who visits your repository. It provides a brief overview of what your application does, how to use it, and any additional information that may be helpful to users or other developers.

A well-crafted README.md file can help to establish credibility and professionalism, as it demonstrates your attention to detail and your willingness to provide clear and concise documentation. This can be particularly important for potential employers or collaborators who may be interested in your work.



## Table of Contents:
* Installation (JavaScript, Node.js, NPM Packages, Template Literals, Arrow Functions, Inquirer, Objects, and Functions)
* Usage
* Credits
* License


### Installation:

To install this project, a knowledge of JavaScript, Node.js, and NPM Packages were required. I had to first install Node.js to my computer and then install the NPM and Inquirer packages. The Inquirer package provides a set of tools for building command-line interfaces (CLIs). It allowed me to create interactive prompts for users, enabling them to input information and providing responses accordingly to create their README.md file through the command line. Methods used ranged from, Template Literals, Arrow Functions, Inquirer, Objects, and Functions, Variables, If/Else Statements, and the node package.json. The web application is intended for the user to be able to open their integrated terminal, input “node index.js” into the command line, and immediately, through the terminal, be prompted with a list of questions. These questions, when answered, will allow the user to have their README.md file auto generated with the inputs they give in the terminal. The code below makes this happen. 

```
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `https://img.shields.io/badge/license-${license}-blue`;
  }
  else if (license === 'BSD') {
    return `https://img.shields.io/badge/license-${license}-yellow`;
  }
  else if (license === 'Apache') {
    return `https://img.shields.io/badge/license-${license}-orange`;
  }
  else if (license === 'Apache_2') {
    return `https://img.shields.io/badge/license-${license}-success`;
  }
  else if (license === 'GPL') {
    return `https://img.shields.io/badge/license-${license}-red`;
  }
  else if (license === 'compliant') {
    return `https://img.shields.io/badge/license-${license}-ff69b4`;
  }}
```
(Above:  this code defines a function that returns the license badge URL based on the user's input into the license question, value of the license parameter. This is used to generate a badge for a project's license in a README file.)




```
function generateMarkdown(data) {
  return # ${data.title}
## Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributions](#contributions)


## Description:
${data.description}

## Installation: 
${data.installation}

```
(Above: This code defines a function that generates a basic Markdown string for a README file, including a title, table of contents, and Description and Installation sections. The purpose of this function is to generate the Markdown sections based on the data parameter.)




```
module.exports = generateMarkdown;
```
(Above: This code exports the generateMarkdown function from a Node.js module, making it available for use by other parts of the application that require this module.)




```
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
```
(Above: Here is our questions array which holds the questions for the user in the terminal, and also saves their inputs to the value given by the name property.)




```
function writeToFile(fileName, data) {
    console.log(data)
    fs.writeFile(fileName, data, function(err){
        return console.log(err);
    })
}
```
(Above:This code defines a function that writes data to a file using the fs.writeFile() method. It logs the data to the console (for debugging purposes) and handles any errors that may occur during the write operation by logging the error information to the console.)





```
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const markdownPage = generateMarkdown(response)
        writeToFile("ReadmeEx.md", markdownPage) 
    })
}
```
(Above: This code uses the inquirer package to prompt the user with a set of questions, generates a markdown file based on their responses using the generateMarkdown() function, and writes the generated markdown to a file using the writeToFile() function.)








https://nodejs.org/docs/latest/api/process.html#processargv
https://shields.io/category/license
https://nodejs.org/en/download/releases
https://docs.npmjs.com/cli/v8/commands/npm-install
https://www.w3schools.com/nodejs/nodejs_filesystem.asp
https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromisesappendfilepath-data-options
https://www.npmjs.com/package/@inquirer/checkbox
https://stackoverflow.com/questions/62597209/trying-to-generate-a-readme-using-nodejs
https://www.npmjs.com/package/inquirer
https://nodejs.org/download/release/v16.0.0/
https://opensource.org/license/
https://docs.npmjs.com/cli/v6/commands/npm-init

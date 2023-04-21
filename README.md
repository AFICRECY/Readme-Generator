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
 {
            type: 'list',
            message: 'Please enter your license:',
            name: 'license',
            choices: ['MIT', 'BSD','Apache','Apache_2', 'GPL','compliant', 'none'],
        },
```
(Above: This code is allowing the user to have a list of options to choose from in the "choices" above in the command line. The use the up and down arrows to sift through the choices and select with the space bar, and press enter to move to the next question.)


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



## Usage:
In addition to providing information about the application itself, a README.md file can also serve as a marketing tool by highlighting the unique features and benefits of your application. This can help to generate interest and attract users or potential clients. Furthermore, a well-written README.md file can save time and reduce confusion by answering common questions and providing troubleshooting information. This can help to reduce the number of support requests and enhance the user experience. 

Because of this, README.md files are regularly created by developers creating web applications through GitHub. Having access to a README generator that auto generates the README outline and format is super useful and can save so much time in the development process. All a user would have to do with this web application is (1) Pull up their integrated terminal, (2) Input “node index.js” into the command-line, (3) The user is prompted with a list of questions where their inputs will auto generate a README outline.  

Overall, this application streamlines the README.md file creation and can save the time of web developers who utilize GitHub as a website application deployment service. 

### License:
MIT License

Copyright (c) [2023] [Afi Nkhume-Crecy]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,



## Credits
* Process.argv: https://nodejs.org/docs/latest/api/process.html#processargv
* License: https://shields.io/category/license
* Node.js Docs: https://nodejs.org/en/download/releases
* NPM Install: https://docs.npmjs.com/cli/v8/commands/npm-install
* Node.js (File System): https://www.w3schools.com/nodejs/nodejs_filesystem.asp
* FS DOcs: https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromisesappendfilepath-data-options
* Inquirer Package: https://www.npmjs.com/package/@inquirer/checkbox
* Markdown in Nodejs: https://stackoverflow.com/questions/62597209/trying-to-generate-a-readme-using-nodejs
* Iquirer: https://www.npmjs.com/package/inquirer
* Node.js Download: https://nodejs.org/download/release/v16.0.0/
* License Information: https://opensource.org/license/
* NPM Init: https://docs.npmjs.com/cli/v6/commands/npm-init

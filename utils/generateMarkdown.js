// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/license/${license}`
  }
//   if (license !== 'none')
// return (`https://opensource.org/license/${license}`);
// else {
//   return "";
// }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license == 'none') {
  return "https://opensource.org/license";
}
return `[![License: ${license}](${renderLicenseBadge(license)})](https://opensource.org/license/${license})`
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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



## Usage:
${data.usage}

## Credits:
${data.credits}

## License:
${renderLicenseSection(data.license)}

## Contributions:
${data.contributions}
`;
}

module.exports = generateMarkdown;
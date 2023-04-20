// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === MIT) {
    return `https://img.shields.io/badge/license-MIT-blue.svg`;
  }
  else if (license === BSD) {
    return `https://img.shields.io/badge/license-BSD-yellow.svg`;
  }
  else if (license === Apache) {
    return `https://img.shields.io/badge/license-Apache-orange.svg`;
  }
  else if (license === Apache_2) {
    return `https://img.shields.io/badge/license-Apache2-success.svg`;
  }
  else if (license === GPL) {
    return `https://img.shields.io/badge/license-GPL-red.svg`;
  }
  else if (license === compliant) {
    return `https://img.shields.io/badge/license-compliant-ff69b4.svg`;
  }}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}
  ## ${data.installation}
  ## ${data.usage}
  ## ${data.credits}
  ## ${data.license}
  ## ${data.contributions}
`;
}

module.exports = generateMarkdown;


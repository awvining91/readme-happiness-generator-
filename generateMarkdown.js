const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  ${data.tableofcontents}

  ### Usage

  ${data.usage}

  ### License

  ${data.license}

  ### Contributors

  ${data.contributors}

  ### Tests

  ${data.test}

  ### Questions

  Feel free to send me an email to my email address if you have any questions!!!

  My email: [${data.email}](mailto:${data.email})
  My github: [https://github.com/${data.github}](https://github.com/${data.github})





`;
}

module.exports = generateMarkdown;
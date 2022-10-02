/* On line 23 I created a function to generate a new markdown file
based on what the user answers. Template literals will return the basic structure of the readme
per the acceptence criteria, with specific areas that will pull in data 
from the what the users selects.

Thanks!


*/

const fs = require('fs');

// Comments from the starter student code file
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
function makeNewFile(info) {
  return `
  
  # ${info.title}

  [![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

  ## Description

  ${info.description}

  ## Table of Contents

  ${info.tableofcontents}

  
- Description

- Installation

- Usage

- License

- Contributing

- Tests

- Questions

### Usage

${info.usage}

### License

${info.license}

### Contributors

${info.contributors}

### Tests

${info.test}

### Questions

Feel free to send me an email to my email address if you have any questions!!!

My email: [${info.email}](mailto:${info.email})

My github: [https://github.com/${info.github}](https://github.com/${info.github})





`;
}

module.exports = makeNewFile;

/* References

https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f

Class Mini Project

Class Exercises

https://www.makeareadme.com/

https://nodejs.org/api/fs.html




*/
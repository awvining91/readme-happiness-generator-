// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const fs = require('fs');



const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your age?',
      name: 'age',
    },
    {
      type: 'input',
      message: 'What is your favorite color',
      name: 'color',
    },
  ])
  .then((response) =>
    response.age === response.color
      ? console.log('Success!')
      : console.log('Thanks for the info!')
  );

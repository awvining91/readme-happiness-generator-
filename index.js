// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown.js')
// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then(data => {
            console.log(data);
            writeToFile('./generated.md', generateMarkdown(data))
        }
            
            
            )



}

// Function call to initialize app
init();

const fs = require('fs');



const inquirer = require('inquirer');

inquirer

const questions = [
  
    {
      type: 'input',
      message: 'What is the title of this cool stuff you are working on?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Could you tell us more about what you are working on?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Could you tell us more about the usage of what you are building?',
      name: 'usage',
    },
    {
        type: 'input',
        message: 'Could you give us more info on depencies needs and installation guidelines?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Could you give us more info on depencies needs and installation guidelines?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Could you give us more info on depencies needs and installation guidelines?',
        name: 'installation',
      },

];


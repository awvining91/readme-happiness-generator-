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


const fs = require('fs');



const inquirer = require('inquirer');



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
      message: 'Do not forget to add a table of contents section!',
      name: 'tableofcontents',
      },


    {
      type: 'input',
      message: 'Could you tell us more about the usage of what you are building?',
      name: 'usage',
    },
    {
      type: 'checkbox',
      message: 'What kind of license do you have?',
      name: 'license',
      choices: ['GNU GPL', 'ISC', 'BSD', 'MIT']
    },
    {
      type: 'input',
      message: 'Are you working with anyone else?',
      name: 'contributors',
    },
    {
        type: 'input',
        message: 'Could you give us more info on depencies needs and installation guidelines?',
        name: 'installation',
      },

];

init();
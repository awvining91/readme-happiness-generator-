// TODO: Include packages needed for this application
const makeNewFile = require('./createReadMe.js')
// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function makeReadMe(newReadMe, info) {
    fs.writeFileSync(newReadMe, info)
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(userResponse)
        .then(info => {
            console.log(info);
            makeReadMe('./newreadme.md', makeNewFile(info))
        }
            
            
            )



}

// Function call to initialize app


const fs = require('fs');



const inquirer = require('inquirer');



const userResponse = [
  
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
      message: 'Please add a table of contents section for the readme.',
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
      choices: ['CC0', 'IBM', 'ODbl', 'PDDL']
    },
    {
      type: 'input',
      message: 'Are you working with anyone else?',
      name: 'contributors',
    },
    {
      type: 'input',
      message: 'Could you give us more info on dependencies needed and installation guidelines?',
      name: 'installation',
    },

    {
      type: 'input',
      message: 'List any tests that you might use for the project please.',
      name: 'test',
      },

      {
       type: 'input',
       message: 'Tell us what your email address is in case of questions.',
       name: 'email',
      },


      {
       type: 'input',
       message: 'Tell us what your github username is as well.',
       name: 'github',
      },





];

init();
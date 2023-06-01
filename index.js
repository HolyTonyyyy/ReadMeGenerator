const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path")
const listReadme = require("./listReadme");

// Questions
const questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter the name of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the usage instructions:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter the contributing guidelines:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter the project license:',
    },
    {
      type: 'input',
      name: 'author',
      message: 'Enter the author name:',
    },
  ]

  // Writing ReadMe 
  function writeFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  // Initializing app
  function init() {
    inquirer.prompt(questions).then((response) => {
      console.log('README.md file has been successfully created!');
      writeFile("./README.md", listReadme({ response }));
    })
  }
init();

   
  
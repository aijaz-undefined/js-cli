#!/usr/bin/env node

const Aboutme = require('./commands/Aboutme');
const Contactme = require('./commands/contactme');
const inquirer = require('inquirer');

const Index = () => {
    console.log('Welcome to my Profile');
    // Aboutme();
    // Contactme();

    inquirer.prompt([
      {
        type: "list",
        choices: ["aboutme", "contactme"],
        name: 'answer'
      }
    ]).then((response) => {
      console.log(response);

      if(response.answer == 'aboutme'){
        Aboutme();
      }

      if(response.answer == 'contactme'){
        Contactme();
      }
    });
  };

    Index();
    module.exports = Index;
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your location?",
        name: "location",
      },
      {
        type: "input",
        message: "what is your LinkedIn Username?",
        name: "LinkedIn",
      },
      {
        type: "input",
        message: "what is your Github url?",
        name: "Github",
      },
    ])
    .then((response) => {
      const html = generateHTML(response);
      const fileName = `${response.name.split(" ").join(" ")}.html`;
      fs.writeFile(fileName, html, (err) => {
        err ? console.error(err) : console.log("success");
      });
    });
  
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

const generateMarkmd = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = () =>
  // array of questions for user
  // const questions = [
  inquirer.prompt([
    {
      type: "input",
      message: "What is your project name?",
      name: "project",
    },
    {
      type: "input",
      message: "What is your user story ?",
      name: "story",
    },
    {
      type: "input",
      message: "what is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "what is your Github Username?",
      name: "github",
    },
    {
      type: "list",
      message: "what is the license ",
      name: "license",
      choices: ["MIT", "javascript", "apache"],
    },
    {
      type: "input",
      message: "description",
      name: "description",
    },
    {
      type: "input",
      message: "installation",
      name: "installation",
    },
    {
      type: "input",
      message: "usage",
      name: "usage",
    },
    {
      type: "input",
      message: "contributing",
      name: "contributing",
    },
    {
      type: "input",
      message: "tests",
      name: "tests",
    },
  ]);

// // function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
  questions()
    .then((response) => {
      console.log(response);
      return writeFileAsync("READMETEST.md", generateMarkmd(response));
    })
    .then(() => console.log("Successfully wrote to readme.md"))
    .catch((err) => console.error(err));
}
init();

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
      message: "what is your Github url?",
      name: "github",
    },
    {
      type: "list",
      message: "what is the licence ",
      name: " licence",
      choices: ["MIT", "javascript", "apache"],
    },
  ]);

// .then((response) => {
//   const md = generateMarkmd(response);
//   const fileName = `${response.project.split(" ").join(" ")}.md`;
//   fs.writeFile(fileName, md, (err) => {
//     err ? console.error(err) : console.log("success");
//   });
// });

// ]

// // function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
  questions()
    .then((response) =>
      writeFileAsync("READMETEST.md", generateMarkmd(response))
    )
    .then(() => console.log("Successfully wrote to readme.md"))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();

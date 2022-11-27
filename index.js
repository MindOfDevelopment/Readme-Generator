const inquirer = require("inquirer");
const markdownGenerator = require("./templates/mdGenerator");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your Project Title?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your Project?",
    name: "description",
  },
  {
    type: "input",
    message: "Installation Method?",
    name: "installation",
  },
  {
    type: "input",
    message: "How to run the project?",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose Licence?",
    name: "licence",
    choices: ["Apache", "MIT", "None"],
  },
  {
    type: "input",
    message: "How to contribute?",
    name: "contribution",
  },
  {
    type: "input",
    message: "How to run Tests?",
    name: "test",
  },
  {
    type: "input",
    message: "What's your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What' your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Success.");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answers) {
    // console.log(answers);
    let data = markdownGenerator(answers);
    writeToFile("README.md", data);
  });
}

// Function call to initialize

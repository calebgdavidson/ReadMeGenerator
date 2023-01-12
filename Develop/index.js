// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
{
type: 'input',
name: 'title',
message: 'what is your project title?',
validate: projectTitleInput => {
    if (projectTitleInput) {
        return true;
    } else {
        console.log('enter project name');
        return false;
}}},
{
type: 'input',
name: 'description',
message: 'Describe your project:',
validate: descriptionInput => {
    if (descriptionInput) {
        return true;
    } else {
        console.log('enter a description');
        return false;
}}},
{
type: 'input',
name: 'usage',
message: 'include instructions for usage?'
},
{
type: 'input',
name: 'installation',
message: 'include instructions for installation?'
},
{
type: 'input',
name: 'license',
message: 'include license?'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();
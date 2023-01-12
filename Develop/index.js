// TODO: Include packages needed for this application
const fs = require('fs');
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
const writeToFile = data => {
return new Promise((resolve, reject) => {
fs.writeFile('./dist/README.md', data, err => {
    if (err) {
    reject (err);
    return;
}
resolve({
ok: true,
message: 'go to the distributable / dist directory'
});
})
})
}

// TODO: Create a function to initialize app
const init = () => {
return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userInput => {
return generateMarkdown(userInput);
})
.then(readmeInfo => {
return writeToFile(readmeInfo);
})
.catch(err => {
console.log(err);
})
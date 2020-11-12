// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.project}
  ![license badge](https://img.shields.io/badge/Licence-MIT-blue)
  
[license](#license)

[description](#description)

[installation](#installation)

[usage](#usage)

[contributing](#contributing)

[test](#test)

## user story
  ${response.story}

## Questions 
  ${response.github}
[github profile](https://github.com/${response.github})
${response.email}

## license
  ${response.license}
  /apm/l/:${response.license}
## description 
  ${response.description}
## installation
  ${response.installation}
## usage
  ${response.usage}
## contributing
  ${response.contributing}
## test
  ${response.test}

`;
}

module.exports = generateMarkdown;

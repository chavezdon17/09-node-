// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.project}
  ![license badge](https://img.shields.io/badge/Licence-MIT-blue)
  
  ## table of contents 

[license](#license)



[description](#description)



[installation](#installation)


[usage](#usage)



[contributing](#contributing)



[test](#test)

## user story
  ${response.story}

## Questions 
If you have any questions you can reach me at my Github or my email. 
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

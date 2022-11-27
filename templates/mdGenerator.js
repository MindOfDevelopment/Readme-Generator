function markdownGenerator(project) {
  let md = `
    # ${project.title}

    [![Licence](https://img.shields.io/static/v1?label=<LABEL>&message=${project.licence}&color=informational)]
 
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
    - [Contribution] (#contribution)
    - [More Info](#more-info)

    ## Description
    ${project.description}

    ## Installation
    project.installation}

    ## Usage
    ${project.usage}

    ## Testing
    project.testing

    ## Contribution
    ${project.contribution}

    ## More Info
    ${project.contribution}
     - Email: <${project.email}>
     - Github: [${project.github}]('https://github.com/${project.github}')
    `;
  return md;
}

module.exports = markdownGenerator;

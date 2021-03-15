
const printManager = (manager) => {
    return `<div class = "box manager" >
    ${manager.name}, Manager
    <div>
    Id: ${manager.id}
    Email: ${manager.email}
    Number: ${manager.officeNumber}
    </div>
    </div>`
}

const printEngineer = (engineer) => {
    return `<div class = "box engineer" >
    ${engineer.name}, Engineer
    <div>
    Id: ${engineer.id}
    Email: ${engineer.email}
    GitHub: ${engineer.gitHub}
    </div>    
    </div>`
}

const printIntern = (intern) => {
    return `<div class = "box intern" >
    ${intern.name}, Intern
    <div>
    Id: ${intern.id}
    Email: ${intern.email}
    University: ${intern.school}
    </div>  
    </div>`
}

const createHelper = (team) => {

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <title>My Team</title>
    </head>

    <body>
    <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">

                    My Team

                </h1>
            </div>
        </div>
    </section>
    ${team}

    </body>

    </html>
    `
}

createHelper();

// export object containing these functions
module.exports = { printManager, printEngineer, printIntern, createHelper }

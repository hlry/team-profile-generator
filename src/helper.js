const createTeam = (team) => {
    // create multiple functions for each of the managers the engineer, intern, return the html
    const printManager = (manager) => {
        return `<div class = "card manager" >

        </div>`
    }
    const printEngineer = (engineer) => {
        return `<div class = "card engineer" >
        </div>`
    }
    {
        const printIntern = (intern) => {
            return `<div class = "card intern" >
            </div>`
        }
    }
}

const createHelper = () => {

    return `
    < !DOCTYPE html >
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style href: // include link to dist/style.css>
    <title>My Team</title>
    </head>

    <body>
    ${createTeam(team)}
    </body>

    </html>
    `
}

createHelper();

module.exports = Helper;

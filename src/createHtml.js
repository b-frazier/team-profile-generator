function generateManager(manager) {
    return `
    <div class="card" style="width: 20rem;">
    <div class="card-body">
        <h5 class="card-title">${manager.getName()}</h5>
        <p class="card-text">${manager.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
    </ul>
    </div>
    `
}

function generateEngineer(engineer) {
    return `
    <div class="card" style="width: 20rem;">
    <div class="card-body">
        <h5 class="card-title">${engineer.getName()}</h5>
        <p class="card-text">${engineer.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">https://github.com/${engineer.getGithub()}</a></li>
    </ul>
    </div>
    `
}

function generateIntern(intern) {
    return `
    <div class="card" style="width: 20rem;">
    <div class="card-body">
        <h5 class="card-title">${intern.getName()}</h5>
        <p class="card-text">${intern.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
    <div>
    `
}

function generatePage(employees) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1 class="text-center">TEAM PROFILE</h1>
        </header>
        <div class="container">
            <div class="row justify-content-center" id="cards">
                ${employees}
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>  
    </body>
    </html>
    `
}

function createHtml(data) {
    const cards = [];

    for(let i = 0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getRole();

        if(role === 'Manager'){
            const managerCard = generateManager(employee);
            cards.push(managerCard)
        } else if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            cards.push(engineerCard)
        } else {
            const internCard = generateIntern(employee);
            cards.push(internCard)
        }
    }

    const employees = cards.join('');
    const generateTeam = generatePage(employees);
    return generateTeam;
}

module.exports = createHtml;
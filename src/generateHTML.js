// create Manager card
const generateManager = function (manager) {
	return `
<div class="col-4 mt-4">
	<div class="card h-100">
		<div class="card-header">
			<h3>${manager.name}</h3>
			<h4>Manager  <i class="fas fa-briefcase"></i></h4>
		</div>

		<div class="card-body">
			<p class="id">ID: ${manager.id}</p>
			<p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
			<p class="office">Office Number: ${manager.officeNumber}</p>
		</div>
	</div>
</div>`;
}

// create Engineer card
const generateEngineer = function (engineer) {
	return `
<div class="col-4 mt-4">
	<div class="card h-100">
		<div class="card-header">
			<h3>${engineer.name}</h3>
			<h4>Engineer  <i class="fas fa-lightbulb"></i></h4>
		</div>

	   <div class="card-body">
			<p class="id">ID: ${engineer.id}</p>
			<p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
			<p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
		</div>
	</div>
</div>`;
}

// create Intern card 
const generateIntern = function (intern) {
	return `
<div class="col-4 mt-4">
	<div class="card h-100">
		<div class="card-header">
			<h3>${intern.name}</h3>
			<h4>Intern  <i class="fas fa-graduation-cap"></i></h4>
	   </div>

		<div class="card-body">
			<p class="id">ID: ${intern.id}</p>
			<p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
			<p class="school">School: ${intern.school}</p>
	   </div>
	</div>
</div>`;
};

// push array to page 
generateHTML = (data) => {
	// array for cards 
	employeeArray = []; 

	for (let i = 0; i < data.length; i++) {
		const employee = data[i];
		const role = employee.getRole(); 

		// call manager function
		if (role === 'Manager') {
			const managerCard = generateManager(employee);

			employeeArray.push(managerCard);
		}

		// call engineer function
		if (role === 'Engineer') {
			const engineerCard = generateEngineer(employee);

			employeeArray.push(engineerCard);
		}

		// call intern function 
		if (role === 'Intern') {
			const internCard = generateIntern(employee);

			employeeArray.push(internCard);
		}		 
	}
	// joining strings 
	const employees = employeeArray.join('')

	// return to generated page
	const generateTeam = generateTeamPage(employees); 
	return generateTeam;
}

const generateTeamPage = function(employees) {
	return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Team Profile</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Arvo&family=Tourney:wght@500&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="./style.css">
</head>
<body>
	<header>
		<nav class="navbar navbar-dark bg-dark">
			<div class="container-fluid">
			  <h1 class="justify-content-center">This is the Team:</h1>
			</div>
		 </nav>
	</header>
	<main>
		<div class="container">
			<div class="row justify-content-center">
				${employees}
			</div>
	  </div>
	</main>
	
</body>
</html>`;
}

module.exports = generateHTML;
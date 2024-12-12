// Stap 1: querySelector
// let bibberLink = document.querySelector...
{
let interaction = document.querySelector('button')

// Stap 2: addEventListener
// bibberLink.addEventListener...

interaction.addEventListener('click', shakeIt)

function shakeIt() {
// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...


interaction.classList.toggle('shake')

}

}

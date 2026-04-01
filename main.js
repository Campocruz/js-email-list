// Define the number of item list
const listItems = 10;
// Define the URL endpoint for API request 
const api_mail_endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
// Select DOME node to print the email list
const emailListEl = document.getElementById('email_list');
const btnEl = document.getElementById('btnGenerate')

for (let i = 0; i < listItems; i++) {
  getEmail(api_mail_endpoint);
}

btnEl.addEventListener('click', () => {
  emailListEl.innerHTML = '';
  for (let i = 0; i < listItems; i++) {
    getEmail(api_mail_endpoint);
  }
})



function getEmail(endpoint) {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      printInList(data.response)
    })
}

function printInList(email) {
  const liEl = document.createElement('li');
  liEl.innerHTML = email;
  emailListEl.appendChild(liEl);
}
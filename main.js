const listItems = 10;

const api_mail_endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const emailListEl = document.getElementById('email_list');

for (let i = 0; i < listItems; i++) {
  fetch(api_mail_endpoint)
    .then(response => response.json())
    .then(data => {
      const liEl = document.createElement('li');
      liEl.innerHTML = data.response;
      emailListEl.appendChild(liEl);
    })
}
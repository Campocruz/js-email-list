console.log('work');
const api_mail_endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

fetch(api_mail_endpoint)
  .then(response => response.json())
  .then(data => {
    console.log(data.response)
  })
const form = document.getElementById('email-form');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    fetch('send_email.php', {
        method: 'POST',
        body: formData,
    })
    .then((Response) => Response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
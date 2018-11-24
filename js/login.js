const user = document.getElementById('username').value;
const passwrd = document.getElementById('psw').value;
const loginButton = document.getElementById('loginBtn');


loginButton.addEventListener('click', (e) => {
	console.log(passwrd)
	console.log(user)

	if (user === 'admin' && passwrd === '123') {
		window.location.href = 'admin.html';
	} else {
		window.location.href = 'index.html';
	}

	e.preventDefault();
});
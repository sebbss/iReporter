
const loginButton = document.getElementById('loginBtn');


loginButton.addEventListener('click', (e) => {

	let user = document.getElementById('username').value;
	let passwrd = document.getElementById('psw').value;
	console.log(passwrd)
	console.log(user)
	if (user == 'admin') {
		window.location.href = 'admin.html';
	} else {
		window.location.href = 'user.html';
	}

	e.preventDefault();
});
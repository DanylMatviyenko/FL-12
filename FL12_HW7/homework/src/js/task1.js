// Your code goes here
const MIN_EMAIL_LENGTH = 5;
const MIN_PASSWORD_LENGTH = 6;

let email = prompt('Email');

if (!email || email.trim() === '') {
	alert('Ceneled');
} else if (email.length < MIN_EMAIL_LENGTH) {
	alert("I don't know any emails having name length less than 5 symbols");
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
	let password = prompt('Password');
	if (!password || password.trim() === '') {
		alert('Ceneled');
	}else if (email === 'user@gmail.com' && password === 'UserPass' 
		|| email === 'admin@gmail.com' && password === 'AdminPass') {
		let isChangePassword = confirm('Do you want to change your password?');
		if (!isChangePassword) {
			alert('You have failed the change.');
		} else if (isChangePassword) {
			let oldPassword = prompt('Old password');
			if (!oldPassword || oldPassword.trim() === '') {
			alert('Ceneled');
			} else if (oldPassword === password) {
				let password = prompt('New password');
				if (!password || password.trim() === '') {
					alert('Cenceled');
				} else if (password.length < MIN_PASSWORD_LENGTH) {
					alert('It’s too short password. Sorry.');
				} else {
					let newPassword = prompt('New password again');
					if (newPassword === password) {
						alert('You have successfully changed your password.');
					} else {
						alert('You wrote the wrong password.');
					}
				}

			}
		}
	} else {
		alert('Wrong password');
	}
} else {
	alert('I don’t know you');
}
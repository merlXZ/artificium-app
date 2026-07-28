const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');
const loginBtn = document.querySelector('.button-form');
const btnToggle = document.querySelector('.form__password-toggle');

if(inputEmail && inputPassword) {
	loginBtn.addEventListener('click', () => {
		let emailValue = inputEmail.value
		let passwordValue = inputPassword.value
		loginBtn.disabled = true;
		loginBtn.textContent = `Logging in...`;
		setTimeout(() => {
			loginBtn.disabled = false;
			loginBtn.textContent = `Log in`
		}, 2000)
		console.log(`Email: ${emailValue} and Password: ${passwordValue}`);
	})
	
	inputEmail.addEventListener('blur', () => {
		if(inputEmail.value.includes('@') && inputEmail.value !== '') {
			inputEmail.classList.remove('error');
		} else {
			inputEmail.classList.add('error');

		}
	})
	btnToggle.addEventListener('click', () => {
		if(inputPassword.type === 'password') {
			inputPassword.type = 'text'
			btnToggle.textContent = `Hide`
		} else {
			inputPassword.type = 'password'
			btnToggle.textContent = `Show`
		}
	})
}


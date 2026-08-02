const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');
const loginBtn = document.querySelector('.button-form');
const btnToggle = document.querySelector('.form__password-toggle');
const rememberMe = document.querySelector('.form__checkbox-input');

let savedEmail = localStorage.getItem('userEmail');
if(savedEmail) {
	inputEmail.value = savedEmail;
	rememberMe.checked = true;
}

if(inputEmail && inputPassword) {
	loginBtn.addEventListener('click', () => {
		
		let emailValue = inputEmail.value;
		let passwordValue = inputPassword.value;
		  if(rememberMe.checked) {
			localStorage.setItem('userEmail', emailValue);
		} else {
			localStorage.removeItem('userEmail');
		}

		if(emailValue !== '' && passwordValue !== '') {
			inputEmail.classList.remove('error');
			inputPassword.classList.remove('error');
			window.location.href = 'dashboard.html'
		} else {
			inputEmail.classList.add('error');
			inputPassword.classList.add('error');
		}

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

	inputPassword.addEventListener('blur', () => {
		if(inputPassword.value.length >=8 && inputPassword.value.match(/\d/)) {
			inputPassword.classList.remove('error');
		} else {
			inputPassword.classList.add('error');
		}
	})
}


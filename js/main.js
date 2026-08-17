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

		if(	checkInput() && checkPassword() ) {
			inputEmail.classList.remove('error');
			inputPassword.classList.remove('error');
			window.location.href = 'dashboard.html'
		} else {
			inputEmail.classList.add('error');
			inputPassword.classList.add('error');
		}

	})
	
	function checkInput() {
		if(inputEmail.value.includes('@') && inputEmail.value !== '') {
			inputEmail.classList.remove('error');
			return true
		} else {
			inputEmail.classList.add('error');
			return false
		}
	}
	
	function checkPassword() {
		if(inputPassword.value.length >=8 && inputPassword.value.match(/\d/)) {
			inputPassword.classList.remove('error');
			return true
		} else {
			inputPassword.classList.add('error');
			return false
		}
	}
	

	btnToggle.addEventListener('click', () => {
		if(inputPassword.type === 'password') {
			inputPassword.type = 'text'
			btnToggle.textContent = `Hide`
		} else {
			inputPassword.type = 'password'
			btnToggle.textContent = `Show`
		}
	})

	inputEmail.addEventListener('blur', () => {
		checkInput();
	})
	inputPassword.addEventListener('blur', () => {
		checkPassword();
	})


}


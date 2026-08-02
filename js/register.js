const registerInput = document.querySelectorAll('.form__fields-input');
const registerBtn = document.querySelector('.form__create');
const formStep = document.querySelectorAll('.form__step');

if(registerBtn) {
	registerBtn.addEventListener('click', (event) => {
		event.preventDefault();
		let isAllValid = true;
		
		registerInput.forEach(input => {

			let regInputValue = input.value;


			if(regInputValue !== '') {
				input.classList.remove('error');
			} else {
				input.classList.add('error');
				isAllValid = false;
			}
		})

		if(isAllValid) {
			formStep[0].classList.remove('form__step-active');
			formStep[1].classList.add('form__step-active');
		}
	})
}



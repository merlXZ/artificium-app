// sidebar

const sidebarGroup = document.querySelector('.sidebar__group');
const sidebar = document.querySelector('.sidebar');
const buttonMenu = document.querySelector('.project__top-icon');

sidebarGroup.addEventListener('click', () => {
	sidebar.classList.toggle('active');
})

buttonMenu.addEventListener('click', () => {
	sidebar.classList.toggle('open');
})


const sidebarAddButton = document.querySelector('.sidebar__add');
const sidebarList = document.getElementById('projects-list');
const projectWrapper = document.getElementById('new-project-wrapper');
const projectInput = document.getElementById('new-project-input');

const projectIcon = [
	'assets/dashboard/icon/project-octalog.svg',
	'assets/dashboard/icon/project-square-green.svg',
	'assets/dashboard/icon/project-square-orange.svg',
	'assets/dashboard/icon/project-triangle.svg',
];

let iconCounter = 0;

sidebarAddButton.addEventListener('click', () => {
	projectInput.classList.remove('hidden');
	sidebarAddButton.style.display = 'none'
	projectInput.focus();
})

projectInput.addEventListener('keydown', (event) => {
	if(event.key === 'Enter') {
		const projectName = projectInput.value.trim();
		if(projectName !== '') {

			const newIcon = document.createElement('img');
			newIcon.src = projectIcon[iconCounter % projectIcon.length];
			newIcon.alt = 'project-figure';
			newIcon.classList.add('sidebar__icon');


			const newItem = document.createElement('li');
			newItem.classList.add('sidebar__item');
			const newLink = document.createElement('a');
			newLink.classList.add('sidebar__link');
			newLink.href = '#';
			const newTxt = document.createElement('h3');
			newTxt.classList.add('sidebar__title');
			newTxt.textContent = projectName;

			newItem.appendChild(newLink);
			newLink.appendChild(newIcon);
			newLink.appendChild(newTxt);
	
			
			sidebarList.insertBefore(newItem, projectWrapper);

			iconCounter++;

			projectInput.value = '';
			projectInput.classList.add('hidden');
			sidebarAddButton.style.display = 'flex';
		}
	}
})



// header
// const tabsList = document.querySelector('.tabs__list');
const tabsLink = document.querySelectorAll('.tabs__link');
const buttonEdit = document.querySelector('.project__top-button');
const buttonEditClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');

tabsLink.forEach(tabs => {

	tabs.addEventListener('click', () => {
		tabsLink.forEach(link => {
			link.classList.remove('active')
		})
		tabs.classList.add('active');
	})

})

if(modal && buttonEdit) {

	const openModal = () => {
		modal.classList.add('open');
		document.body.style.overflow = 'hidden';
	}

	const closeModal = () => {
		modal.classList.remove('open');
		document.body.style.overflow = '';
	}

	buttonEdit.addEventListener('click', openModal);
	buttonEditClose.addEventListener('click', closeModal);
	modalOverlay.addEventListener('click', closeModal);

	document.addEventListener('keydown', (event) => {
		if(event.key === 'Escape') {
			closeModal();
		}
	})

}

const copyLinkButton = document.querySelector('.modal__copylink-button');

if(copyLinkButton) {
	copyLinkButton.addEventListener('click', () => {
		const link = 'https://artificium.app/invite/orbital-oddysey';

		navigator.clipboard.writeText(link)
			.then(() => {
				const originalHTML = copyLinkButton.innerHTML;

				copyLinkButton.innerHTML = 'Copied! ✅';
				copyLinkButton.style.color = '#3DED97';

				setTimeout(() => {
					copyLinkButton.innerHTML = originalHTML;
					copyLinkButton.style.color = '';
				}, 2000)
			})
			.catch(err => {
				console.error('Не удалось скопировать ссылку: ', err);
			})

	})
}

const editButton = document.querySelector('.invite__edit-txt');
const editList = document.querySelector('.invite__edit-list');

if(editButton) {
		editButton.addEventListener('click', () => {
			editList.classList.toggle('open');
	})
}


// starter 

const titleElement = document.getElementById('animated-title');
const text = titleElement.textContent;

titleElement.innerHTML = '';

text.split('').forEach((letter, index) => {
	const span = document.createElement('span');
	span.textContent = letter === ' ' ? '\u00A0' : letter;

	span.classList.add('char');
	span.style.animationDelay = `${index * 0.4}s`;

	titleElement.appendChild(span);
});


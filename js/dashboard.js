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
const buttonEdit = document.querySelector('.project__top-button');
const buttonEditClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');


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

// modal can edit
const userCards = document.querySelectorAll('.invite__edit-item');
const editUser = document.querySelectorAll('.invite__edit-user');
const topConatiner = document.querySelector('.invite__edit-scroll')

userCards.forEach(user => {
	user.addEventListener('click', () => {
		const userName = user.querySelector('.users__info-text h2').textContent;
		const userAvatar = user.querySelector('.user__info-image').src;

		const newChip = document.createElement('div');
		newChip.classList.add('invite__edit-user');

		const imgChip = document.createElement('img');
		imgChip.classList.add('invite__edit-icon');
		imgChip.src = userAvatar;

		const nameChip = document.createElement('p');
		nameChip.classList.add('invite__edit-title');
		nameChip.textContent = userName;

		const closeChip = document.createElement('button');
		closeChip.classList.add('invite__edit-close');
		closeChip.textContent = '×';

		newChip.append(imgChip, nameChip, closeChip);

		topConatiner.prepend(newChip);

	})
});

editUser.forEach((edit) => {
	edit.addEventListener('click', () => {
		edit.style.display = 'none'
	})
})


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


// chat content 
const tabsContent = document.querySelectorAll('.starter-container');
const tabsLink = document.querySelectorAll('.tabs__link');
const message = document.querySelector('.message');

tabsLink.forEach((btn, index) => {
	btn.addEventListener('click', () => {

		tabsLink.forEach(button => {
			button.classList.remove('active');
		})

		btn.classList.add('active');

		tabsContent.forEach(content => {
			content.classList.add('hiddens');

		})
		tabsContent[index].classList.remove('hiddens');
		if(index === 1) {
			message.classList.add('message_short');

		} else {
			message.classList.remove('message_short');
		}
		if(index === 2) {
			message.classList.add('message_hidden');
		} else {
			message.classList.remove('message_hidden');
		}
	})
})

// message


class Message {
	constructor(userText, userName, userTime) {
		this.text = userText;
		this.name = userName;
		this.time = userTime;
	}
	render() {
		const card = document.createElement('div');
		card.classList.add('chats');

		const cardAvatar = document.createElement('img');
		cardAvatar.classList.add('chats__img');
		cardAvatar.src = 'assets/dashboard/img/chats-img.png';
		cardAvatar.alt = 'avatar-user';

		const cardContent = document.createElement('div');
		cardContent.classList.add('chats__content');

		const cardTop = document.createElement('div');
		cardTop.classList.add('chats__top');

		const authorSpan = document.createElement('span');
		authorSpan.classList.add('chats__top-name');
		authorSpan.textContent = this.name;

		const cardTime = document.createElement('p');
		cardTime.classList.add('chats__top-time');
		cardTime.textContent = this.time;

		const cardCopy = document.createElement('div');
		cardCopy.classList.add('chats__top-copy');
		cardCopy.innerHTML = `
			<svg viewBox="0 0 12.167 12.1667" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.166992" height="12.166748" fill="none" customFrame="#000000">
				<path id="icon" d="M6.75049 0.75C7.48687 0.75 8.08382 1.34695 8.08382 2.08333L8.08382 6.75C8.08382 7.48638 7.48687 8.08333 6.75049 8.08333L2.08382 8.08333C1.34744 8.08333 0.750488 7.48638 0.750488 6.75L0.750488 2.08333C0.750488 1.34695 1.34744 0.75 2.08382 0.75L6.75049 0.75ZM9.75049 4.08333L10.0838 4.08333C10.8202 4.08333 11.4172 4.68029 11.4172 5.41667L11.4172 10.0833C11.4172 10.8197 10.8202 11.4167 10.0838 11.4167L5.41715 11.4167C4.68078 11.4167 4.08382 10.8197 4.08382 10.0833L4.08382 9.75" fill-rule="nonzero" stroke="rgb(104,107,110)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.500000" />
			</svg>
		`;

		const cardText = document.createElement('p');
		cardText.classList.add('chats__text');
		cardText.textContent = this.text;

		cardTop.append(authorSpan, cardTime, cardCopy);
		cardContent.append(cardTop, cardText);
		card.append(cardAvatar, cardContent);

		return card;
	}
}



const messageInput = document.querySelector('.message__input');
const chatArea = tabsContent[1];
let crewCount = 1;
const chatCounter = document.getElementById('chat-counter');
const chatMain = document.querySelector('.chat__main');
const chatMainChats = document.querySelector('.chat-main-chats');

message.addEventListener('submit', (event) => {
	event.preventDefault();
	messageInput.setAttribute('placeholder', 'What you want to share today?')
	const textFormUser = messageInput.value;

	if(textFormUser.trim() === '') return;

	const newMsg = new Message(textFormUser, 'Ryan Lee', '5 min ago');
	const finalHTML = newMsg.render();

	chatMain.append(finalHTML);
	chatMain.scrollTop = chatMain.scrollHeight

	messageInput.value = '';
	tabsLink[1].click();
	chatCounter.textContent = crewCount++;
})
tabsLink[0].addEventListener('click', () => {
	messageInput.placeholder = 'You can ask me anything! I am here to help.';
})
tabsLink[1].addEventListener('click', () => {
	messageInput.placeholder = 'What you want to share today?';
})

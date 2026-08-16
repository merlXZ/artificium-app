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
// tabsList.addEventListener('click', () => {

// })

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


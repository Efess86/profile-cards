"use strict";

document.addEventListener('DOMContentLoaded', () => {
	const btn = document.querySelector('.btn'),
		btnDelete = document.querySelector('.btn-delete'),
		btnDeleteAll = document.querySelector('.btn-deleteAll'),
		inpName = document.querySelector('.input-name'),
		inpSurname = document.querySelector('.input-surname'),
		inpEmail = document.querySelector('.input-email'),
		form = document.querySelector('.profile'),
		errorOut = document.querySelector('.error-output'),
		modalProfile = document.querySelector('.modal__profile'),
		modalUnder = document.querySelector('.modal__profile-under'),
		result = document.querySelector('.result');


	let userName,
		userSurname,
		userEmail;

	// btn.addEventListener('click', () => {
	// 	const div = document.createElement('div');
	// 	const userName = document.createElement('span');
	// 	const userSurname = document.createElement('span');
	// 	const userEmail = document.createElement('span');
	// 	div.classList.add('card-body');
	// 	userName.classList.add('card-body-span');
	// 	userSurname.classList.add('card-body-span');
	// 	userEmail.classList.add('card-body-span');

	// 	userName.innerHTML = 'Name: ' + inpName.value;
	// 	userSurname.innerHTML = 'Surname: ' + inpSurname.value;
	// 	userEmail.innerHTML = 'Email: ' + inpEmail.value;

	// 	form.appendChild(div);
	// 	div.appendChild(userName);
	// 	div.appendChild(userSurname);
	// 	div.appendChild(userEmail);
	// });
// =============== Refactoring ================
	btn.addEventListener('click', () => {
		userName = inpName.value;
		userSurname = inpSurname.value;
		userEmail = inpEmail.value;

		if (userName, userSurname, userEmail) {
			if (userName.length > 20) {
				userName = `${userName.substring(0, 21)}...`;
			}
			if (userSurname.length > 20) {
				userSurname = `${userSurname.substring(0, 21)}...`;
			}
			if (userEmail.length > 20) {
				userEmail = `${userEmail.substring(0, 21)}...`;
			}

			form.innerHTML += `
			<div class="card-body">
				<div class="card-body-text">
					<span class="card-body-span card__name">Name: ${userName}</span>
					<span class="card-body-span card__surname">Surname: ${userSurname}</span>
					<span class="card-body-span card__email">Email: ${userEmail}</span>
				</div>
				<i class="trash fas fa-trash fa-2x"></i>
				<i class="profile-info fas fa-id-card fa-2x"></i>
			</div>`;

		} else {
			errorOut.innerHTML = 'Error. Please fill all the fields.';
			setTimeout(() => {
				errorOut.innerHTML = '';
			}, 3500);
		}
	});

	btnDelete.addEventListener('click', () => {
		form.removeChild(form.lastChild);
	});

	btnDeleteAll.addEventListener('click', () => {
		form.innerHTML = '';
	});


	// ======================================= RESULT AREA ===================================================
	// ------------- Delete Element \\\\\\\\ Open modal --------------
	form.addEventListener('click', (e) => {
		if (e.target && e.target.matches('.profile .card-body .trash')) {
			e.target.parentElement.remove();
		}
		if (e.target && e.target.matches('.profile .card-body .profile-info')) {
			let profText = e.target.parentElement.innerHTML;
			profText = profText.split('<i')[0];

			modalProfile.classList.add('active__modal');
			modalProfile.classList.add('transform');
			modalProfile.classList.remove('close__modal');
			modalUnder.classList.add('modal__profile-under-active');
			document.body.style.overflow = 'hidden';

			modalProfile.innerHTML = `<div class="modal__close">&times;</div> ${profText}`;
		}
	});

	// modal close -------
	function closeModal() {
		modalProfile.classList.remove('active__modal');
		modalProfile.classList.remove('transform');
		modalProfile.classList.add('close__modal');
		modalUnder.classList.remove('modal__profile-under-active');
		document.body.style.overflow = '';
	}

	result.addEventListener('click', (e) => { // close by chest
		if (e.target && e.target.matches('.result .modal__profile .modal__close')) {
			closeModal();
		}
	});

	document.addEventListener('click', (e) => { // close by click out of modal
		if (e.target === modalUnder) {
			closeModal();
		}
	});

	document.addEventListener('keydown', (e) => { // close by escape key
		if (e.code === 'Escape' && modalProfile.classList.contains('active__modal')) {
			closeModal();
		}
	});

});

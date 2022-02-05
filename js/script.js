"use strict";

document.addEventListener('DOMContentLoaded', () => {
	const btn = document.querySelector('.btn'),
		btnDelete = document.querySelector('.btn-delete'),
		btnDeleteAll = document.querySelector('.btn-deleteAll'),
		inpName = document.querySelector('.input-name'),
		inpSurname = document.querySelector('.input-surname'),
		inpEmail = document.querySelector('.input-email'),
		form = document.querySelector('.profile'),
		errorOut = document.querySelector('.error-output');

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

	btn.addEventListener('click', () => {
		let userName = inpName.value,
			userSurname = inpSurname.value,
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
					<span class="card-body-span">Name: ${userName}</span>
					<span class="card-body-span">Surname: ${userSurname}</span>
					<span class="card-body-span">Email: ${userEmail}</span>
				</div>
				<i class="trash fas fa-trash fa-2x"></i>
				<i class="profile fas fa-id-card fa-2x"></i>
			</div>`;

		} else {
			errorOut.innerHTML = 'Error. Please fill all fields.';
			setTimeout(() => {
				errorOut.innerHTML = '';
			}, 3500);
		}

		// document.querySelectorAll('.trash').forEach((btn) => {   <<<<<<<<<<<<<<< OLD METHOD
		// 	btn.addEventListener('click', () => {
		// 		btn.parentElement.remove();
		// 	});
		// });

	});

	form.addEventListener('click', (e) => {
		if (e.target && e.target.matches('.profile .card-body .trash')) {
			e.target.parentElement.remove();
		}

	});


	btnDelete.addEventListener('click', () => {
		form.removeChild(form.lastChild);
	});

	btnDeleteAll.addEventListener('click', () => {
		// while (form.firstChild) {
		// 	form.removeChild(form.firstChild);
		// }
		form.innerHTML = '';
	});

});
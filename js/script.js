"use strict";
const btn = document.querySelector('.btn');
const btnDelete = document.querySelector('.btn-delete');
const btnDeleteAll = document.querySelector('.btn-deleteAll');

let form = document.querySelector('.profile');



btn.addEventListener('click', () => {
	const div = document.createElement('div');
	const userName = document.createElement('span');
	const userSurname = document.createElement('span');
	const userEmail = document.createElement('span');
	div.classList.add('card-body');
	userName.classList.add('card-body-span');
	userSurname.classList.add('card-body-span');
	userEmail.classList.add('card-body-span');


	let inpName = document.querySelector('.input-name').value;
	let inpSurname = document.querySelector('.input-surname').value;
	let inpEmail = document.querySelector('.input-email').value;

	userName.innerHTML = 'Name: ' + inpName;
	userSurname.innerHTML = 'Surname: ' + inpSurname;
	userEmail.innerHTML = 'Email: ' + inpEmail;


	form.appendChild(div);
	div.appendChild(userName);
	div.appendChild(userSurname);
	div.appendChild(userEmail);
});

btnDelete.addEventListener('click', () => {
	form.removeChild(form.lastChild);
});

btnDeleteAll.addEventListener('click', () => {
	while (form.firstChild) {
		form.removeChild(form.firstChild);
	}
});
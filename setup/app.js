'use strict';

const colors = [
	{
		name: 'Red',
		hex: '#ff0000',
	},
	{
		name: 'Orange',
		hex: '#ffa500',
	},
	{
		name: 'Lemon Chiffon',
		hex: '#fffacd',
	},
];

const colorSelector = () => {
	document.body.style.backgroundColor =
		colors[Math.floor(Math.random() * colors.length)].hex;
};

const buttonClick = () => {
	document.getElementById('simpleButton').addEventListener('click', colorSelector);
};

const init = () => {
	buttonClick();
};

init();

let blueButton = document.querySelector('button');
let input = document.querySelector('input');
let errorMsg = document.querySelector('.invalid');

// let re = /[a-zA-Z0-9]+@[a-z]+\.[a-z]+/;
// let result = re.test(myVal);

let showColors = (e) => {
	e.preventDefault();
	if (input.validity.valid) {
		input.style.borderColor = 'green';
		errorMsg.style.display = 'none';
	} else {
		input.style.borderColor = 'hsl(354, 100%, 66%)';
		errorMsg.style.display = 'block';
	}
};
blueButton.addEventListener('click', showColors);

document.addEventListner('DOMContentLoaded', () => {
	const timeLeftDisplay = document.querySelector('#time - left');
	const startBtn = document.querySelector('#start-buttton');
	timeLeft = 10;

	function countDown() {
		setInterval(() => {
			if (timeLeft <= 0) {
				clearInterval((timeLeft = 0));
			}
			timeLeftDisplay.textContent = timeLeft;
			timeLeft -= 1;
		}, 1000);
	}
	startBtn.addEventListener('click', countDown);
});

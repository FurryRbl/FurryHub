export default () => {
	const now = new Date();
	const month = now.getMonth() + 1;
	const date = now.getDate();
	if ((month === 4 && date === 4) || (month === 5 && date === 19)) {
		document.documentElement.style.filter = 'grayscale(100%)';
	}
};

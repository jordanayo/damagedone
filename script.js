const splash = document.getElementById('splash');
const enterBtn = document.getElementById('enter-btn');

enterBtn.addEventListener('click', () => {
	splash.style.transition = 'opacity 0.6s ease';
	splash.style.opacity = '0';
	setTimeout(() => {
		splash.style.display = 'none';
	}, 600);
});
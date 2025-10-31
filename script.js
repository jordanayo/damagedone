const splash = document.getElementById('splash');
const enterBtn = document.getElementById('enter-btn');


enterBtn.addEventListener('click', () => {
	splash.style.transition = 'opacity 0.6s ease';
	splash.style.opacity = '0';
	enterBtn.style.transform = 'scale(1.2)';
	setTimeout(() => {
		splash.style.display = 'none';
		header.style.display = 'flex'
	}, 600);

});

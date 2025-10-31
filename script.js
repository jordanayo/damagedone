const splash = document.getElementById('splash');
const enterBtn = document.getElementById('enter-btn');
const videoContainer = document.querySelector('.video-container');
const slitty = document.querySelector('.slitty');
const topstuff = document.getElementById('topsy');


enterBtn.addEventListener('click', () => {
	splash.style.transition = 'opacity 0.6s ease';
	splash.style.opacity = '0';
	enterBtn.style.transform = 'scale(1.4)';
	setTimeout(() => {
		splash.style.display = 'none';
		videoContainer.style.opacity = '1';
		videoContainer.style.transform = 'scale(1)';
		slitty.style.opacity = '1';
		slitty.style.transform = 'scale(1)';
		topstuff.style.transform = 'translateY(0)';
		topstuff.style.opacity = '1';
	
		
	}, 600);

});


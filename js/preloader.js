window.onload = () => {
    const preloader = document.querySelector('.preloader');
    const preloaderFirst = document.querySelector('.preloader__first');
    preloaderFirst.addEventListener('animationend', () => {
        preloader.classList.add('preloader--hidden');
        setTimeout(() => {
            preloader.classList.add('preloader--off');
        }, 3000)
        
    })
}
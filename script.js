const navicon = document.getElementById('navicon');
const sidenav = document.querySelector('.sidenav');
        navicon.addEventListener('click', function () {
            sidenav.classList.toggle('sidenav-sohw')
        })



	var scroll = new SmoothScroll('a[href*="#"]', {speed: 1000, speedAsDuration: true});

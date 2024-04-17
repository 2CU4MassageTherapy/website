// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () =>
        mobileMenu.classList.toggle('active')
    );
});

// ImageReelMobile
document.addEventListener('DOMContentLoaded', () => {
    var index = 0;
    var images = document.querySelectorAll('.ImageReelMobile .container img');

    setInterval(function() {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }, 3000) // Cycling speed (milliseconds)
});

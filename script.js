document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop -70,
                behavior: 'smooth'
            });
        });
    });
});

const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
    if (window.scrollY > 50 && !scrolled) {
        navbar.style.top = '0';
        scrolled = true;
    } else if (window.scrollY <= 50 && scrolled) {
        navbar.style.top = '-10px';
        scrolled = false;
    }
};
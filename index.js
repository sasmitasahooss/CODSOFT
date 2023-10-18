// Add smooth scrolling to navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    behavior: 'smooth',
                    top: targetElement.offsetTop - 50, // Adjust for the height of your navbar
                });
            }
        });
    });
});

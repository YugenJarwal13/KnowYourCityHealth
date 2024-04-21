document.addEventListener('DOMContentLoaded', () => {
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const navLinks = document.querySelector('.nav-links');

    menuToggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});

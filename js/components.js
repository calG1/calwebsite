document.addEventListener('DOMContentLoaded', () => {
    // Set Active Link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        // Check if the link href matches the current path
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Initialize Theme Toggle
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', window.toggleTheme);
        window.updateThemeIcon(); // Set initial icon state
    }

    // Set Year
    const year = new Date().getFullYear();
    const yearSpan = document.getElementById('year');
    const yearMobileSpan = document.getElementById('year-mobile');
    if (yearSpan) yearSpan.textContent = year;
    if (yearMobileSpan) yearMobileSpan.textContent = year;
});

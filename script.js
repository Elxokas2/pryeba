document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const dropdownToggles = document.querySelectorAll('.dropdown__toggle');
    const themeToggle = document.getElementById('theme-toggle');
    const navLinks = document.querySelectorAll('.nav__link'); // Seleccionar los enlaces del menú

    // Toggle menu on mobile
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        navToggle.classList.toggle('show-menu');
        if (navToggle.classList.contains('show-menu')) {
            navToggle.innerHTML = '<i class="ri-close-line"></i>';
        } else {
            navToggle.innerHTML = '<i class="ri-menu-3-line"></i>';
        }
    });

    // Close menu when clicking on any nav link (for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('show-menu')) {
                navMenu.classList.remove('show-menu');
                navToggle.classList.remove('show-menu');
                navToggle.innerHTML = '<i class="ri-menu-3-line"></i>';
            }
        });
    });

    // Toggle dropdowns on mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownMenu = toggle.nextElementSibling;
                dropdownMenu.classList.toggle('show');
                toggle.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show-menu');
            navToggle.classList.remove('show-menu');
            navToggle.innerHTML = '<i class="ri-menu-3-line"></i>';
        }
    });

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        themeToggle.innerHTML = document.body.classList.contains('light-theme') 
            ? '<i class="ri-moon-line"></i>' 
            : '<i class="ri-sun-line"></i>';
    });

    // Responsive behavior
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('show-menu');
            navToggle.classList.remove('show-menu');
            navToggle.innerHTML = '<i class="ri-menu-3-line"></i>';
            dropdownToggles.forEach(toggle => {
                toggle.classList.remove('active');
                toggle.nextElementSibling.classList.remove('show');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Function to handle fade-in effect
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Function to handle slide-in effect
    const slideInElements = document.querySelectorAll('.slide-in');
    slideInElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    document.getElementById('theme-toggle').addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        
        const toggleIcon = document.getElementById('toggle-icon');
        if (document.body.classList.contains('light-theme')) {
            toggleIcon.classList.remove('fas', 'fa-sun');
            toggleIcon.classList.add('fas', 'fa-moon');
        } else {
            toggleIcon.classList.remove('fas', 'fa-moon');
            toggleIcon.classList.add('fas', 'fa-sun');
        }
    });

    // Certificate modal functionality
    const detailButtons = document.querySelectorAll('.detail-btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const certImage = this.getAttribute('data-cert');
            const certTitle = this.getAttribute('data-title');

            document.getElementById('certModalLabel').textContent = certTitle;
            document.getElementById('modal-cert-img').src = certImage;
            $('#certModal').modal('show');
        });
    });

    // Scroll animation functionality
    const sections = document.querySelectorAll('.section-hidden');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
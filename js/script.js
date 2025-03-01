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

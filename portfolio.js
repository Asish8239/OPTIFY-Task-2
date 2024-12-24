
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.textContent = document.body.dataset.theme === 'dark' ? 'Light Mode' : 'Dark Mode';
});

// Set initial theme to light mode
document.body.dataset.theme = 'light';
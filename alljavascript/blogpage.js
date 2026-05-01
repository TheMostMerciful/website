// --- Elements ---
const hamMenu = document.querySelector('.ham-menu');
const offMenu = document.querySelector('.off-screen-menu');
const offLinks = document.querySelectorAll('.off-screen-menu a');

// --- 1. Toggle Hamburger & Sidebar ---
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offMenu.classList.toggle('active');
});

// --- 2. Auto-close Sidebar on Mobile ---
// This ensures that when you click a link and it scrolls, 
// the menu slides away so you can see the content.
offLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offMenu.classList.remove('active');
    });
});
console.log("Responsive navar...");

let icon = document.querySelector('.icon');
let nav_ul = document.getElementById('nav-ul');
let nav_contaner = document.getElementById('nav-container');

icon.addEventListener('click', () => {
    // nav_ul.classList.add('nav-resp');
    nav_ul.classList.toggle('nav-resp');
    nav_contaner.classList.toggle('nav-height');
});
// === Menu Mobile === 

function initMenu() {

    const btnMobile = document.getElementById('btn-mobile');

    function toggleMenu() {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('active');
    }

    btnMobile.addEventListener('click', toggleMenu);

}
initMenu();
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    document.querySelector('profile').classList.toggle('active');
}

function toggleSearch() {
    const input = document.getElementById('searchinput');
    input.classList.toggle('open');
    if (input.classList.contains('open')) {
        input.focus();
    }
}
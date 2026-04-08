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
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
}

document.addEventListener('click', function(e) {
    const icon = document.getElementById('profileIcon');
    const dropdown = document.getElementById('dropdown');
    if (!icon.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const sidebar = document.getElementById('sidebar');
    const topbar = document.querySelector('.topbar');
    const mainContent = document.getElementById('mainContent');

    menu.classList.toggle('active');
    sidebar.classList.toggle('active');
    topbar.classList.toggle('active');
    if (mainContent) mainContent.classList.toggle('active');
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
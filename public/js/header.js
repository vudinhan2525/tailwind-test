const MenuList = document.querySelector('#ct-menu-list');
const MenuBtn = document.querySelector('#ct-menu-btn');
document.addEventListener('click', (e) => {
    if (e.target.closest('#ct-menu-btn')) {
        MenuList.classList.toggle('hidden');
        MenuList.classList.add('ct-menu-expanded');
    } else {
        if (MenuList.classList.contains('ct-menu-expanded')) {
            MenuList.classList.toggle('hidden');
            MenuList.classList.remove('ct-menu-expanded');
        }
    }
});
window.addEventListener('resize', (e) => {
    if (window.innerWidth >= 1024) {
        if (MenuList.classList.contains('ct-menu-expanded')) {
            MenuList.classList.toggle('hidden');
            MenuList.classList.remove('ct-menu-expanded');
        }
    }
});

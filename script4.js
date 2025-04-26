
document.addEventListener("DOMContentLoaded", function () {
    // MODO OSCURO
    const darkModeToggle = document.querySelector('[data-dark]');
    const html = document.documentElement;
    const darkClass = "dark";

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            html.classList.toggle(darkClass);
            localStorage.setItem("modo", html.classList.contains(darkClass) ? "dark" : "light");
        });

        if (localStorage.getItem("modo") === "dark") {
            html.classList.add(darkClass);
        }
    }

    // MENÚ
    const menuToggle = document.querySelector('[data-menu]');
    const menu = document.querySelector('.nav');
    const menuClass = "active";

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle(menuClass);
        });
    }

    // BUSCADOR
    const searchToggle = document.querySelector('[data-search]');
    const search = document.querySelector('.search');
    const searchClass = "active";

    if (searchToggle && search) {
        searchToggle.addEventListener("click", function () {
            search.classList.toggle(searchClass);
        });
    }
});

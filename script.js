if (window.location.pathname === '/index.html') {
    var splide = new Splide('.splide',);
    splide.mount();

    splide.options = {
        speed: number = 1000,
        rewind: true,
        rewindSpeed: 1000,
    };
    function toggleMenu() {
        var menuLinks = document.getElementById("menuLinks");
        menuLinks.classList.toggle("show");
    }

    document.addEventListener("DOMContentLoaded", function () {
        var menuBar = document.querySelector(".menu_bar");
        menuBar.addEventListener("click", toggleMenu);
    });
}

if (window.location.pathname === '/heroes.html') {
    function toggleMenu() {
        var menuLinks = document.getElementById("menuLinks");
        menuLinks.classList.toggle("show");
    }

    document.addEventListener("DOMContentLoaded", function () {
        var menuBar = document.querySelector(".menu_bar");
        menuBar.addEventListener("click", toggleMenu);
    });
}



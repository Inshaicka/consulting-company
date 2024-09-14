document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");

    menuToggle.addEventListener("click", function() {
        mainNav.classList.toggle("active");
    });
});

function toggleMenu() {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    hamburgerMenu.style.display = hamburgerMenu.style.display === "flex" ? "none" : "flex";
    }
    document.querySelectorAll("#hamburgerMenu a").forEach((link) => {
    link.addEventListener("click", () => {
    toggleMenu();
    });
    });
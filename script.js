document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded successfully!");

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth",
            });
        });
    });
});

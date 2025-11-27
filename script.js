// Navigation
document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
        document.getElementById(target).classList.add("active");
    });
});

// Boutons Home
document.querySelectorAll(".home-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
        document.getElementById("mainPage").classList.add("active");
    });
});

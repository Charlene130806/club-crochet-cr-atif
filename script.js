// Navigation entre les pages
document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.target;

        document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
        document.getElementById(target).classList.add("active");
    });
});

// Retour Accueil
document.querySelectorAll(".home-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
        document.getElementById("mainPage").classList.add("active");
    });
});

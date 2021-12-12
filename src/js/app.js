
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".price").forEach(function(hot) {
        if (hot.classList.contains(".hot")){
           hot.append("🔥");
        }
    });
});

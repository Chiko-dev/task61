
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".price").forEach(function(hot) {
        console.log(hot);
        if (hot.classList.contains(".hot")){
           hot.append("🔥");
        }
    });
});

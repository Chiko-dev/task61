
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".price").forEach(function(hot) {
        if (hot.classList.contains(".hot")){
            console.log("test");
           hot.append("🔥");
        }
    });
});

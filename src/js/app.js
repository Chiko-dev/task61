
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".price").forEach(function(hot) {
        console.log(hot);
        console.log("test");
        if (hot.classList.contains(".hot")){
           hot.append("🔥");
        }
    });
});


window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".hot").forEach(hot, () => {
        console.log(hot.length);
        console.log(hot);
        for (let i = 0; i < hot.length; i++){
           hot[i].append("🔥");
        }
    });
});


window.addEventListener("DOMContentLoaded", () => {
    let hotPrice = document.querySelectorAll(".price");

    for (let i = 0; i < hotPrice.length; i++){
        if(hotPrice.classList.contains('hot')){
            hotPrice.append("🔥");
        }
    }
});

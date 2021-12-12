
window.addEventListener("DOMContentLoaded", () => {
    let hotPrice = document.querySelectorAll(".price");

    for (let i = 0; i < hotPrice.length; i++){
        if(hotPrice[i].classList.contains('hot')){
            hotPrice[i].append("🔥");
        }
    }
});

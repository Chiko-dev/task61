import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".price.hot").forEach(hot, => (){
      hot.append("🔥");
  });
});

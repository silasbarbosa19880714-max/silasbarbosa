const botao = document.querySelector(".dl-trigger");
const menu = document.querySelector(".dl-menu");

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});
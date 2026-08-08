/*=====================================================
        ANIMAÇÃO DOS CARDS
=====================================================*/

const cards = document.querySelectorAll(".card-especialidade");

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

},{
    threshold:0.15
});

cards.forEach((card)=>{

    observador.observe(card);

});
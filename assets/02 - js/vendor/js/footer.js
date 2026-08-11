/*=====================================================
        BOTÃO VOLTAR AO TOPO
=====================================================*/

const botaoTopo = document.querySelector(".voltar-topo");

window.addEventListener("scroll",()=>{

    if(window.scrollY>350){

        botaoTopo.classList.add("mostrar");

    }

    else{

        botaoTopo.classList.remove("mostrar");

    }

});
/*=========================================================
                    MENU RESPONSIVO
==========================================================*/


/*=========================================================
            LOCALIZAÇÃO DOS ELEMENTOS
==========================================================*/

// Procura o botão do menu mobile

const botaoMenu = document.querySelector(".menu-mobile");

// Procura a lista de links

const menuLinks = document.querySelector(".menu-links");


/*=========================================================
            VERIFICAÇÃO DE SEGURANÇA
==========================================================*/

// Só executa o código se os elementos
// realmente existirem na página.

if (botaoMenu && menuLinks) {


    /*=====================================================
                ABRIR / FECHAR MENU
    =====================================================*/

    botaoMenu.addEventListener("click", function () {

        menuLinks.classList.toggle("ativo");


        // Verifica se o menu está aberto

        const menuAberto =
            menuLinks.classList.contains("ativo");


        // Atualiza acessibilidade

        botaoMenu.setAttribute(
            "aria-expanded",
            menuAberto
        );

    });


    /*=====================================================
                FECHAR AO CLICAR NO LINK
    =====================================================*/

    const linksMenu =
        document.querySelectorAll(".menu-links a");


    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            menuLinks.classList.remove("ativo");

            botaoMenu.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}

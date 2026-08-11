/*=========================================================
                    MENU RESPONSIVO
==========================================================*/


/*=========================================================
            LOCALIZA OS ELEMENTOS DO MENU
==========================================================*/

// Localiza o botão dos três traços ☰
const botaoMenu = document.querySelector(".menu-mobile");

// Localiza a lista de links do menu
const menuLinks = document.querySelector(".menu-links");


/*=========================================================
            VERIFICA SE O MENU EXISTE
==========================================================*/

// Essa verificação evita que o JavaScript apresente erro
// em páginas que eventualmente não possuam o menu.

if (botaoMenu && menuLinks) {


    /*=====================================================
                ABRIR / FECHAR O MENU
    =====================================================*/

    botaoMenu.addEventListener("click", function () {

        // Adiciona ou remove a classe "ativo"
        // no menu.

        menuLinks.classList.toggle("ativo");


        // Verifica se o menu está aberto.

        const menuAberto =
            menuLinks.classList.contains("ativo");


        // Atualiza o atributo de acessibilidade
        // do botão.

        botaoMenu.setAttribute(
            "aria-expanded",
            menuAberto
        );

    });


    /*=====================================================
            LOCALIZA OS LINKS DO MENU
    =====================================================*/

    const linksMenu =
        document.querySelectorAll(".menu-links a");


    /*=====================================================
            FECHAR MENU AO CLICAR EM UM LINK
    =====================================================*/

    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            // Fecha o menu.

            menuLinks.classList.remove("ativo");


            // Informa que o menu está fechado.

            botaoMenu.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}
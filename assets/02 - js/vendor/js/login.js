/* =========================================================
   NEURO CLÍNICA DESENVOLVER
   SISTEMA DE ACESSO
   LOGIN.JS
========================================================= */

"use strict";


/* =========================================================
   01. ELEMENTOS PRINCIPAIS
========================================================= */

const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");
const loginMessage = document.getElementById("loginMessage");

const senhaInput = document.getElementById("senha");
const togglePassword = document.getElementById("togglePassword");

const recoveryModal = document.getElementById("recoveryModal");
const openRecovery = document.getElementById("openRecovery");
const closeRecovery = document.getElementById("closeRecovery");
const cancelRecovery = document.getElementById("cancelRecovery");

const recoveryForm = document.getElementById("recoveryForm");

const currentYear = document.getElementById("currentYear");


/* =========================================================
   02. ANO AUTOMÁTICO
========================================================= */

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* =========================================================
   03. MOSTRAR / OCULTAR SENHA
========================================================= */

if (togglePassword && senhaInput) {

    togglePassword.addEventListener("click", function () {

        const senhaVisivel =
            senhaInput.type === "text";


        if (senhaVisivel) {

            senhaInput.type = "password";

            togglePassword.textContent = "◉";

            togglePassword.setAttribute(
                "aria-label",
                "Mostrar senha"
            );

            togglePassword.setAttribute(
                "title",
                "Mostrar senha"
            );

        } else {

            senhaInput.type = "text";

            togglePassword.textContent = "○";

            togglePassword.setAttribute(
                "aria-label",
                "Ocultar senha"
            );

            togglePassword.setAttribute(
                "title",
                "Ocultar senha"
            );

        }

    });

}


/* =========================================================
   04. ABRIR MODAL DE RECUPERAÇÃO
========================================================= */

function abrirModalRecuperacao() {

    if (!recoveryModal) {
        return;
    }


    recoveryModal.classList.add("active");

    recoveryModal.setAttribute(
        "aria-hidden",
        "false"
    );


    /* Evita que a página role enquanto o modal está aberto */

    document.body.style.overflow = "hidden";


    /* Coloca o cursor no campo de e-mail */

    const emailRecuperar =
        document.getElementById("emailRecuperar");


    if (emailRecuperar) {

        setTimeout(function () {

            emailRecuperar.focus();

        }, 300);

    }

}


/* =========================================================
   05. FECHAR MODAL DE RECUPERAÇÃO
========================================================= */

function fecharModalRecuperacao() {

    if (!recoveryModal) {
        return;
    }


    recoveryModal.classList.remove("active");

    recoveryModal.setAttribute(
        "aria-hidden",
        "true"
    );


    /* Libera novamente a rolagem */

    document.body.style.overflow = "";


    /* Limpa o formulário */

    if (recoveryForm) {

        recoveryForm.reset();

    }

}


/* =========================================================
   06. EVENTO — ABRIR MODAL
========================================================= */

if (openRecovery) {

    openRecovery.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            abrirModalRecuperacao();

        }
    );

}


/* =========================================================
   07. EVENTO — FECHAR PELO X
========================================================= */

if (closeRecovery) {

    closeRecovery.addEventListener(
        "click",
        function () {

            fecharModalRecuperacao();

        }
    );

}


/* =========================================================
   08. EVENTO — FECHAR PELO BOTÃO VOLTAR
========================================================= */

if (cancelRecovery) {

    cancelRecovery.addEventListener(
        "click",
        function () {

            fecharModalRecuperacao();

        }
    );

}


/* =========================================================
   09. FECHAR CLICANDO FORA DO MODAL
========================================================= */

if (recoveryModal) {

    recoveryModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === recoveryModal
            ) {

                fecharModalRecuperacao();

            }

        }
    );

}


/* =========================================================
   10. FECHAR COM A TECLA ESC
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            recoveryModal &&
            recoveryModal.classList.contains("active")
        ) {

            fecharModalRecuperacao();

        }

    }
);


/* =========================================================
   11. MENSAGEM DO LOGIN
========================================================= */

function mostrarMensagemLogin(mensagem) {

    if (!loginMessage) {
        return;
    }


    loginMessage.textContent = mensagem;

    loginMessage.classList.add("visible");

}


/* =========================================================
   12. OCULTAR MENSAGEM DO LOGIN
========================================================= */

function ocultarMensagemLogin() {

    if (!loginMessage) {
        return;
    }


    loginMessage.textContent = "";

    loginMessage.classList.remove("visible");

}


/* =========================================================
   13. LIMPAR MENSAGEM AO DIGITAR
========================================================= */

const camposLogin = document.querySelectorAll(
    "#loginForm input"
);


camposLogin.forEach(function (campo) {

    campo.addEventListener(
        "input",
        function () {

            ocultarMensagemLogin();

        }
    );

});


/* =========================================================
   14. ESTADO DE CARREGAMENTO DO BOTÃO
========================================================= */

function ativarCarregamentoLogin() {

    if (!loginButton) {
        return;
    }


    loginButton.classList.add("loading");

    loginButton.disabled = true;

}


function desativarCarregamentoLogin() {

    if (!loginButton) {
        return;
    }


    loginButton.classList.remove("loading");

    loginButton.disabled = false;

}


/* =========================================================
   15. VALIDAÇÃO VISUAL DO LOGIN
========================================================= */

/*
   IMPORTANTE:

   Aqui NÃO vamos autenticar o usuário.

   A autenticação verdadeira será feita posteriormente
   pelo PHP + MySQL.

   Este trecho apenas verifica se os campos básicos
   foram preenchidos antes de enviar o formulário.
*/


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            const email =
                document.getElementById("email");

            const senha =
                document.getElementById("senha");


            ocultarMensagemLogin();


            /* ---------------------------------------------
               Verifica e-mail
            ---------------------------------------------- */

            if (
                !email ||
                !email.value.trim()
            ) {

                event.preventDefault();

                mostrarMensagemLogin(
                    "Digite seu e-mail para continuar."
                );

                if (email) {
                    email.focus();
                }

                return;

            }


            /* ---------------------------------------------
               Verifica formato do e-mail
            ---------------------------------------------- */

            if (
                !email.checkValidity()
            ) {

                event.preventDefault();

                mostrarMensagemLogin(
                    "Digite um endereço de e-mail válido."
                );

                email.focus();

                return;

            }


            /* ---------------------------------------------
               Verifica senha
            ---------------------------------------------- */

            if (
                !senha ||
                !senha.value
            ) {

                event.preventDefault();

                mostrarMensagemLogin(
                    "Digite sua senha para continuar."
                );

                if (senha) {
                    senha.focus();
                }

                return;

            }


            /* ---------------------------------------------
               Tudo preenchido.

               Deixamos o formulário seguir normalmente
               para o login.php.
            ---------------------------------------------- */

            ativarCarregamentoLogin();

        }
    );

}


/* =========================================================
   16. FORMULÁRIO DE RECUPERAÇÃO
========================================================= */

if (recoveryForm) {

    recoveryForm.addEventListener(
        "submit",
        function (event) {

            const emailRecuperar =
                document.getElementById(
                    "emailRecuperar"
                );


            if (
                !emailRecuperar ||
                !emailRecuperar.value.trim()
            ) {

                event.preventDefault();

                if (emailRecuperar) {

                    emailRecuperar.focus();

                }

                return;

            }


            if (
                !emailRecuperar.checkValidity()
            ) {

                event.preventDefault();

                emailRecuperar.focus();

                return;

            }

            /*
               Não impedimos o envio.

               Posteriormente o formulário será processado
               pelo recuperar_senha.php.
            */

        }
    );

}


/* =========================================================
   17. EFEITO DE FOCO NOS CAMPOS
========================================================= */

const inputs =
    document.querySelectorAll(
        ".input-wrapper input"
    );


inputs.forEach(function (input) {

    input.addEventListener(
        "focus",
        function () {

            const wrapper =
                input.closest(".input-wrapper");


            if (wrapper) {

                wrapper.classList.add(
                    "input-focused"
                );

            }

        }
    );


    input.addEventListener(
        "blur",
        function () {

            const wrapper =
                input.closest(".input-wrapper");


            if (wrapper) {

                wrapper.classList.remove(
                    "input-focused"
                );

            }

        }
    );

});


/* =========================================================
   18. IMPEDIR DUPLO CLIQUE NO LOGIN
========================================================= */

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function () {

            if (loginButton) {

                loginButton.disabled = true;

            }

        }
    );

}


/* =========================================================
   19. RECUPERAÇÃO — DEVOLVE FOCO AO LOGIN
========================================================= */

if (closeRecovery) {

    closeRecovery.addEventListener(
        "click",
        function () {

            if (openRecovery) {

                setTimeout(
                    function () {

                        openRecovery.focus();

                    },
                    100
                );

            }

        }
    );

}


if (cancelRecovery) {

    cancelRecovery.addEventListener(
        "click",
        function () {

            if (openRecovery) {

                setTimeout(
                    function () {

                        openRecovery.focus();

                    },
                    100
                );

            }

        }
    );

}


/* =========================================================
   20. PROTEÇÃO CONTRA ERRO DE CARREGAMENTO
========================================================= */

/*
   Este arquivo foi desenvolvido para funcionar mesmo
   enquanto o PHP e o MySQL ainda não existem.

   Portanto, nenhum código aqui tenta acessar banco
   de dados ou arquivos PHP diretamente via JavaScript.
*/


console.log(
    "Neuro Clínica Desenvolver — Login carregado."
);
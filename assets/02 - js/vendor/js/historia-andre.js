/* =========================================================
   HISTÓRIA PROFISSIONAL — ANDRÉ LUIZ BARBOSA DE ALMEIDA
   PARTE 03 — EXPERIÊNCIA CINEMATOGRÁFICA

   ESCOPO:
   Somente #historia-andre

   Não altera:
   - Header
   - Menu
   - Footer
   - Outras seções
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       01 — LOCALIZAÇÃO DA SEÇÃO
    ====================================================== */

    const historia = document.querySelector("#historia-andre");

    if (!historia) return;


    /* =====================================================
       02 — PREPARAÇÃO DOS ELEMENTOS
    ====================================================== */

    const heading = historia.querySelector(".ha-heading");
    const card = historia.querySelector(".ha-profile-card");
    const photo = historia.querySelector(".ha-photo-frame");
    const profileText = historia.querySelector(".ha-profile-text");
    const manifesto = historia.querySelector(".ha-manifesto");
    const next = historia.querySelector(".ha-next");


    /* =====================================================
       03 — ACESSIBILIDADE
       
       Usuários que preferem menos movimento não recebem
       animações desnecessárias.
    ====================================================== */

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    if (reducedMotion) {

        historia.classList.add("ha-reduced-motion");

        return;

    }


    /* =====================================================
       04 — OBSERVADOR DE ENTRADA NA TELA
    ====================================================== */

    const observerOptions = {

        root: null,

        threshold: 0.15,

        rootMargin: "0px 0px -80px 0px"

    };


    const historiaObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;


                historia.classList.add("ha-visible");


                /* =========================================
                   Entrada dos elementos
                ========================================== */

                if (heading) {

                    setTimeout(() => {

                        heading.classList.add("ha-reveal");

                    }, 100);

                }


                if (card) {

                    setTimeout(() => {

                        card.classList.add("ha-reveal");

                    }, 250);

                }


                if (photo) {

                    setTimeout(() => {

                        photo.classList.add("ha-reveal");

                    }, 450);

                }


                if (profileText) {

                    setTimeout(() => {

                        profileText.classList.add("ha-reveal");

                    }, 600);

                }


                if (manifesto) {

                    setTimeout(() => {

                        manifesto.classList.add("ha-reveal");

                    }, 800);

                }


                if (next) {

                    setTimeout(() => {

                        next.classList.add("ha-reveal");

                    }, 1000);

                }


                /* =========================================
                   Não precisamos observar novamente.
                ========================================== */

                observer.unobserve(entry.target);

            });

        },

        observerOptions

    );


    historiaObserver.observe(historia);


    /* =====================================================
       05 — MOVIMENTO SUTIL DO CARD
       
       O card acompanha muito levemente o movimento do mouse.
       
       Importante:
       Não é um efeito 3D exagerado.
    ====================================================== */

    if (card && window.matchMedia("(hover: hover)").matches) {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -1.2;

            const rotateY =
                ((x - centerX) / centerX) * 1.2;


            card.style.setProperty(
                "--ha-rotate-x",
                `${rotateX}deg`
            );

            card.style.setProperty(
                "--ha-rotate-y",
                `${rotateY}deg`
            );

        });


        card.addEventListener("mouseleave", () => {

            card.style.setProperty(
                "--ha-rotate-x",
                "0deg"
            );

            card.style.setProperty(
                "--ha-rotate-y",
                "0deg"
            );

        });

    }


    /* =====================================================
       06 — EFEITO PARALLAX NAS LUZES
       
       Movimento extremamente pequeno para criar profundidade.
    ====================================================== */

    const light01 =
        historia.querySelector(".ha-light-01");

    const light02 =
        historia.querySelector(".ha-light-02");

    const light03 =
        historia.querySelector(".ha-light-03");


    let ticking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (ticking) return;


            window.requestAnimationFrame(() => {

                const rect =
                    historia.getBoundingClientRect();


                const windowHeight =
                    window.innerHeight;


                if (
                    rect.bottom > 0 &&
                    rect.top < windowHeight
                ) {

                    const progress =
                        (windowHeight - rect.top) /
                        (windowHeight + rect.height);


                    const movement =
                        (progress - 0.5) * 35;


                    if (light01) {

                        light01.style.transform =
                            `translate3d(
                                ${movement * 0.35}px,
                                ${movement * 0.5}px,
                                0
                            )`;

                    }


                    if (light02) {

                        light02.style.transform =
                            `translate3d(
                                ${movement * -0.25}px,
                                ${movement * 0.4}px,
                                0
                            )`;

                    }


                    if (light03) {

                        light03.style.transform =
                            `translate3d(
                                ${movement * 0.2}px,
                                ${movement * -0.3}px,
                                0
                            )`;

                    }

                }


                ticking = false;

            });


            ticking = true;

        },

        {
            passive: true
        }

    );


});
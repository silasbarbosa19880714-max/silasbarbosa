const slides = document.querySelectorAll(".slide");

const anterior = document.querySelector(".anterior");

const proximo = document.querySelector(".proximo");

let indice = 0;

function mostrarSlide(numero){

    slides.forEach(slide =>{

        slide.classList.remove("ativo");

    });

    slides[numero].classList.add("ativo");

}

proximo.onclick = ()=>{

    indice++;

    if(indice >= slides.length){

        indice = 0;

    }

    mostrarSlide(indice);

}

anterior.onclick = ()=>{

    indice--;

    if(indice < 0){

        indice = slides.length -1;

    }

    mostrarSlide(indice);

}

setInterval(()=>{

    indice++;

    if(indice >= slides.length){

        indice = 0;

    }

    mostrarSlide(indice);

},5000);

mostrarSlide(indice);

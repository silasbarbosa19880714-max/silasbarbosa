/*==========================================================
        MAPA PREMIUM - NEURO CLÍNICA DESENVOLVER
==========================================================*/

// Coordenadas da clínica
const clinica = [-22.116153, -43.2029527];

// Cria o mapa
const mapa = L.map('mapaClinica', {
    zoomControl: false,
    scrollWheelZoom: true,
    attributionControl: false
}).setView(clinica, 17);

// Camada do mapa
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 20
    }
).addTo(mapa);

// Controle de zoom
L.control.zoom({
    position: 'bottomright'
}).addTo(mapa);

/*==========================================================
                ÍCONE PREMIUM
==========================================================*/

const iconeClinica = L.divIcon({

    className: '',

    html: `
        <div class="marcador-premium">

            <div class="pulso"></div>

            <div class="icone">
                <i class="fa-solid fa-heart-pulse"></i>
            </div>

        </div>
    `,

    iconSize: [80, 80],

    iconAnchor: [40, 70]

});

/*==========================================================
                MARCADOR
==========================================================*/

const marcador = L.marker(clinica, {

    icon: iconeClinica

})
.addTo(mapa)
.bindPopup(`
<div style="text-align:center;padding:10px;min-width:220px;">

    <h3 style="margin-bottom:12px;color:#0c7dff;">
        Neuro Clínica Desenvolver
    </h3>

    <p style="margin-bottom:15px;">
        Rua Barão de Entre Rios, 251<br>
        Três Rios • RJ
    </p>

    <a
        href="https://wa.me/5524992987844"
        target="_blank"
        style="
            display:inline-block;
            padding:10px 18px;
            background:#25D366;
            color:#fff;
            text-decoration:none;
            border-radius:30px;
            font-weight:bold;
        ">

        WhatsApp

    </a>

</div>
`);

/*==========================================================
                HALO DA CLÍNICA
==========================================================*/

L.circle(clinica, {

    radius: 60,

    color: '#1e88ff',

    weight: 2,

    fillColor: '#1e88ff',

    fillOpacity: 0.15

}).addTo(mapa);

/*==========================================================
                ABRIR POPUP
==========================================================*/

setTimeout(() => {

    marcador.openPopup();

}, 900);

/*==========================================================
            BOTÕES PREMIUM
==========================================================*/

// Centralizar na clínica

document
.getElementById("btnCentralizar")
.addEventListener("click",()=>{

    mapa.flyTo(clinica,18,{
        animate:true,
        duration:1.8
    });

});

// Minha localização

document
.getElementById("btnMinhaLocalizacao")
.addEventListener("click",()=>{

    if(!navigator.geolocation){

        alert("Seu navegador não suporta Geolocalização.");

        return;

    }

    navigator.geolocation.getCurrentPosition(pos=>{

        mapa.flyTo(
            [
                pos.coords.latitude,
                pos.coords.longitude
            ],
            17,
            {
                animate:true,
                duration:2
            }
        );

    });

});

// Tela cheia

document
.getElementById("btnTelaCheia")
.addEventListener("click",()=>{

    const mapaContainer =
    document.querySelector(".mapa-premium");

    if(!document.fullscreenElement){

        mapaContainer.requestFullscreen();

    }else{

        document.exitFullscreen();

    }

});

/*==========================================================
        ROTA AUTOMÁTICA PARA A CLÍNICA
==========================================================*/

let controleRota = null;

function criarRota(origem){

    if(controleRota){

        mapa.removeControl(controleRota);

    }

    controleRota = L.Routing.control({

        waypoints:[

            L.latLng(origem[0], origem[1]),

            L.latLng(clinica[0], clinica[1])

        ],

        routeWhileDragging:false,

        addWaypoints:false,

        draggableWaypoints:false,

        fitSelectedRoutes:true,

        show:false,

        lineOptions:{

            styles:[{

                color:"#0d8bff",

                weight:7,

                opacity:.85

            }]

        }

    }).addTo(mapa);

}
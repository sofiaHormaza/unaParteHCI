var contador = 0;
let nivel = 0;
let aciertos = 0;
let emocionActual;
let nivelActual;
let emocionCorrecta;

const niveles = [
    {
        src: './data/Neutral1.JPG',
    },
    {
        src: './data/Neutral2.JPG',
    },
    {
        src: './data/Neutral3.JPG',
    },
    {
        src: './data/Neutral4.JPG',
    },
];

const subniveles = [
    //EMOCIONES NIVEL 1
    {
        emocion: 'felicidad',
        src: './data/Felicidad1.JPG',
    },
    {
        emocion: 'miedo',
        src: './data/Miedo1.JPG',
    },
    {
        emocion: 'sorpresa',
        src: './data/Sorpresa1.JPG',
    },
    {
        emocion: 'asco',
        src: './data/Asco1.JPG',
    },
    {
        emocion: 'ira',
        src: './data/Enojo1.JPG',
    },
    {
        emocion: 'desprecio',
        src: './data/Desprecio1.JPG',
    },
    {
        emocion: 'tristeza',
        src: './data/Tristeza1.JPG',
    },
    //EMOCIONES NIVEL 2
    {
        emocion: 'sorpresa',
        src: './data/Sorpresa2.JPG',
    },
    {
        emocion: 'asco',
        src: './data/Asco2.JPG',
    },
    {
        emocion: 'felicidad',
        src: './data/Felicidad2.JPG',
    },
    {
        emocion: 'desprecio',
        src: './data/Desprecio2.JPG',
    },
    {
        emocion: 'miedo',
        src: './data/Miedo2.JPG',
    },
    {
        emocion: 'tristeza',
        src: './data/Tristeza2.JPG',
    },
    {
        emocion: 'ira',
        src: './data/Enojo2.JPG',
    },
    //EMOCIONES NIVEL 3
    {
        emocion: 'asco',
        src: './data/Asco3.JPG',
    },
    {
        emocion: 'desprecio',
        src: './data/Desprecio3.JPG',
    },
    {
        emocion: 'sorpresa',
        src: './data/Sorpresa3.JPG',
    },
    {
        emocion: 'felicidad',
        src: './data/Felicidad3.JPG',
    },
    {
        emocion: 'miedo',
        src: './data/Miedo3.JPG',
    },
    {
        emocion: 'ira',
        src: './data/Enojo3.JPG',
    },
    {
        emocion: 'tristeza',
        src: './data/Tristeza3.JPG',
    },
    //EMOCIONES NIVEL 4
    {
        emocion: 'tristeza',
        src: './data/Tristeza4.JPG',
    },
    {
        emocion: 'felicidad',
        src: './data/Felicidad4.JPG',
    },
    {
        emocion: 'desprecio',
        src: './data/Desprecio4.JPG',
    },
    {
        emocion: 'ira',
        src: './data/Enojo4.JPG',
    },
    {
        emocion: 'asco',
        src: './data/Asco4.JPG',
    },
    {
        emocion: 'sorpresa',
        src: './data/Sorpresa4.JPG',
    },
    {
        emocion: 'miedo',
        src: './data/Miedo4.JPG',
    },
];

const img = document.querySelector('.juego__imagen');
emocionActual = subniveles[contador];
nivelActual = niveles[nivel];

img.setAttribute('src', emocionActual.src);

setTimeout(function () {
    img.setAttribute('src', nivelActual.src);
}, 800);


//BOTONES
const btns = document.querySelectorAll('.juego__btn');

function btnHandle(event) {
    const src = event.target.getAttribute('alt');

    ////////
    contador++;
    if (contador % 7 == 0) {
        nivel++;
        console.log('nivel' + nivel);
    }

    ///////
    emocionActual = subniveles[contador];
    nivelActual = niveles[nivel];

    if (contador < 28) {
        img.setAttribute('src', emocionActual.src);

        setTimeout(function () {
            img.setAttribute('src', nivelActual.src);
        }, 800)
    }

    ///////
    emocionCorrecta = subniveles[contador - 1];
    if (contador < 28) {
        if ('' + src === '' + emocionCorrecta.emocion) {
            aciertos++;
        }
    }
}

btns.forEach(function (elem, index) {
    elem.addEventListener('click', btnHandle);
});


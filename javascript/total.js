async function obtenerNoticias() {
    const [response1, response2, response3] = await Promise.all([
        fetch('../src/Posts/cSharp/preview/noticias.json'),
        fetch('../src/Posts/js/preview/noticiasJs.json'),
        fetch('../src/Posts/python/preview/noticiasPy.json')
    ]);

    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();

    const allData = [...data1, ...data2, ...data3];

    allData.sort((a, b) => {
        const fechaA = a.fecha.split('-').reverse().join('-');
        const fechaB = b.fecha.split('-').reverse().join('-');
        return new Date(fechaB) - new Date(fechaA);
    });

    return allData;
}

async function cargarNoticias() {
    const noticiaContainer = document.getElementById("noticiasContainer");

    try {
        const noticias = await obtenerNoticias();

        noticias.forEach(noticia => {
            const novedadElement = crearNovedad(noticia);
            noticiaContainer.appendChild(novedadElement);
        });
    } catch (error) {
        console.error('Error al cargar las noticias:', error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Error al cargar las noticias. Por favor, inténtalo de nuevo más tarde.';
        noticiaContainer.appendChild(errorMessage);
    }
}

function crearNovedad({ titulo, descripcion, autor, fecha, url, imagen }) {
    const novedadElement = document.createElement('div');
    novedadElement.classList.add('card');

    const divContent = document.createElement('div');
    divContent.classList.add('content');

    const leftSide = document.createElement('div');
    leftSide.classList.add('leftSide');

    const tituloElement = document.createElement('h2');
    tituloElement.classList.add('title_info', 'titulo');
    tituloElement.textContent = titulo;

    const descripcionElement = document.createElement('p');
    descripcionElement.classList.add('desc_info');
    descripcionElement.textContent = ` ${descripcion}`;

    const autorElement = document.createElement('p');
    autorElement.classList.add('author_info');
    autorElement.textContent = ` ${autor}`;

    const fechaElement = document.createElement('p');
    fechaElement.classList.add('date_info');
    fechaElement.textContent = `${fecha}`;

    // query  móviles
    if (window.matchMedia('(min-width: 320px) and (max-width: 527px)').matches) {
        const novedadLink = document.createElement('a');
        novedadLink.href = url;
        novedadLink.appendChild(tituloElement);

        const imagenLink = document.createElement('a');
        imagenLink.href = url;
        const imagenElement = document.createElement('img');
        imagenElement.src = imagen;
        imagenElement.alt = 'Imagen de la noticia';
        imagenLink.appendChild(imagenElement);

        leftSide.appendChild(novedadLink);
        leftSide.appendChild(descripcionElement);
        leftSide.appendChild(autorElement);
        leftSide.appendChild(fechaElement);

        const rightSide = document.createElement('div');
        rightSide.classList.add('rightSide');
        rightSide.appendChild(imagenLink);

        divContent.appendChild(leftSide);
        divContent.appendChild(rightSide);
    } else {
        const leerMas = document.createElement('a');
        leerMas.href = url;
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.textContent = 'Leer más';
        leerMas.appendChild(btn);

        leftSide.appendChild(tituloElement);
        leftSide.appendChild(descripcionElement);
        leftSide.appendChild(autorElement);
        leftSide.appendChild(fechaElement);
        leftSide.appendChild(leerMas);

        const rightSide = document.createElement('div');
        rightSide.classList.add('rightSide');

        const imagenElement = document.createElement('img');
        imagenElement.src = imagen;
        imagenElement.alt = 'Imagen de la noticia';

        rightSide.appendChild(imagenElement);

        divContent.appendChild(leftSide);
        divContent.appendChild(rightSide);
    }

    novedadElement.appendChild(divContent);
    return novedadElement;
}

document.addEventListener("DOMContentLoaded", function () {
    cargarNoticias(); scrollToTop()
});

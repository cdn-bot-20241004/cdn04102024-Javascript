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

async function obtenerNoticias() {
    const response = await fetch('/json/noticias.json');
    const data = await response.json();

    data.sort((a, b) => {
        const fechaA = a.fecha.split('-').reverse().join('-');
        const fechaB = b.fecha.split('-').reverse().join('-');
        return new Date(fechaB) - new Date(fechaA);
    });
    return data;
}

function crearNovedad({ titulo, descripcion, autor, fecha, url, imagen }) {
    const divNoticia = document.createElement('div');
    divNoticia.classList.add('card');

    const divContent = document.createElement('div');
    divContent.classList.add('content');

    const leftSide = document.createElement('div');
    leftSide.classList.add('leftSide');

    const tituloElement = document.createElement('h2');
    tituloElement.classList.add('title_info', 'titulo');
    tituloElement.textContent = titulo;

    const descripcionElement = document.createElement('p');
    descripcionElement.classList.add('desc_info');
    descripcionElement.textContent = `${descripcion}`;

    const autorElement = document.createElement('p');
    autorElement.classList.add('author_info');
    autorElement.textContent = `Autor: ${autor}`;

    const fechaElement = document.createElement('p');
    fechaElement.classList.add('date_info');
    fechaElement.textContent = `${fecha}`;

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

    divNoticia.appendChild(divContent);
    return divNoticia;
}

cargarNoticias();

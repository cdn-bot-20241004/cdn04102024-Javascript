// URL del JSON
const jsonUrl = '/src/Posts/cSharp/preview/noticias.json';

// Obtener los elementos HTML
const titleElement = document.querySelector('.new_title');
const authorElement = document.querySelector('.new_author');
const dateElement = document.querySelector('.new_date');

// Obtener el JSON y actualizar los elementos HTML
fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        // Encontrar la noticia correspondiente a la URL actual
        const currentNews = data.find(news => news.url === window.location.pathname);

        // Actualizar los elementos HTML con la información de la noticia
        titleElement.textContent = currentNews.titulo;
        authorElement.textContent = currentNews.autor;
        dateElement.textContent = currentNews.fecha;
    })
    .catch(error => {
        console.error('Error al obtener el JSON:', error);
    });
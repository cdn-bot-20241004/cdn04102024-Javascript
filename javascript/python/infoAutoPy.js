const jsonUrl = '/json/noticiasPy.json';

const titleElement = document.querySelector('.new_title');
const authorElement = document.querySelector('.new_author');
const dateElement = document.querySelector('.new_date');

fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        const currentNews = data.find(news => news.url === window.location.pathname);

        titleElement.textContent = currentNews.titulo;
        authorElement.textContent = currentNews.autor;
        dateElement.textContent = currentNews.fecha;
    })
    .catch(error => {
        console.error('Error al obtener el JSON:', error);
    });

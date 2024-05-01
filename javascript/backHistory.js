const backLinks = document.querySelectorAll('.back-link');

backLinks.forEach(backLink => {
    backLink.addEventListener('click', (event) => {
        event.preventDefault();
        history.back();
    })
});
const codesHTML = document.querySelectorAll('.new_article code');

codesHTML.forEach(codeHTML => {
    codeHTML.addEventListener('click', copyCodeToClipboard);
    codeHTML.addEventListener('click', highlightCode);
});

async function copyCodeToClipboard(event) {
    try {
        await navigator.clipboard.writeText(event.target.textContent);
    } catch (err) {
        console.error('Error al copiar el código: ', err);
    }
}

function highlightCode(event) {
    const codeElement = event.target;
    codeElement.style.border = '2px solid #ff9900';

    setTimeout(() => {
        codeElement.style.border = '2px solid #cccccc';
    }, 1500);
}
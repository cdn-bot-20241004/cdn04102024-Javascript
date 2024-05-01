var url = window.location.pathname;
var links = document.querySelectorAll(".navMobile a");
links.forEach(function (link) {
    if (link.getAttribute("href") === url) {
        link.classList.add("activeMobile");
    }
});
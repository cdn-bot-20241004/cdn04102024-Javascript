let button = document.querySelector(".button");

button.addEventListener("click", function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "instant",
    });
});

window.onscroll = () => {
    if (button) {
        if (
            document.body.scrollTop > 150 ||
            document.documentElement.scrollTop > 150
        ) {
            button.style.display = "flex";
        } else {
            button.style.display = "none";
        }
    }
};
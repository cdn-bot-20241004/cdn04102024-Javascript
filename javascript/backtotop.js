document.addEventListener("DOMContentLoaded", function () {
    if (window.matchMedia("(min-width: 528px), (max-width: 319px)").matches) {
        let button = document.querySelector(".buttonTop");

        window.addEventListener('scroll', () => {
            if (button) {
                if (
                    document.documentElement.scrollTop > 250
                ) {
                    button.style.display = "flex";
                } else {
                    button.style.display = "none";
                }
            }
        });

        button.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "instant",
            });
        });
    }
});

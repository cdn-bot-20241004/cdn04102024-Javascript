document.addEventListener("DOMContentLoaded", function () {

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

});

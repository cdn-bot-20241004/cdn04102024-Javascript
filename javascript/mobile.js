let mobile = document.querySelector(".navMobile");
let button = document.querySelector(".checkbox");
let open = false;

button.addEventListener("click", function () {
    open = !open;
    if (open) {
        mobile.classList.add("show");
    } else {
        mobile.classList.remove("show");
    }
}); 
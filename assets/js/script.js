// LOADING SCREEN
window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    // TUNGGU DULU
    setTimeout(() => {

        loader.classList.add("loader-hidden");

        // HILANG TOTAL
        setTimeout(() => {

            loader.style.display = "none";

        }, 700);

    }, 1500);

});


// NAVBAR EFFECT
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scroll");

    }

    else {

        navbar.classList.remove("navbar-scroll");

    }

});
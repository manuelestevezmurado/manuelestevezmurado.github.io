function toggleNavigation(x) {
    const navigation = document.getElementById("navigation");

    toggleScroll();

    x.classList.toggle("change");

    if (navigation.style.display === "none") {
        navigation.style.display = "flex";
        setTimeout(() => {
            navigation.style.opacity = "1";
        }, 0);
    } else {
        navigation.style.opacity = "0";
        setTimeout(() => {
            navigation.style.display = "none";
        }, 400);
    }
}

function toggleScroll() {
    var body = document.body;
    if (body.style.overflow === "hidden") {
        body.style.overflow = "auto"; // Desbloquear scroll
    } else {
        body.style.overflow = "hidden"; // Bloquear scroll
    }
}

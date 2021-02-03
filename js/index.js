function showNav() {
    const navOpen = document.getElementsByClassName("nav-bar")[0];
    if(navOpen.style.display === "flex") {
        navOpen.style.display = "none";
    } else {
        navOpen.style.display = "flex";
    }
}

addEventListener("resize", () => {
    const navOpen = document.getElementsByClassName("nav-bar")[0];
    if(window.innerWidth > 1024) {
        navOpen.style.display = "flex";
    } else {
        navOpen.style.display = "none";

    }
})
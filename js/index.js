function showNav() {
    const navOpen = document.querySelector('.burger-nav-bar');
    if (!navOpen.style.animationName || navOpen.style.animationName === "nav-bar-close") {
        navOpen.style.animationName = "nav-bar-open";
    } else {
        navOpen.style.animationName = "nav-bar-close";
    }
}
window.addEventListener("click", (e) => {
    const navOpen = document.querySelector('.burger-nav-bar');
    if(!e.composedPath().includes(document.querySelector(".burger")) &&
        !e.composedPath().includes(document.querySelector(".burger-nav-bar")) &&
        navOpen.style.animationName === "nav-bar-open") {
        navOpen.style.animationName = "nav-bar-close";
    }
})

window.addEventListener("resize", () => {
        const navOpen = document.getElementsByClassName("burger-nav-bar")[0];
        if(window.innerWidth > 1024) {
            navOpen.style.animationName = "";
        }
    }
)


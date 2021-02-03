function showNav() {
    const navOpen = document.getElementsByClassName("burger-nav-bar")[0];
    if (!navOpen.style.animationName || navOpen.style.animationName === "nav-bar-close") {
        navOpen.style.animationName = "nav-bar-open";
    } else {
        navOpen.style.animationName = "nav-bar-close";
    }
}

addEventListener("resize", () => {
        const navOpen = document.getElementsByClassName("burger-nav-bar")[0];
        if(window.innerWidth > 1024) {
            navOpen.style.animationName = "";
        }
    }
)
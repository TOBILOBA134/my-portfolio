const mobileNavBar = document.getElementById("mobile-nav-content")
const mobileNavIcon = document.getElementById("mobile-nav-icon")
let isMobileNavIconShowing = false

mobileNavIcon.addEventListener("click", ()=>{
    isMobileNavIconShowing = !isMobileNavIconShowing
    mobileNavBar.style.display = isMobileNavIconShowing ? "block" : "none"
})
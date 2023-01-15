document.querySelector("#show-nav").addEventListener("click", () => {
 document.querySelector(".nav-menu").style.display = "block"
 document.querySelector("#hide-nav").style.display = "block"
 document.querySelector("#show-nav").style.display = "none"
})

document.querySelector("#hide-nav").addEventListener("click", () => {
 document.querySelector(".nav-menu").style.display = "none"
 document.querySelector("#hide-nav").style.display = "none"
 document.querySelector("#show-nav").style.display = "block"
})

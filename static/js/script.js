let hamburger = document.querySelector(".hamburger")
let closebtn = document.querySelector(".close")
let menu = document.querySelector(".ul")

hamburger.addEventListener("click", ()=>{
    menu.style.display = "flex";
    hamburger.style.display = "none";
    closebtn.style.display = "block";
})

closebtn.addEventListener("click", ()=>{
    menu.style.display = "none"
    hamburger.style.display = "block"
    closebtn.style.display = "none"
})
let openClose = document.querySelector(".openClose");
const srcOpen = "images/icon-hamburger.svg";
const srcClose = "images/icon-close.svg";
let modal = document.querySelector(".nav__modal");
const body = document.querySelector('body');
console.log(modal);

openClose.addEventListener("click", function(){
    if (openClose.src.includes(srcOpen)) 
    {
      console.log("tears")
      openClose.setAttribute('src', srcClose)
      modal.style.display = "flex";
      body.style.backgroundColor = ("hsl(227, 12%, 61%)")
    } else 
    {
        openClose.setAttribute('src', srcOpen)
        modal.style.display = "none";
        body.style.backgroundColor = "transparent";
    }
})
let openClose = document.querySelector(".openClose");
const srcOpen = "images/icon-hamburger.svg";
const srcClose = "images/icon-close.svg";
let modal = document.querySelector(".nav__modal");
console.log(modal);

openClose.addEventListener("click", function(){
    if (openClose.src.includes(srcOpen)) 
    {
      console.log("tears")
      openClose.setAttribute('src', srcClose)
      modal.style.display = "flex";
    } else 
    {
        openClose.setAttribute('src', srcOpen)
        modal.style.display = "none";
    }
})
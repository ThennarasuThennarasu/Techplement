const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 0);

});

let menu = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('open');

};



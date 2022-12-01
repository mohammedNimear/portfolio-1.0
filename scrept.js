const headr = document.querySelector("header");

window.addEventListener("scroll",function(){
    headr.classList.toggle("stiky", window.scrollY > 0)
})

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
})

window.addEventListener('scroll',()=>{
    menu.classList.remove('active');
    navbar.classList.remove('active');
})


let navbar = document.querySelector('.row .main-nav');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
//    menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
    // menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
 };
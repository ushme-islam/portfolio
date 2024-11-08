//    toggle icon
   
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let about = document.querySelector('.about');
let service = document.querySelector('.service');
let contact = document.querySelector('.contact');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = window.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = set.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('avtive');
                document.querySelector('header nav a[href"=' + id +']').classList.add('active');

            });
        
        };
     });
     let header = document.querySelector('header');
     header.classList.toggle('sticky',window.scrollY > 100);

    //  remove toggle icon and navbar

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
ScrollReveal({
    distance: '80px',
    duration:2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// type js
// const typed = new Typed('.multiple-text',{
//     strings: ['Frontend Developer','Web Developer','Student'],
//     typeSpeed: 70,
//     backSpeed: 70,
//     backDelay: 1000,
//     loop: true,
// });
  

/*======= Menu icon navbar ======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};



/*======= Scroll sections active link ======*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*======= Sticky navbar ======*/

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

/*======= remove menu icon navbar when click navbar link (scroll) ======*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};



/*======= Swiper ======*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*======= dark light mode ======*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/*======= Scroll reveal ======*/
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img img, .services-container, .testimonial-wrapper, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
 ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


 /*======= Download CV ======*/
function descargarDocumento() {
    // URL del documento de Google Drive
    var documentoURL = "https://drive.google.com/uc?export=download&id=1XJMIC5SXv4j9R3R6qYC0ECPD8I7e34fs";

    // Abrir enlace en otra pestaña
    window.open(documentoURL, "_blank");
};
/*==== Alerta ===*/
function showTemporaryMessage(message, duration) {
    const messageElement = document.getElementById("alertMessage");

    // Mostrar el mensaje
    messageElement.textContent = message;
    messageElement.style.display = "block";

    // Ocultar el mensaje después de la duración especificada
    setTimeout(function() {
        messageElement.style.display = "none";
    }, duration);
}

/* ===== Send Email ====== */
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("Xxnu1dzK_2GEto5I-"); // Reemplaza "user_yourUserID" con tu User ID de EmailJS

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const data = new FormData(form);

        emailjs.send("service_086kp5s", "template_mz89gml", {
            from_name: data.get("name"),
            from_email: data.get("email"),
            message: data.get("message"),
            number: data.get("number"),
            subject: data.get("subject")
        })
        .then(function(response) {
            console.log("Correo enviado:", response);

        const nameElement = document.getElementById("name");
        const emailElement = document.getElementById("email");
        const messageElement = document.getElementById("message");
        const numberElement = document.getElementById("number");
        const subjectElement = document.getElementById("subject");
        nameElement.value = "";
        emailElement.value = "";
        messageElement.value = "";
        numberElement.value = "";
        subjectElement.value = "";
        showTemporaryMessage("Gracias por contactarte conmigo!", 5000)

        }, function(error) {
            console.error("Error al enviar el correo:", error);
            // Aquí puedes manejar el error de alguna manera
        });
    });
});






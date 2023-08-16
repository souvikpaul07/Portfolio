let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(a){
    for(tl of tablinks){
        tl.classList.remove("active-link");
    }
    for(tc of tabcontents){
        tc.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(a).classList.add("active-tab");
}

// Link to Excel Sheet --> https://docs.google.com/spreadsheets/d/1BwW_Wn-oTULIG402c9nI4sT3hGnX526Lf81KTbFWmmA/edit?usp=sharing
const scriptURL = 'https://script.google.com/macros/s/AKfycbzfRwmIHrDulHts-1VfPYmezk9iJDJZU3z9gt9PfIiINUnR6TM3cTQ0_CpbIOxoSukUUg/exec'
const form = document.forms['submit-to-google-sheet']
const msgSent = document.getElementById('msgSent');
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msgSent.innerHTML = "Message sent successfully"
        setTimeout(()=>{
            msgSent.innerHTML = ""
        }, 2000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})


// toggle icon --> hamburger icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll-section active link
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
            })
        }
    })
     // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



/*************Scroll Reveal******************/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .about-img, #container1, .contact #name', { origin: 'left' });
ScrollReveal().reveal('.home-img, .about-content, #container2, .contact #email', { origin: 'right' });
ScrollReveal().reveal('#skills .heading, .portfolio .heading, .contact .heading', { origin: 'top' });
ScrollReveal().reveal('.work-list, .contact #text', { origin: 'bottom' });

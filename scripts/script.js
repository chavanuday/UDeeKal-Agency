const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

//Scroll to Top
let mybutton = document.getElementById("myBtn");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Auto type
let typed = new Typed(".auto-type", {
  strings: ["WEBSITE SERVICES", "HOSTING SERVICES", "UI/UX DESIGNING SERVICES"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true

})

let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, unhide the navbar
    navbar.classList.remove('hide');
  } else {
    // Scrolling down, hide the navbar
    navbar.classList.add('hide');
  }

  prevScrollPos = currentScrollPos;
});


//Google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbxC_DjTR06yo93vumhrTv3BFtQBbHzF3nbEF6t5N9hoKf8OB-vQiTMQKRcZYO9f0FoW/exec'
const form = document.forms['submit-to-google-sheet']
let button = document.getElementById("send-button");
form.addEventListener('submit', e => {
  button.textContent = "Thank You !"
  button.disabled = true;
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      button.textContent = "Send"
      button.disabled = false;
    })
    .catch(error => console.error('Error!', error.message))
})
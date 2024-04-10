const hamburger = document.querySelector(".hamburger");
const hHamburger = document.querySelector(".hidden-hamburger");
const closeButton = document.querySelector(".close-button");
const mobilenav = document.querySelector(".mobilenav");
const nlinks = document.querySelectorAll('.navigation a');
let currentURL = window.location.pathname;

let stripSlashes = (str) => {
  return str.replace(/^\/+|\/+$/g, '');
}

theUrl = stripSlashes(currentURL);

function getLastPathComponent(path) {
  const parts = path.split('/');
  return parts[parts.length - 2];
}

nlinks.forEach(link => {
  let s = link.getAttribute('href');
  navLink = getLastPathComponent(s);

  if (navLink === theUrl) {
    link.parentElement.classList.add('nav__active');
  };
});

document.addEventListener('DOMContentLoaded', () => {
  let query = window.matchMedia("(max-width: 768px)");

  if(query.matches) {

    const bbutton = document.querySelector(".back-button");

    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
      if (bbutton) {
        if (document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 2000 ) {
          bbutton.style.display = 'block';
          bbutton.style.bottom = '2rem';
          bbutton.style.opacity = '1';
        } else {
          bbutton.style.display = 'none';
          bbutton.style.bottom = '-15rem';
          bbutton.style.opacity = '0';
        }
      }

      if (document.documentElement.scrollTop > 105) {
        document.querySelector(".mobileNavBar").style.display = 'flex';
        hamburger.style.display = 'none';
      } else {
        document.querySelector(".mobileNavBar").style.display = 'none';
        hamburger.style.display = 'block';
      }
    }
  }
})

hamburger.addEventListener('click', () => {
  mobilenav.classList.toggle("navopen");
})

hHamburger.addEventListener('click', () => {
  mobilenav.classList.toggle("navopen");
})

closeButton.addEventListener('click', () =>{
  mobilenav.classList.toggle("navopen");
})

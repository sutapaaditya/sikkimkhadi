const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close-button");
const mobilenav = document.querySelector(".mobilenav");
const nlinks = document.querySelectorAll('.navigation a');
let currentURL = window.location.pathname;

// functions for navigation link highlight
let stripSlashes = (str) => {
  return str.replace(/^\/+|\/+$/g, '');
}

theUrl = stripSlashes(currentURL);

function getLastPathComponent(path) {
  // Split the path by '/' delimiter and get the last part
  const parts = path.split('/');
  return parts[parts.length - 2]; // Return the second-to-last part
}

nlinks.forEach(link => {
  let s = link.getAttribute('href');
  navLink = getLastPathComponent(s);

  if (navLink === theUrl) {
    link.parentElement.classList.add('nav__active');
  };
});
// functions for navigation link highlight ends


// code for hamburger
hamburger.addEventListener('click', () => {
  mobilenav.classList.toggle("navopen");
  // below code sets the body to fixed position to 
  // disable scrolling in mobile 
  // whil navbar is open
  document.body.classList.toggle("fixedPosition"); 
})

closeButton.addEventListener('click', () =>{
  mobilenav.classList.toggle("navopen");
  document.body.classList.toggle("fixedPosition");
})
// code for hamburger ends

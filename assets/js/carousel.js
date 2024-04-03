let pics =[
  {
    "pic":"./assets/images/carousel/buddha.jpg",
  },
  {
    "pic":"./assets/images/carousel/cosmetics.jpg",
  },

  {
    "pic":"./assets/images/carousel/office.jpg",
  },
  {
    "pic":"./assets/images/carousel/turmerics.jpg",
  },
  {
    "pic":"./assets/images/carousel/products2.jpg",
  }
]

let p = document.getElementById("dp")
let idx = 0;
p.src = pics[idx]["pic"];

function main () {
  idx = idx+1;

  if(idx==pics.length) {
    idx = 0;
  }

  p.style.opacity = '0';

  setTimeout(() =>{
    p.src =pics[idx]["pic"];
    p.style.opacity ='1';
  },1000)
} 
setInterval(main, 9000)

const cursor = document.querySelector("#cursorFollow");

document.addEventListener("mousemove", (e) => {
  cursor.style.display = "inherit";
  let x = e.pageX;
  let y = e.pageY;
  // console.log(`x= ${x}  y=${y}`);
  setTimeout ( () => {
    cursor.style.top = `${y-12}px`;
    cursor.style.left = `${x-12}px`;
  } ,70)
});

const images = document.querySelectorAll('.bg');
let currentImageIndex = 3;

function fadeOutAndFadeInNextImage() {
  const currentImage = images[currentImageIndex];
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  const nextImage = images[nextImageIndex];

  currentImage.classList.add("fadeOut");
  nextImage.classList.add("fadeIn");

  setTimeout(() => {
     currentImage.style.opacity = '0';
     currentImage.classList.remove("fadeOut");
     nextImage.style.opacity = "1";
     nextImage.classList.remove("fadeIn");
  }, 1001);

  currentImageIndex = nextImageIndex; 
}

setInterval(fadeOutAndFadeInNextImage, 5000);

const greenRectangle = document.querySelector("#greenRectangle");

window.addEventListener("load", () => {
  greenRectangle.classList.add("toScreen");
  setTimeout(() => {
    greenRectangle.style.transform = "translateX(0%)";
  }, 1000)
});

function redirect() {
  window.location.href = "#AboutUs";
}

function redirect1() {
  window.location.href = "#servicii";
}

const aboutUsSection = document.querySelector('#AboutUs');
const grainImage = document.querySelector('#grain');


const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 
};


const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      grainImage.classList.add('grainAppear');
      setTimeout(()=>{
        grainImage.style.transform = "translateX(0%)";
      }, 1001);
    } else {
      grainImage.classList.remove('grainAppear');
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, options);
observer.observe(aboutUsSection);


const lineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('LineAppear');
      } else {
          entry.target.classList.remove('LineAppear');
      }
  })
});

const docLines = document.querySelectorAll(".line");

docLines.forEach(line => lineObserver.observe(line));


const number = document.querySelector("#numbers");
let ratio = -135;

setInterval(() =>{
  number.classList.add('active');
  number.style.transform = `translateY(${ratio}px)`;
  ratio-= 135;
  if (ratio < -540){
    number.classList.remove('active');
    number.style.transform = `translateY(0px)`;
    ratio = -135;
  }
} ,1500);


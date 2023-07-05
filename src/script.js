const cursor = document.querySelector("#cursorFollow");
const frame = document.querySelector("#frame");

frame.addEventListener("mouseenter", () => {
  cursor.style.visibility = "hidden";
});

frame.addEventListener("mouseleave", () => {
  cursor.style.visibility = "visible";
});

// let arr = [0];

// window.addEventListener("scroll", () => {
//   cursor.style.opacity = "0";
//   let scrollTop = window.scrollY;
//   arr.push(scrollTop);
//   secondCursor.style.display = "inherit";
//   secondCursor.style.top = `${cursor.offsetTop + arr[arr.length-1] - arr[0]}px`;
//   secondCursor.style.left = `${cursor.offsetLeft}px`;
//   // console.log(`${cursor.offsetTop + arr[arr.length-1] - arr[0]} coeficientul /  ${scrollTop} scroll`);
//   // if (arr.length == 200){
//   //   const lastElement = arr.pop();
//   //   arr.splice(0, arr.length);
//   //   arr.push(lastElement);
//   // }
  
// });


// y poate fi declarat aici și deja din alta functie se misca

window.addEventListener("mousemove", (e) => {
  cursor.style.display = "inherit";
  cursor.style.opacity = "1";

  const y = event.pageY;
  const x = event.pageX;
  const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
  const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  setTimeout ( () => {
    cursor.style.top = (y-12) - scrollTop + 'px';
    cursor.style.left = (x-12) - scrollLeft + 'px';
  } ,70)
  });


const buttons = document.querySelectorAll('button');
const allLinks = document.querySelectorAll('a');

buttons.forEach(function(button) {
  button.addEventListener('mouseover', () => {
    cursor.classList.add('activeCurs');
  });

  button.addEventListener('mouseout', () => {
    cursor.classList.remove('activeCurs');
  });
});

allLinks.forEach(function(button) {
  button.addEventListener('mouseover', () => {
    cursor.classList.add('activeCurs');
  });

  button.addEventListener('mouseout', () => {
    cursor.classList.remove('activeCurs');
  });
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
const greenH1 = document.querySelector("#greenH1");
const greenP = document.querySelector("#greenP");
const greenBtn = document.querySelector("#grnBtn");

window.addEventListener("load", () => {
  greenRectangle.classList.add("toScreen");
  setTimeout(() => {
    greenRectangle.style.transform = "translateX(0%)";
    greenH1.style.transform = "translateX(0%)";
    setTimeout(() => {
      greenP.style.transform = "translateX(0%)";
      setTimeout(() =>{
        greenBtn.style.transform = "translateX(0%)";
      }, 400)
    }, 400)
  }, 100)
  
});

function redirect() {
  window.location.href = "#AboutUs";
}

function redirect1() {
  window.location.href = "#servicii";
}

function redirect2(){
  window.location.href = "#contacte";
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
const lanuri = document.querySelectorAll(".lan");

document.addEventListener('DOMContentLoaded', function() {


lanuri[0].style.transform = "translateX(140%) scale(1.5)";
lanuri[1].style.transform = "translateX(140%) scale(1.5)";

let i = 2;
let j = 1;
let x = 0;

let ratio = -12.5;

let interval = setInterval(() =>{
  number.classList.add('active');
  number.style.transform = `translateY(${ratio}vh)`;
  ratio-= 12.5;
  setTimeout (() => {
    lanuri[i].style.transform = "scale(1.5)";
    lanuri[j].style.transform = "scale(1)";


  setTimeout(() => {
    lanuri[i].style.transform = "translateX(140%) scale(1.5)";
    setTimeout(()=>{
      lanuri[i].style.zIndex = "10";
      lanuri[j].style.zIndex = "1";
      [i, j, x] = [j, x, i];
    }, 1000);
  },2000);
  }, 700);
    if (ratio == -50){
      setTimeout (() => {
        number.classList.remove('active');
        number.style.transform = `translateY(0vh)`;
        ratio = -12.5;
      },1000);
    }
  
} ,3500);
});

const scrolling = document.querySelector("#vertical");
const coordonate = document.querySelector("#hiddenLine");
const boxSelf = document.querySelector("#boxSelf");
const deJos = document.querySelectorAll(".apareJos");
const deSus = document.querySelectorAll(".apareSus");
const progressBar = document.querySelector(".progressBar");
const totalProces = document.querySelector(".totalProces");
const car = document.querySelector(".car");

let progress = 12;
let totalPos = 8;


window.addEventListener("scroll", () => {
  const cord = coordonate.offsetTop;
  const boxWidth = boxSelf.clientWidth;
  const pentruAparitie = (cord/boxWidth) * 100;
  console.log(pentruAparitie);

  if(pentruAparitie < 67){
  if(boxWidth > 800){
  boxSelf.style.transform = `translateX(-${cord}px)`;
  progressBar.style.width = `${(progress+pentruAparitie)*1.268}%`;
  totalProces.style.left = `${totalPos+pentruAparitie}%`;
  car.style.marginLeft = `${pentruAparitie*1.3}%`;

  if (cord != 0){
    deJos[0].style.transform = "translate(0)";
  }

  if(pentruAparitie > 8){
    deSus[0].style.transform = "translate(0)";
  }

  if (pentruAparitie > 20){
    deJos[1].style.transform = "translate(0)";
  }

  if (pentruAparitie > 38){
    deJos[2].style.transform = "translate(0)";
  }

  if (pentruAparitie > 56){
    deJos[3].style.transform = "translate(0)";
  }

  if(pentruAparitie > 65){
    deJos[4].style.transform = "translate(0)";
  }
  }
  }
});

function OnlyLetters(text) {
  let regex = /^[A-Za-z]+$/;
  return regex.test(text);
}

function noLetters(text){
  let regex = /[A-Za-z]/;
  return regex.test(text);
}

function getData(){
  const inputs = document.querySelectorAll("input");
  const mesaj = document.querySelector("textarea");

  const nume = inputs[0].value;
  const prenume = inputs[1].value;
  const cointeresat = inputs[2].value;
  const telefon = inputs[3].value;
  const mesajSuplimentar = mesaj.value;
  let aux = 0;

  if (nume == "" || OnlyLetters(nume) == false){
    inputs[0].style.borderColor = "red";
    aux++;
  }

  if (prenume == "" || OnlyLetters(prenume) == false){
    inputs[1].style.borderColor = "red";
    aux++;
  }

  if (cointeresat == ""){
    inputs[2].style.borderColor = "red";
    aux++;
  }

  if (telefon == "" || noLetters(telefon) == true){
    inputs[3].style.borderColor = "red";
    aux++;
  }

  if(aux == 0){
    // Aici codul pentru tg

    mesaj.value = "";
    inputs.forEach((i) =>{
      i.style.borderColor = "#F1F1F1";
      i.value = "";
    });
    console.log(mesajSuplimentar);
  }
};

const burger = document.querySelector(".burger");
const body = document.querySelector("body");
const mobilMenu = document.querySelector(".mobileMenu");
const linksM1 = document.querySelector(".linkM1");
const linksM = document.querySelectorAll(".linkM");

linksM.forEach(link => {
  link.addEventListener("click", clickk);
});

linksM1.addEventListener("click", clickk);

function clickk(){
  burger.classList.toggle("activeMod");
  body.classList.toggle("scrollCancel");
  mobilMenu.classList.toggle("menuToScreen");
  linksM1.classList.toggle("linkToScreen1");
  linksM[0].classList.toggle("linkToScreen");
  linksM[1].classList.toggle("linkToScreen");
  linksM[2].classList.toggle("linkToScreen");
  linksM[3].classList.toggle("linkToScreen");
  linksM[4].classList.toggle("linkToScreen");
  linksM[5].classList.toggle("linkToScreen");
  linksM[6].classList.toggle("linkToScreen");
}

burger.addEventListener("click", () => {
  burger.classList.toggle("activeMod");
  body.classList.toggle("scrollCancel");
  mobilMenu.classList.toggle("menuToScreen");

  setTimeout (() => {
    linksM1.classList.toggle("linkToScreen1");
    setTimeout(() => {
      linksM[0].classList.toggle("linkToScreen");
      setTimeout(() => {
        linksM[1].classList.toggle("linkToScreen");
        setTimeout(() => {
          linksM[2].classList.toggle("linkToScreen");
          setTimeout(() => {
            linksM[3].classList.toggle("linkToScreen");
            setTimeout(() => {
              linksM[4].classList.toggle("linkToScreen");
              setTimeout(() => {
                linksM[5].classList.toggle("linkToScreen");
                setTimeout(() => {
                  linksM[6].classList.toggle("linkToScreen");
                }, 200);
              }, 200);
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    }, 200);
  },500);
})


const left = document.querySelector("#left");
const right = document.querySelector("#right");
const carousel = document.querySelector(".carousel");

let coef = 0;

left.addEventListener("click", () => {
  if(coef < 0){
    coef = coef + 25;
    carousel.style.transform = `translateX(${coef}%)`;
  }
});

right.addEventListener("click", () => {
  if(coef > -75){
    coef = coef - 25;
    carousel.style.transform = `translateX(${coef}%)`;
  }
});

const logo = document.querySelector("#logo");

logo.addEventListener("click", () => {
  location.reload();
})

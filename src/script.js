// Pentru cursor--------------------------------------------->
const cursorMini = document.querySelector("#cursorFollowMini");
const cursor = document.querySelector("#cursorFollow");
const frame = document.querySelector("#frame");

frame.addEventListener("mouseenter", () => {
  cursor.style.visibility = "hidden";
  cursorMini.style.visibility = "hidden";
});

frame.addEventListener("mouseleave", () => {
  cursor.style.visibility = "visible";
  cursorMini.style.visibility = "visible";
});

console.log("(づ￣ ³￣)づ");

window.addEventListener("mousemove", (e) => {
  cursor.style.display = "inherit";
  cursor.style.opacity = "1";
  cursorMini.style.display = "inherit";
  cursorMini.style.opacity = "1";


  const y = event.pageY;
  const x = event.pageX;
  const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
  const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  cursorMini.style.top = (y - (cursorMini.clientHeight / 2)) - scrollTop + 'px';
  cursorMini.style.left = (x - (cursorMini.clientWidth / 2)) - scrollLeft + 'px';
  setTimeout(() => {
    cursor.style.top = (y - (cursor.offsetHeight / 2)) - scrollTop + 'px';
    cursor.style.left = (x - (cursor.offsetWidth / 2)) - scrollLeft + 'px';
  }, 70);
});

const buttons = document.querySelectorAll('button');
const allLinks = document.querySelectorAll('a');
const logo = document.querySelector("#logo");

logo.addEventListener('mouseover', () => {
  cursor.classList.add('activeCurs');
  cursorMini.classList.add('activeMini');
});

logo.addEventListener('mouseout', () => {
  cursor.classList.remove('activeCurs');
  cursorMini.classList.remove('activeMini');
});

buttons.forEach(function (button) {
  button.addEventListener('mouseover', () => {
    cursor.classList.add('activeCurs');
    cursorMini.classList.add('activeMini');
  });

  button.addEventListener('mouseout', () => {
    cursor.classList.remove('activeCurs');
    cursorMini.classList.remove('activeMini');
  });
});

allLinks.forEach(function (button) {
  button.addEventListener('mouseover', () => {
    cursor.classList.add('activeCurs');
    cursorMini.classList.add('activeMini');
  });

  button.addEventListener('mouseout', () => {
    cursor.classList.remove('activeCurs');
    cursorMini.classList.remove('activeMini');
  });
});


// Pentru background & home---------------------------------->

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

greenBtn.style.transform = "translateX(-150%)";

window.addEventListener("load", () => {
  greenRectangle.classList.add("toScreen");
  setTimeout(() => {
    greenRectangle.style.transform = "translateX(0%)";
    greenH1.style.transform = "translateX(0%)";
    setTimeout(() => {
      greenP.style.transform = "translateX(0%)";
      setTimeout(() => {
        greenBtn.style.transform = "translateX(0%)";
        setTimeout(() => {
          greenBtn.style.transition = "all 0.1s ease";
        }, 100);
      }, 400)
    }, 400)
  }, 100)

});

// Pentru animatiile de pe servicii și aboutUs-------------->

function redirect() {
  window.location.href = "#AboutUs";
}

function redirect1() {
  window.location.href = "#servicii";
}

function redirect2() {
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
      setTimeout(() => {
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

document.addEventListener('DOMContentLoaded', function () {


  lanuri[0].style.transform = "translateX(140%) scale(1.5)";
  lanuri[1].style.transform = "translateX(140%) scale(1.5)";

  let i = 2;
  let j = 1;
  let x = 0;

  let ratio = -12.5;

  let interval = setInterval(() => {
    number.classList.add('active');
    number.style.transform = `translateY(${ratio}vh)`;
    ratio -= 12.5;
    setTimeout(() => {
      lanuri[i].style.transform = "scale(1.5)";
      lanuri[j].style.transform = "scale(1)";


      setTimeout(() => {
        lanuri[i].style.transform = "translateX(140%) scale(1.5)";
        setTimeout(() => {
          lanuri[i].style.zIndex = "10";
          lanuri[j].style.zIndex = "1";
          [i, j, x] = [j, x, i];
        }, 1000);
      }, 2000);
    }, 700);
    if (ratio == -50) {
      setTimeout(() => {
        number.classList.remove('active');
        number.style.transform = `translateY(0vh)`;
        ratio = -12.5;
      }, 1000);
    }

  }, 3500);
});


// Pentru vertical----------------------------------------->

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
  const cord = boxSelf.offsetTop;
  const boxWidth = boxSelf.clientWidth;
  const pentruAparitie = (cord / boxWidth) * 100;

  if (pentruAparitie < 67) {
    if (boxWidth > 800) {
      boxSelf.style.transform = `translateX(-${cord}px)`;
      progressBar.style.width = `${(progress+pentruAparitie)*1.268}%`;
      totalProces.style.left = `${totalPos+pentruAparitie}%`;
      car.style.marginLeft = `${pentruAparitie*1.3}%`;

      if (cord != 0) {
        let translateYValue1 = Math.max(0, 100 - (pentruAparitie / 0.032));
        deJos[0].style.transform = `translateY(${translateYValue1}%)`;
      }

      if (pentruAparitie > 8) {
        if (pentruAparitie >= 8 && pentruAparitie <= 18) {
          translateYValue2 = -100 + (pentruAparitie - 8) * 10;
        } else if (pentruAparitie > 18) {
          translateYValue2 = 0;
        }
        deSus[0].style.transform = `translateY(${translateYValue2}%)`;
      }

      if (pentruAparitie > 20) {
        if (pentruAparitie >= 20 && pentruAparitie <= 28) {
          translateYValue3 = 100 - ((pentruAparitie - 20) * (100 / 8));
        } else if (pentruAparitie > 28) {
          translateYValue3 = 0;
        }
        deJos[1].style.transform = `translateY(${translateYValue3}%)`;
      }

      if (pentruAparitie > 35) {
        if (pentruAparitie >= 35 && pentruAparitie <= 45) {
          translateYValue4 = 100 - ((pentruAparitie - 35) * (100 / 10));
        } else if (pentruAparitie > 45) {
          translateYValue4 = 0;
        }
        deJos[2].style.transform = `translateY(${translateYValue4}%)`;
      }

      if (pentruAparitie > 47) {
        if (pentruAparitie >= 47 && pentruAparitie <= 57) {
          translateYValue5 = 100 - ((pentruAparitie - 47) * (100 / 10));
        } else if (pentruAparitie > 57) {
          translateYValue5 = 0;
        }
        deJos[3].style.transform = `translateY(${translateYValue5}%)`;
      }

      if (pentruAparitie > 55) {
        if (pentruAparitie >= 55 && pentruAparitie <= 65) {
          translateYValue6 = 100 - ((pentruAparitie - 55) * (100 / 10));
        } else if (pentruAparitie > 65) {
          translateYValue6 = 0;
        }
        deJos[4].style.transform = `translateY(${translateYValue6}%)`;
      }
    }
  }
});

// Pentru trimiterea mesajului pe tg----------------------->

function OnlyLetters(text) {
  let regex = /^[A-Za-z]+$/;
  return regex.test(text);
}

function noLetters(text) {
  let regex = /[A-Za-z]/;
  return regex.test(text);
}

function getData() {
  const inputs = document.querySelectorAll("input");
  const mesaj = document.querySelector("textarea");

  const nume = inputs[0].value;
  const prenume = inputs[1].value;
  const cointeresat = inputs[2].value;
  const telefon = inputs[3].value;
  const mesajSuplimentar = mesaj.value;
  let aux = 0;

  if (nume == "" || OnlyLetters(nume) == false) {
    inputs[0].style.borderColor = "red";
    aux++;
  }

  if (prenume == "" || OnlyLetters(prenume) == false) {
    inputs[1].style.borderColor = "red";
    aux++;
  }

  if (cointeresat == "") {
    inputs[2].style.borderColor = "red";
    aux++;
  }

  if (telefon == "" || noLetters(telefon) == true) {
    inputs[3].style.borderColor = "red";
    aux++;
  }

  if (aux == 0) {
    trimiteMsg(`Nume:${nume} \n Prenume: ${prenume} \n Cointeresat: ${cointeresat} \n Telefon: ${telefon} \n Suplimentar: ${mesajSuplimentar}`);

    mesaj.value = "";
    inputs.forEach((i) => {
      i.style.borderColor = "#F1F1F1";
      i.value = "";
    });
  }

};

function trimiteMsg(mesaj) {
  const token = '6169152689:AAFl1MRrqXUhg4DLzXCLOkSRj2n5gKktKyE';
  const chatId = '757949512';
  const message = mesaj;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    })
    .then(response => response.json())
}

// Pentru navigare mobilă---------------------------------->

const burger = document.querySelector(".burger");
const body = document.querySelector("body");
const mobilMenu = document.querySelector(".mobileMenu");
const linksM1 = document.querySelector(".linkM1");
const linksM = document.querySelectorAll(".linkM");

linksM.forEach(link => {
  link.addEventListener("click", clickk);
});

linksM1.addEventListener("click", clickk);

function clickk() {
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

let blocker = 0;

burger.addEventListener("click", () => {
  if (blocker == 0) {
    blocker = 1;
    burger.classList.toggle("activeMod");
    body.classList.toggle("scrollCancel");
    mobilMenu.classList.toggle("menuToScreen");
    setTimeout(() => {
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
                    blocker = 0;
                  }, 150);
                }, 150);
              }, 150);
            }, 150);
          }, 150);
        }, 150);
      }, 150);
    }, 400);
  }
});

// Pentru slider și contacte------------------------------->

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const carousel = document.querySelector(".carousel");

let coef = 0;

left.addEventListener("click", () => {
  if (coef < 0) {
    coef = coef + 25;
    carousel.style.transform = `translateX(${coef}%)`;
  }
});

right.addEventListener("click", () => {
  if (coef > -75) {
    coef = coef - 25;
    carousel.style.transform = `translateX(${coef}%)`;
  }
});

logo.addEventListener("click", () => {
  location.reload();
})

let startX;

carousel.addEventListener('touchstart', function (event) {
  startX = event.touches[0].clientX;
});


carousel.addEventListener('touchend', function (event) {
  let endX = event.changedTouches[0].clientX;
  let deltaX = endX - startX;


  if (Math.abs(deltaX) > 50) {
    if (deltaX < 0) {
      if (coef > -75) {
        coef = coef - 25;
        carousel.style.transform = `translateX(${coef}%)`;
      }
    } else {
      if (coef < 0) {
        coef = coef + 25;
        carousel.style.transform = `translateX(${coef}%)`;
      }
    }
  }
});

window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      let h1El = document.querySelector('#hEl');
      let frameEl = document.querySelector('#frame');

      let h1Height = h1El.offsetHeight;

      frameEl.style.marginTop = h1Height + 'px';
    } else {
      let frameEl = document.querySelector('#frame');
      frameEl.style.marginTop = '';
    }
  });
  window.dispatchEvent(new Event('resize'));
});

// Pentru ca un pic sa urmarească-------------------->

const range = 40;

const animateImage = function (e) {
  const {
    offsetX: x,
    offsetY: y
  } = e;
  const {
    offsetWidth: width,
    offsetHeight: height
  } = this;

  const move = range;
  const xMove = (x - width / 2) / width * move;
  const yMove = (y - height / 2) / height * move;

  this.style.zIndex = "100";
  this.style.transform = `translate(${xMove}px, ${yMove}px)`;

  if (e.type === 'mouseleave') {
    this.style.transform = '';
  }
};


const animateLinks = function (e) {
  const {
    offsetX: x,
    offsetY: y
  } = e;
  const {
    offsetWidth: width,
    offsetHeight: height
  } = this;

  const move = 30;
  const xMove = (x - width / 2) / width * move;
  const yMove = (y - height / 2) / height * move;

  this.style.zIndex = "100";
  this.style.transform = `translate(${xMove}px, ${yMove}px)`;

  if (e.type === 'mouseleave') {
    this.style.transform = '';
  }
};



logo.addEventListener('mousemove', animateImage);
logo.addEventListener('mouseleave', animateImage);

for (let i = 0; i < allLinks.length - 1; i++) {
  const link = allLinks[i];
  link.addEventListener('mousemove', animateLinks);
  link.addEventListener('mouseleave', animateLinks);
}

// buttons.forEach(btn => {
//   btn.addEventListener('mousemove', animateImage);
//   btn.addEventListener('mouseleave', animateImage);
// });

document.querySelectorAll(".trgImg").forEach(images => {
  images.addEventListener('mousemove', animateImage);
  images.addEventListener('mouseleave', animateImage);
});
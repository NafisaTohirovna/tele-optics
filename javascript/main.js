const headerBars = document.querySelector('.nav-bars');
const navMenu = document.querySelector('.nav-top');
const navTeg = document.querySelector('.ochish');
const MenuLink = document.querySelector(".menu-link");
const Close = document.querySelector(".close");


headerBars.addEventListener("click" , ()=>{
    headerBars.classList.toggle("active");
    navMenu.classList.toggle("active");
})

navTeg.addEventListener("click",()=>{
    MenuLink.classList.toggle("active");
    headerBars.classList.remove("active");
    navMenu.classList.remove("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    headerBars.classList.remove("active");
    navMenu.classList.remove("active");
}));
Close.addEventListener("click" , ()=>{
  MenuLink.classList.remove("active");
   headerBars.classList.toggle("active");
    navMenu.classList.toggle("active");
})


// Header section swiper start

const mobileMediaQuery = window.matchMedia("(max-width: 550px)");
const hmsp = document.querySelector('.hmsp');

if (mobileMediaQuery) {
  hmsp.marginTop = '200px';
}


function homeSwiper() {
  new Swiper(".homeSwiper", {
    pagination: {
      el: ".home-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.home-next-btn',
      prevEl: '.home-prev-btn'
    }
  });

  new Swiper(".homeSwiper2", {
    pagination: {
      el: ".home2-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.home2-next-btn',
      prevEl: '.home2-prev-btn'
    }
  });
}

homeSwiper();

// Header section swiper end

// o'ktamni qismi boshlandi 



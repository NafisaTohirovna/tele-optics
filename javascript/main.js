const headerBars = document.querySelector('.nav-bars');
const navMenu = document.querySelector('.nav-top');

headerBars.addEventListener("click" , ()=>{
    headerBars.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    headerBars.classList.remove("active");
    navMenu.classList.remove("active");
}));

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




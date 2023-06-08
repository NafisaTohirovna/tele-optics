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

let miniItem = document.querySelectorAll(".mini_item")
let miniSliderBox = document.querySelectorAll(".mini_slider_box")
let number = miniItem.length

Array.from(Array(number).keys()).map((item) => {

  miniItem[item].addEventListener('scroll' , () => {
    if(miniItem[item].scrollLeft >= 0 && miniItem[item].scrollLeft < 200){
      miniSliderBox[item].children[0].style.background = "#9a9c9e"
    }
    else{
      miniSliderBox[item].children[0].style.background = "#d7d9dc"
    }
    if(miniItem[item].scrollLeft >= 200 && miniItem[item].scrollLeft < 420){
      miniSliderBox[item].children[1].style.background = "#9a9c9e"
    }
    else{
      miniSliderBox[item].children[1].style.background = "#d7d9dc"
    }
    if(miniItem[item].scrollLeft >= 420 && miniItem[item].scrollLeft < 700){
      miniSliderBox[item].children[2].style.background = "#9a9c9e"
    }
    else{
      miniSliderBox[item].children[2].style.background = "#d7d9dc"
    }
    if(miniItem[item].scrollLeft >= 700 ){
      miniSliderBox[item].children[3].style.background = "#9a9c9e"
    }
    else{
      miniSliderBox[item].children[3].style.background = "#d7d9dc"
    }
  })

  miniSliderBox[item].children[0].addEventListener("click" , () => {
    miniItem[item].scrollLeft = 0
  })

  miniSliderBox[item].children[1].addEventListener("click" , () => {
    miniItem[item].scrollLeft = 240
  })

  miniSliderBox[item].children[2].addEventListener("click" , () => {
    miniItem[item].scrollLeft = 478
  })

  miniSliderBox[item].children[3].addEventListener("click" , () => {
    miniItem[item].scrollLeft = 719
  })
})

let sliderIn = document.querySelectorAll(".slider_in")
let sliderBox = document.querySelectorAll(".slider_box")
let left = document.querySelectorAll('.slider .left')
let right = document.querySelectorAll('.slider .right')

let numberTwo = sliderBox.length

Array.from(Array(numberTwo).keys()).map((item) => {
  sliderIn[item].addEventListener("scroll" , () => {
    if(sliderIn[item].scrollLeft < 1180){
      sliderBox[item].children[0].style.background = '#9a9c9e';
    }
    else
    {
      sliderBox[item].children[0].style.background = '#d7d9dc';
    }
    if(sliderIn[item].scrollLeft >= 1180 && sliderIn[item].scrollLeft < 2382){
      sliderBox[item].children[1].style.background = '#9a9c9e';
    }
    else
    {
      sliderBox[item].children[1].style.background = '#d7d9dc';
    }
    if(sliderIn[item].scrollLeft >= 2382 && sliderIn[item].scrollLeft < 3563){
      sliderBox[item].children[2].style.background = '#9a9c9e';
    }
    else
    {
      sliderBox[item].children[2].style.background = '#d7d9dc';
    }
    if(sliderIn[item].scrollLeft >= 3563 && sliderIn[item].scrollLeft < 4500){
      sliderBox[item].children[3].style.background = '#9a9c9e';
    }
    else
    {
      sliderBox[item].children[3].style.background = '#d7d9dc';
    }
    if(sliderIn[item].scrollLeft >= 4500){
      sliderBox[item].children[4].style.background = '#9a9c9e';
    }
    else
    {
      sliderBox[item].children[4].style.background = '#d7d9dc';
    }

  })
  sliderBox[item].children[4].addEventListener('click' , () => {
    sliderIn[item].scrollLeft = 4530
  })
  
  sliderBox[item].children[3].addEventListener('click' , () => {
    sliderIn[item].scrollLeft = 3570
  })

  sliderBox[item].children[2].addEventListener('click' , () => {
    sliderIn[item].scrollLeft = 2400
  })

  sliderBox[item].children[1].addEventListener('click' , () => {
    sliderIn[item].scrollLeft = 1200
  })

  sliderBox[item].children[0].addEventListener('click' , () => {
    sliderIn[item].scrollLeft = 0
  })


  right[item].addEventListener('click' , () => {
    sliderIn[item].scrollBy(283 , 0)
  })

  left[item].addEventListener('click' , () => {
    sliderIn[item].scrollBy(-283 , 0)
  })
})


let flexList = document.querySelectorAll("#product ul li")

Array.from(Array(4).keys()).map((item) => {
  flexList[item].addEventListener('click' , () => {
    flexList.forEach((i) => {
      i.classList.remove('active');
    })
    flexList[item].classList.add('active')
  })
})




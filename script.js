// GSAP animations for section two (e.g., Platform A)
const tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".two",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true
  }
});

tl.to("#fanta", {
  top: "150%", // Adjusted top position to be slightly up
  left: "0%",
  ease: "power1.inOut", // Adjust easing for smoothness
  duration: 2          // Adjust duration for smooth transition
}, 'orange');

// GSAP animations for section three (e.g., Platform B)
const tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".three",
      start: "0% 85%",
      end: "20% 50%",
      scrub: true
  }
});

tl2.to("#fanta", {
  width: "20%",
  top: "355%", // Adjusted top position to be slightly up
  left: "42%",
  ease: "power1.inOut", // Adjust easing for smoothness
  duration: 2          // Adjust duration for smooth transition
}, 'ca');

// GSAP animations for section four (e.g., Platform C)
const tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".four",
      start: "0% 85%",
      end: "20% 50%",
      scrub: true,
      // markers: true,
  }
});

tl3.to("#fanta", {
  top: "190%", // Adjusted top position to be slightly up
  left: "60%",
  ease: "power1.inOut", // Adjust easing for smoothness
  duration: 2          // Adjust duration for smooth transition
}, 'orange');

// Additional GSAP animations for section four (e.g., Platform D)
const tl4 = gsap.timeline({
  scrollTrigger: {
      trigger: ".four",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      // markers: true,
  }
});

tl4.to("#fanta", {
  top: "250%", // Adjusted top position to be slightly up
  left: "58%",
  ease: "power1.inOut", // Adjust easing for smoothness
  duration: 2          // Adjust duration for smooth transition
}, 'orange');

//cart code 
let navpng = document.querySelector('#cartIcon');
let body = document.querySelector('body');
let closeBtn = document.querySelector('.cartTab .close');

navpng.addEventListener('click', () => {
  body.classList.toggle('activeTabCart');
})
closeBtn.addEventListener('click', () => {
  body.classList.toggle('activeTabCart');
})



// JavaScript code to control video playback
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector('.hover-video');
  const headphonesImage = document.getElementById('fanta');
  const hoverContainer = document.querySelector('.one');

  hoverContainer.addEventListener('mouseover', () => {
    video.play();
    headphonesImage.style.display = 'none';
  });

  hoverContainer.addEventListener('mouseout', () => {
    video.pause();
    headphonesImage.style.display = 'block';
  });
});


// Carousel functionality
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scrollPosition = 0;
const slideWidth = slides[0].getBoundingClientRect().width;

nextBtn.addEventListener('click', () => {
  scrollPosition += slideWidth;
  if (scrollPosition > carousel.scrollWidth - carousel.clientWidth) {
      scrollPosition = carousel.scrollWidth - carousel.clientWidth;
  }
  carousel.scrollTo({
      top: 0,
      left: scrollPosition,
      behavior: 'smooth'
  });
});

prevBtn.addEventListener('click', () => {
  scrollPosition -= slideWidth;
  if (scrollPosition < 0) {
      scrollPosition = 0;
  }
  carousel.scrollTo({
      top: 0,
      left: scrollPosition,
      behavior: 'smooth'
  });
});
;
// let navpng = document.querySelector('#cartIcon');
//   let body = document.querySelector('body');
//   let closeBtn = document.querySelector('.cartTab .close');

//   navpng.addEventListener('click', () => {
//     body.classList.toggle('activeTabCart');
// })
// closeBtn.addEventListener('click', () => {
//     body.classList.toggle('activeTabCart');
// })
//shopping cart
document.getElementById('openCartBtn').addEventListener('click', function() {
  document.body.classList.add('activeTabCart');
  updateTotalPrice();
});

document.getElementById('closeCart').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default link behavior
  document.body.classList.remove('activeTabCart');
});

function increaseQty(id, price) {
  var qtyElement = document.getElementById(id);
  var qty = parseInt(qtyElement.innerText);
  qtyElement.innerText = qty + 1;
  updateTotalPrice();
}

function decreaseQty(id, price) {
  var qtyElement = document.getElementById(id);
  var qty = parseInt(qtyElement.innerText);
  if (qty > 1) {
    qtyElement.innerText = qty - 1;
    updateTotalPrice();
  }
}

function updateTotalPrice() {
  var total = 0;
  document.querySelectorAll('.con').forEach(function(item) {
    var price = parseFloat(item.getAttribute('data-price'));
    var qty = parseInt(item.querySelector('span').innerText);
    total += price * qty;
  });
  document.getElementById('totalPrice').innerText = total;
}





// Auto slider
let currentSlide = 1;
const totalSlides = 9;

function showNextSlide() {
  currentSlide++;
  if (currentSlide > totalSlides) {
    currentSlide = 1;
  }
  const targetSlide = document.getElementById(`slider${currentSlide}`);
  targetSlide.click();
}

setInterval(showNextSlide, 3000);






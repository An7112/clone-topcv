function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');
    sidebar.classList.toggle('open');
    content.classList.toggle('open');
}

const main = document.getElementById("slideshow")
let slideIndex = 1;
const slideImg = [
    {
        slide: 'https://static.topcv.vn/img/3.Cover web-1100x220_1.jpg'
    },
    {
        slide: 'https://static.topcv.vn/img/rZzPil7iBC5HxtZdM7R50xQGbY26KXAp_1686899749____0031f9d5233104643df671dae9fa2bae.png'
    },
    {
        slide: 'https://static.topcv.vn/img/Banner%20Th%C3%A1ng%206%20(1)%20(1).png'
    }
]

main.innerHTML = slideImg.map((ele, index) => (
    `
          <div class="mySlides fade">
              <img src="${ele.slide}" alt="">
          </div>
     `
)).join('')

function plusS(slide) {
    plusSlides({
        n: slide
    })
}
function current(slide) {
    currentSlide({
        n: slide
    })
}

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

let autoSlideTimer;
let autoSlideTimeout;

function startAutoSlideTimer() {
    autoSlideTimeout = setTimeout(() => {
        autoSlideTimer = setInterval(() => {
            plusSlides(1);
        }, 3000);
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideTimer);
    clearTimeout(autoSlideTimeout);
    startAutoSlideTimer();
}

startAutoSlideTimer();

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", stopAutoSlide);
nextButton.addEventListener("click", stopAutoSlide);


function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');
    sidebar.classList.toggle('open');
    content.classList.toggle('open');
}

const main = document.getElementById("slideshow")
let slideIndex = 4;
const slideImg = [
    {
        slide: 'https://static.topcv.vn/company_logos/cong-ty-co-phan-do-hop-ha-long-5d672fd96c7b7.jpg',
        name: 'Công ty Cổ phần Đồ hộp Hạ Long'
    },
    {
        slide: 'https://static.topcv.vn/company_logos/cong-ty-tai-chinh-tnhh-mot-thanh-vien-home-credit-viet-nam-5b7100af1f634_rs.jpg',
        name: 'Công Ty Tài Chính TNHH Một Thành Viên Home Credit Việt Nam'
    },
    {
        slide: 'https://static.topcv.vn/company_logos/cong-ty-co-phan-dich-vu-ca-phe-cao-nguyen-highlands-coffee-service-jsc-5d65df94c33f2.jpg',
        name: 'Công ty Cổ phần Dịch vụ Cà phê Cao Nguyên (HIGHLANDS COFFEE SERVICE JSC)'
    },
    {
        slide: 'https://static.topcv.vn/company_logos/fpt-software-6073b38a10cb4.jpg',
        name: 'FPT SOFTWARE'
    },
    {
        slide: 'https://static.topcv.vn/company_logos/cong-ty-tnhh-xuat-nhap-khau-phat-trien-dong-duong-tap-doan-the-thao-kingsport-63bbc55e020e7.jpg',
        name: 'CÔNG TY TNHH XUẤT NHẬP KHẨU PHÁT TRIỂN ĐÔNG DƯƠNG - TẬP ĐOÀN THỂ THAO KINGSPORT'
    },
    {
        slide: 'https://static.topcv.vn/company_logos/cong-ty-co-phan-giao-hang-tiet-kiem-637de1b0d244b.jpg',
        name: 'CÔNG TY CỔ PHẦN GIAO HÀNG TIẾT KIỆM'
    },
    {
        slide: 'https://static.topcv.vn/company_logos/cong-ty-co-phan-vang-bac-da-quy-phu-nhuan-pnj-57982df8e7753_rs.jpg',
        name: 'Công Ty Cổ Phần Vàng Bạc Đá quý Phú Nhuận - PNJ'
    },
    {
        slide: 'https://static.topcv.vn/company_logos/cong-ty-tnhh-xuat-nhap-khau-phat-trien-dong-duong-tap-doan-the-thao-kingsport-63bbc55e020e7.jpg',
        name: 'CÔNG TY TNHH XUẤT NHẬP KHẨU PHÁT TRIỂN ĐÔNG DƯƠNG - TẬP ĐOÀN THỂ THAO KINGSPORT'
    },
    {
        slide: 'https://static.topcv.vn/company_logos/cong-ty-tnhh-xuat-nhap-khau-phat-trien-dong-duong-tap-doan-the-thao-kingsport-63bbc55e020e7.jpg',
        name: 'CÔNG TY TNHH XUẤT NHẬP KHẨU PHÁT TRIỂN ĐÔNG DƯƠNG - TẬP ĐOÀN THỂ THAO KINGSPORT'
    },
]

main.innerHTML = slideImg.map((ele, index) => (
    `
          <div class="mySlides fade">
                <label class="fast500 top-company__label">fast500</label>
                <img src="${ele.slide}" alt="">
                <a href="">
                    <h4 class="company-title">${ele.name}</h4>
                </a>
                <label for="" class="company-badge">1 việc làm</label>
                <button class="follow-company">Theo dõi</button>
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
    const numSlides = slides.length;
    if (n > numSlides) {
        slideIndex = 4;
    }
    if (n < 1) {
        slideIndex = numSlides;
    }
    for (i = 0; i < numSlides; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("slide-animation");
    }
    const firstIndex = ((slideIndex - 1) % numSlides + numSlides) % numSlides;
    for (i = 0; i < 4; i++) {
        const index = (firstIndex + i) % numSlides;
        slides[index].style.display = "flex";
        slides[index].classList.add("slide-animation");
    }
}

let autoSlideTimer;
let autoSlideTimeout;

function startAutoSlideTimer() {
    autoSlideTimeout = setTimeout(() => {
        autoSlideTimer = setInterval(() => {
            plusSlides(4);
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

